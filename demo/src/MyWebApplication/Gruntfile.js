var path = require('path');

module.exports = function (grunt) {
    var appDir = path.join(grunt.option('appDir') || './', 'Public/');

    grunt.initConfig({
        requirejs: {
            all: {
                options: {
                    appDir: appDir,
                    baseUrl: './',
                    dir: path.join(appDir, 'build/'),
                    mainConfigFile: path.join(appDir, 'app/main.js'),
                    optimizeCss: 'none',
                    // can include one i18n locale, root resources are always included
                    //locale: 'pl',
                    modules: [{
                        name: 'app/main',
                        include: [
                            'app/pages/dom-ready',
                            'app/pages/i18n-plugin',
                            'app/pages/text-plugin',
                            'app/pages/relative-path',
                            'app/pages/non-amd-scripts']
                    }]
                }
            }
        }
    });

    grunt.loadTasks('../../node_modules/grunt-contrib-requirejs/tasks');
};
