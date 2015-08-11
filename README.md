# hapi-loader

[![Build Status](https://travis-ci.org/simon-p-r/hapi-loader.svg?branch=master)](https://travis-ci.org/simon-p-r/hapi-loader)
[![Current Version](https://img.shields.io/npm/v/hapi-loader.svg)](https://www.npmjs.org/package/hapi-loader)
![Dependencies](http://img.shields.io/david/simon-p-r/hapi-loader.svg)
![devDependencies](http://img.shields.io/david/dev/simon-p-r/hapi-loader.svg)


Some load utils for hapi


## Installation
```js
    npm install hapi-loader
```
## Usage

```js

    var Loader = require('hapi-loader');
```

Input is a relative or complete path to routes, the directory structure must contain folders called endpoints and handlers, see the example in test/fixtures directory

```js
    var routes = Loader.loadRoutes(directory);
```

Routes will be an array of routes which can be passed to hapi's server.routes() method for registering

```js
    var schemas = Loader.loadSchemas(directory);
```
Schemas will be an object contain schemas for loading by a plugin



## Todo

+ 100% code coverage
+ Handle errors better
