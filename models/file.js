var mongoose = require('mongoose');

var FileSchema = new mongoose.Schema({
    id: Number,
    file_name: {type: String, default: "No Name"},
    file_content: {type: String}
})

module.exports = mongoose.model('File', FileSchema);

