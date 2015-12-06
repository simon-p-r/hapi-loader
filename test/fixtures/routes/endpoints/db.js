'use strict';

const DB = require( '../handlers/db.js' );


module.exports = [

    {
        method: 'GET',
        path: '/db/buildInfo',
        config: {
            handler: DB.getBuildInfo
        }
    },
    {
        method: 'GET',
        path: '/db/ping',
        config: {
            handler: DB.ping
        }
    },
    {
        method: 'GET',
        path: '/db/collectionInfo/{collection}',
        config: {
            handler: DB.getCollectionInfo
        }
    },
    {
        method: 'GET',
        path: '/db/keys/{collection}',
        config: {
            handler: DB.getKeys
        }
    },
    {
        method: 'PUT',
        path: '/db/keys/{collection}',
        config: {
            handler: DB.updateKeys
        }
    },
    {
        method: 'DELETE',
        path: '/db/keys/{collection}',
        config: {
            handler: DB.dropAllKeys
        }
    },
    {
        method: 'DELETE',
        path: '/db/dropCollection/{collection}',
        config: {
            handler: DB.dropCollection
        }
    },

    //TODO partially working
    {
        method: 'DELETE',
        path: '/db/dropDatabase/*',
        config: {
            handler: DB.dropDatabase
        }
    }

    //TODO not implemented
    // {
    //     method: 'POST',
    //     path: '/db/keys',
    //     config: {
    //         handler: DB.transformCollection
    //     }
    // }


];
