module.exports = function (grunt) {

    grunt.initConfig({
        requirejs: {
            all: {
                options: {
                    appDir: 'Public/',
                    dir: 'Public/build/',
                    baseUrl: './',
                    mainConfigFile: 'Public/app/main.js',
                    optimizeCss: 'none',
                    //locale: 'pl', // can include one i18n locale, root resources are always included
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
