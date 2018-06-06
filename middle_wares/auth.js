const User = require("../models/user");


let auth = (req, res, next) => {
    let token = req.cookies.auth;
    console.log(token);

    User.findByToken(token, (err, foundUser) => {
        if (err) throw (err);
        if (!foundUser) return res.json({ error: true });
        req.token = token;
        req.user = foundUser;
        next();
    });

}

module.exports = { auth };
