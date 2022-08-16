const express = require("express");
const jwt = require("jsonwebtoken");

async function login(req, res) {

    const c_email = "admin@admin.com";
    const c_password = "admin";
    var token = "";

    try {
        // Get user input
        const data = req.body;

        console.log(req.body["email"]);

        // Validate user input
        if (!data["email"]) {
            res.status(400).send({
                "status" : 400,
                "message" : "Email is required",
            });
        }

        if(!data["password"]){
            res.status(400).send({
                "status" : 400,
                "message" : "Password is required",
            });
        }

        if (data["password"] === c_password) {
            // Create token
            // save user token
            // user.token = jwt.sign(
            //     {user_id: 1, c_email},
            //     process.env.TOKEN_KEY,
            //     {
            //         expiresIn: "24h",
            //     }
            // );

            token = jwt.sign(

                {id: 1, email: data["email"],role: "admin"},

                process.env.TOKEN_SECRET,

                {expiresIn: process.env.JWT_EXPIRES_IN,},
            );
            // user
            res.status(200).json({
                "status" : 200,
                "message" : "User Logged in successfully",
                "email" : data["email"],
                "token" : token,
            });
        }

        else{
            res.status(400).send({
                "status" : 400,
                "message" : "Something wrong",
            });
        }

        // Validate if user exist in our database
        //const user = await User.findOne({email});

    } catch (err) {
        console.log(err);
    }
}

async function registration(req, res) {

    //const c_email = "admin@admin.com";
    const c_password = "admin";
    var token = "";

    try {
        // Get user input
        const {c_email, password, full_name, employeeID = 3400, department} = req.body;

        // Validate user input
        if (!c_email) {
            res.status(400).send({
                "status" : 400,
                "message" : "Email is required",
            });
        }

        if(!password){
            res.status(400).send({
                "status" : 400,
                "message" : "Password is required",
            });
        }

        if(!full_name){
            res.status(400).send({
                "status" : 400,
                "message" : "Full Name is required",
            });
        }

        if(!department){
            res.status(400).send({
                "status" : 400,
                "message" : "department is required",
            });
        }


        if (password === c_password) {
            token = jwt.sign(

                {ID: 1, mail: c_email,role: "admin"},

                process.env.TOKEN_SECRET,

                {expiresIn: process.env.JWT_EXPIRES_IN,}
            );

            res.status(201).json({
                "status" : 201,
                "message" : "User signed up successfully",
                "email" : c_email,
                "token" : token,
            });
        }

        else{
            res.status(400).send({
                "status" : 400,
                "message" : "INVALID CRED",
            });
        }

        // Validate if user exist in our database
        //const user = await User.findOne({email});

    } catch (err) {
        console.log(err);
    }
}


module.exports = {
    login : login,
    registration: registration,
}