'use strict';


module.exports = {


    getCollectionInfo: function (request, reply) {

        return reply('Collection info');
    },

    getKeys: function (request, reply) {

        return reply('Indexe information');

    },

    dropAllKeys: function (request, reply) {

        return reply('Dropped keys');

    },


    updateKeys: function (request, reply) {

        return reply('<not implemented>');
    },

    dropCollection: function (request, reply) {

        return reply('Dropped collection');
    },


    dropDatabase: function (request, reply){

        return reply('Dropped database');

    },  // end  dropDatabase()

    getBuildInfo: function (request, reply) {

        return reply('Database build info');
    },

    ping: function (request, reply) {

        return reply('Database ping');
    }

};
