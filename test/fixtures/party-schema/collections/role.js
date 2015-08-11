/**
 * Created by Simon on 09/01/14.
 */

'use strict';

module.exports = {

    metaSchema: {
        description: 'role definition',
        type: 'collection',
        jsonSchema: 'v4',
        name: 'role',
        version: 1,
        sid: ['role']
    },

    schema: {
        required: ['role'],

        properties: {

            role: {
                $ref: 'dbRef'
            }

        }

    }

};
