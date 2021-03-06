const express = require("express"),
    router = express.Router();
const { auth } = require("../middle_wares/auth.js");
const User = require("../models/user.js"),
    Leave = require("../models/leaves.js");

router.get("/register", (req, res) => {
    res.render("employee/register");
});


router.post("/register", (req, res) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password,
        isAdmin: false,
        isEmployee: true
    });


    user.save((err, createdUser) => {
        if (err) {
            console.log(err);
            return res.status(400).send(err);

        }
        res.status(200).send({ message: "Successfully registered" });
    })

});


router.get("/login", (req, res) => {
    res.render("employee/login");
});

router.get("/leave", auth, (req, res) => {
    res.render("employee/leave");
});

router.post("/leave", auth, (req, res) => {
    console.log(req.user);
    var newLeave = new Leave({
        leaveDate: req.body.leaveDate,
        leaveReason: req.body.leaveReason,
        isApproved: false,
        isSeen: false,
        email: req.user.email
    });
    newLeave.save((err, saveLeave) => {
        if (err) res.status(400).send({ message: "error in saving leave", err: true });
        res.status(200).send({ message: "Submited Leave Successfully", err: false });
    });
});

router.post("/", auth, (req, res) => {
    let currentEmployee = req.user.populate("leaves");
    console.log(currentEmployee);
    res.json({ employee: currentEmployee })
});




module.exports = router;
