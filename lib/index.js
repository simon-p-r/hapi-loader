// Load modules

var Path = require('path');
var Plus = require('require-plus');

var internals = {};

internals.loadRoutes = function (directory) {

    var resolved = Path.resolve(Path.dirname(module.parent.id), directory);
    var modules = new Plus({
        directory: resolved
    }).moduleSet;
    var routes = [];
    var keys = Object.keys(modules.endpoints);
    for (var i = 0, il = keys.length; i < il; ++i) {
        var route = keys[i];
        var obj = routes.concat(modules.endpoints[route]);
        routes = [].concat(obj);
    }
    return routes;

};

internals.loadSchemas = function (directory) {

    var resolved = Path.resolve(Path.dirname(module.parent.id), directory);
    var modules = new Plus({
        directory: resolved
    }).moduleSet;
    return modules;

};


module.exports = internals;
