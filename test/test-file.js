process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();
var mongoose = require('mongoose');
var config = require('../config')['test'];

chai.use(chaiHttp);


let File = require('../models/file');

describe("Test /files", function() {

    before(function(done) {
        if (mongoose.connection.db) return done();
        mongoose.connect(dbURI, done);
    });
    beforeEach(function(done) {
        require('mocha-mongoose')(config.db, {noClear: true})(done)
    });

    it('GET /files should list all files', function(done) {
        chai.request(server)
            .get('/')
            .end(function(err, res){
                res.should.have.status(200);
                done();
            });
    });

    it('POST /newfile should create a new file without name', function(done) {
        chai.request(server)
            .post('/newfile')
            .send({'file_content': 'data:image/png;base64,ZGFrYQo='})
            .end(function(err, res){
                res.should.have.status(200);
                res.body.file_name.should.eq("No Name");
                done();
            });
    });

    it('POST /newfile should create a new file', function(done) {
        chai.request(server)
            .post('/newfile')
            .send({'file_name': 'some picture', 'file_content': 'data:image/png;base64,ZGFrYQo='})
            .end(function(err, res){
                res.should.have.status(200);
                res.body.file_name.should.eq("some picture");
                done();
            });
    });
    it('DELETE /file/delete/:id should delete a file', function(done) {
        new File({'id': 100}).save(function(){});

        chai.request(server)
            .delete('/file/delete/100')
            .end(function(err, res){
                res.should.have.status(200);
            });

        chai.request(server)
            .delete('/file/delete/100')
            .end(function(err, res){
                res.should.have.status(404);
                done();
            });
    });

});
