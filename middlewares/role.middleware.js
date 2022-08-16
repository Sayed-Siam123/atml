const jwt = require("jsonwebtoken");

const config = process.env;

const roleManager = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"] || req.headers["authorization"];

    user_token = token.split(" ")[1];

    const decoded = jwt.verify(user_token, config.TOKEN_SECRET);

    console.log(decoded);

    return next();
};

module.exports = roleManager;