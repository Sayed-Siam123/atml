const express = require("express");

const getAllProducts = (req,res) => {
    res.send('get all products function');
}

const createProducts = (req,res) => {
    res.send('create products function');
}

module.exports = {
    getAllProducts : getAllProducts,
    createProducts : createProducts,
}