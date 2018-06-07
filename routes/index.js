const express = require("express"),
    router = express.Router();

const User = require("../models/user.js"),
    { auth } = require("../middle_wares/auth");


router.get("/employees", (req, res) => {
    User.find({ isAdmin: false }, (err, foundUsers) => {
        if (err) res.send({ err: true, message: "got error" });
        res.json({ employees: foundUsers });
    });
});

router.post("/users/register", (req, res) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password,
        isAdmin: false,
        isEmployee: true,
        name: req.body.name,
        deparment: req.body.deparment
    });


    user.save((err, createdUser) => {
        if (err) {
            console.log(err);
            return res.status(400).send(err);

        }
        res.status(200).send({ message: "Successfully registered" });
    })

});

router.post("/users/login", (req, res) => {
    User.findOne({ email: req.body.email }, (err, foundUser) => {
        if (!foundUser) return res.send({ message: "no user found" });
        foundUser.comparePassword(req.body.password, (err, isMatch) => {
            if (err) throw err;
            if (!isMatch) res.status(400).send({ message: "wrong password", err: true });
            foundUser.generateToken((err, userWithToken) => {
                if (err) return res.status(400).send({ err: true, isAuth: false });
                res.cookie("auth", userWithToken.token).json({
                    isAuth: true,
                    token: userWithToken.token,
                    email: userWithToken.email
                })
            })
        })

    });

});

router.get("/users/logout", auth, (req, res) => {
    req.user.deleteToken(req.token, (err, user) => {
        if (err) return res.status(400).send(err);
        res.sendStatus(200)
    })
});

module.exports = router;
