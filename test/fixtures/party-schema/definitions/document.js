'use strict';


module.exports = {

        metaSchema: {
            description: 'schema for document',
            type: 'definition',
            jsonSchema: 'v4',
            name: 'document',
            version: 1
        },

        schema: {

            id: 'document',
            properties: {

                documentDate: {
                    type: 'string',
                    format: 'date'
                }

            },

            required: ['documentDate']

        }
    };
