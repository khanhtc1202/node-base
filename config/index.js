var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development',
    port = 5000;

var config = {
    development: {
        root: rootPath,
        app: {
            name: 'sample-mvc'
        },
        port: port
    },

    production: {
        root: rootPath,
        app: {
            name: 'server-app'
        },
        port: port
    }
};

module.exports = config[env];
