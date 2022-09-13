const express = require("express");

async function create_evaluation_form(req, res) {
    return res.send("Create Evaluation Form");
}

async function generate_evaluation_form(req, res) {
    return res.send("Generate Evaluation Form");
}

module.exports = {
    create_evaluation_form : create_evaluation_form,
    generate_evaluation_form : generate_evaluation_form,
}