// Load modules

var Code = require('code');
var Lab = require('lab');
var Utils = require('../lib');

// Set-up lab
var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;


describe('Utils', function () {

    it('should create an array of routes for hapi', function (done) {

        var results = Utils.loadRoutes('./fixtures/routes');
        expect(results).to.be.an.array();
        done();
    });

    it('should create an object set of schemas', function (done) {

        var results = Utils.loadSchemas('./fixtures/party-schema');
        expect(results).to.be.an.object();
        expect(results.collections).to.be.an.object();
        expect(results.definitions).to.be.an.object();
        done();
    });

});
