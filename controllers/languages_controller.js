const express = require('express')
const languages = express.Router()
const Language = require(`../models/language.js`)
const seedLang = require(`../models/seed.js`)
//index
languages.get(`/`, (req, res) => {
    Language.find()
        .then(foundLanguages => {
            res.json(foundLanguages)
        })
})
//seed
languages.get('/seed', (req, res) => {
    console.log("Seed")
    Language.insertMany(seedLang)
        .then(createdLang => {
            res.json({
                message: "Seed successful."
            })
        })
})

//show
languages.get(`/:name`, (req, res) => {
    Language.findOne({ name: req.params.name.toLowerCase() })
        .then(foundLanguage => {
            if (foundLanguage == null) {
                res.status(400).json({
                    "erroCode": "LANGUAGE_NOT_FOUND",
                    "errorMessage": "The language you're looking for doesn't exist"
                })
            } else {
                res.json(foundLanguage)
            }
        })
})

module.exports = languages