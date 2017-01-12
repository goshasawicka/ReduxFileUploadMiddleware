var uuid = require('uuid/v4');
var fs = require('fs');

let File = require('../models/file');

module.exports = function(app){

    app.get('/', function (req, res) {
        File.find({}, function (err, file_list) {
            res.json(
                file_list.map((file)=> file)
            );
        });
    });

    app.post('/newfile', function (req,res) {
        var regex = /^data:.+\/(.+);base64,(.*)$/;
        var matches = req.body.file_content.match(regex);

        var filename = createFileName(req.body.file_content);

        fs.writeFile("./uploads/" + filename, new Buffer(matches[2], 'base64'), function(err) {});


        var id = new Date().getUTCMilliseconds();
        new File({
            'id': id,
            'file_name': req.body.file_name,
            'file_content': filename
        }).save(function (err, file) {
            res.json(file);
        });
    });

    app.delete('/file/delete/:id', function (req, res) {
        File.findOneAndRemove({'id':req.params.id}, function(err, file_delete){
            if(!file_delete || err){
                res.status(404).json();
            }else {
                fs.unlink(`./uploads/${file_delete.file_content}`, (err) => {
                        if (err) {
                            console.log(err);
                        }
                        res.json(file_delete);
                    }
                );
            }
        });
    });

    function createFileName(file_content) {
        var filename = uuid();
        // http://stackoverflow.com/questions/11335460/how-do-i-parse-a-data-url-in-node
        var regex = /^data:.+\/(.+);base64,(.*)$/;
        // console.log("controllers file: obj with file_content", req.body);
        var matches = file_content.match(regex);
        return filename + "." + matches[1];

    }
}
