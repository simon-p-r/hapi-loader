'use strict';


const Admin = require( '../handlers/admin.js' );



module.exports = [

			//Working however tweaking will be required

    {
        method: 'GET',
        path: '/',
        config: {
            handler: Admin.ping
        }
    },
    {
        method: 'GET',
        path: '/admin/routes',
        config: {
            handler: Admin.getRoutes
        }
    },
    {
        method: 'GET',
        path: '/admin/collectionNames',
        config: {
            handler: Admin.getCollectionNames
        }
    },
    {
        method: 'GET',
        path: '/admin/config',
        config: {
            handler: Admin.getConfigInfo
        }
    },
    {
        method: 'GET',
        path: '/admin/node',
        config: {
            handler: Admin.getNodeInfo
        }
    },
    {
        method: 'GET',
        path: '/admin/versions',
        config: {
            handler: Admin.getVersions
        }
    },
    {
        method: 'GET',
        path: '/admin/schema',
        config: {
            handler: Admin.getSchema
        }
    },
    {
        method: 'GET',
        path: '/admin/schemas',
        config: {
            handler: Admin.getSchemas
        }
    }

];
