const mongoose = require('mongoose');


const worksSchema = mongoose.Schema(
    {
        Name: String,
        img: String,
        url: String
    }
)

const workModel = mongoose.model("works", worksSchema);

module.exports = workModel;