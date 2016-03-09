var defaultConfig = require('../config'),
    cache = {};

module.exports = function(theme){
    if (theme){
        if (cache[theme]) return cache[theme];
        else {
            var themeConfig = require('../' + theme + '/config.json'),
                config = defaultConfig.concat(themeConfig);
            cache[theme] = config;
            return config;
        }
    } else return defaultConfig;
}
