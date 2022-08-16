const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"] || req.headers["authorization"] || req.headers["Authorization"];

    //console.log(token);
    //console.log(token.split(" ")[1]);
    user_mail = "admin@admin.com";
    user_token = token.split(" ")[1];

    if (!user_token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const decoded = jwt.verify(user_token, config.TOKEN_SECRET);

        //console.log(decoded["c_email"]);
        console.log(decoded);

        if(decoded["email"] !== user_mail){
            return res.status(403).send({
                "status" : 403,
                "message" : "User unauthenticated",
            });
        }

        else{
            return next();
        }

    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
};

module.exports = verifyToken;