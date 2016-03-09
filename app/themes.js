var fs = require('fs'),
    config = require('../config'),
    themeDirs = fs.readdirSync(config.source),
    themes = {};

themeDirs.forEach(function(f, i, a){
    var configPath = '../' + config.source + '/' + f + '/config',
        fileExists = false;
    try {
        var themeConfig = require(configPath),
            fileExists = true;
    } catch (e) {}
    if (fileExists) {
        var newConfig = {},
            props = Object.keys(config),
            i = props.length;
        while (i--) {
            newConfig[props[i]] = config[props[i]];
        }
        props = Object.keys(themeConfig)
        i = props.length;
        while (i--) {
            newConfig[props[i]] = themeConfig[props[i]];
        }
        themeConfig = newConfig;
    } else {
        var themeConfig = config;
    }
    themes[f] = {
        name: f,
        config: themeConfig
    };
});

module.exports = themes;
