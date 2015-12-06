'use strict';

const Path = require('path');
const Plus = require('require-plus');

const internals = {};

exports.loadRoutes = function (directory) {

    const resolved = Path.resolve(Path.dirname(module.parent.id), directory);
    const modules = Plus({
        directory: resolved
    });
    let routes = [];
    const keys = Object.keys(modules.endpoints);
    for (let i = 0; i < keys.length; ++i) {
        const route = keys[i];
        const obj = routes.concat(modules.endpoints[route]);
        routes = [].concat(obj);
    }
    return routes;

};

exports.loadSchemas = function (directory) {

    const resolved = Path.resolve(Path.dirname(module.parent.id), directory);
    const modules = Plus({
        directory: resolved
    });
    return modules;

};
