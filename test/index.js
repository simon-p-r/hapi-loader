'use strict';

const Code = require('code');
const Lab = require('lab');
const Utils = require('../lib');

// Set-up lab
const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;


describe('Utils', () => {

    it('should create an array of routes for hapi', (done) => {

        const results = Utils.loadRoutes('./fixtures/routes');
        expect(results).to.be.an.array();
        done();
    });

    it('should create an object set of schemas', (done) => {

        const results = Utils.loadSchemas('./fixtures/party-schema');
        expect(results).to.be.an.object();
        expect(results.collections).to.be.an.object();
        expect(results.definitions).to.be.an.object();
        done();
    });

});
