'use strict';


module.exports = {

    ping: function (request, reply) {

        return reply('Ping');

    },

    getConfigInfo: function (request, reply) {

        return reply('Config');
    },      // end getConfigInfo()


    getRoutes: function (request, reply) {

        const serverTable = request.server.table();
        const list = [];
        serverTable.forEach((connection) => {

            const table = connection.table;
            table.forEach((route) => {

                list.push(route.method.toUpperCase() + ' ' + route.path );
            });
        });
        return reply(list);

    },


    getCollectionNames: function (request, reply) {

        return reply('Collections');
    },


    getNodeInfo: function (request, reply) {

        const ni = {

            pid: process.pid,
            versions: process.versions,
            title: process.title,
            arch: process.arch,
            debugPort: process.debugPort,
            execPath: process.execPath,
            features: process.features,
            mainModule: {
                filename: process.mainModule.filename
            },
            platform: process.platform

        };

        return reply(ni);

    },


    getVersions: function (request, reply) {

        return reply('versions');

    },


    getSchema: function (request, reply) {

        return reply('Schema');

    },

    getSchemas: function (request, reply) {

        return reply('schemas');

    }

};
