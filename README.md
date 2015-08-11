# hapi-utils

[![Build Status](https://travis-ci.org/simon-p-r/hapi-utils.svg?branch=master)](https://travis-ci.org/simon-p-r/hapi-utils)
[![Current Version](https://img.shields.io/npm/v/hapi-utils.svg)](https://www.npmjs.org/package/hapi-utils)
![Dependencies](http://img.shields.io/david/simon-p-r/hapi-utils.svg)
![devDependencies](http://img.shields.io/david/dev/simon-p-r/hapi-utils.svg)


Some utils for hapi


## Installation
```js
    npm install require-plus
```
## Usage

```js

    var Utils = require('hapi-utils');
```

Input is a relative or complete path to routes, the directory structure must contain folders called endpoints and handlers, see the example in test/fixtures directory

```js
    var routes = Utils.loadRoutes(directory);
```

Routes will be an array of routes which can be passed to hapi's server.routes() method for registering



## Todo

+ 100% code coverage
+ Handle errors better
