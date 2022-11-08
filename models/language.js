const mongoose = require('mongoose')
const {Schema} = mongoose

let languageSchema = new Schema({
    name: {
        type: String,
        required:true
},
    greeting: String,
    pangram: String,
    filler: String

})

module.exports = languageSchema