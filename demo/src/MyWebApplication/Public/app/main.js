require.config({
    paths: {
        'domReady': 'lib/requirejs/domReady',
        'i18n':     'lib/requirejs/i18n',
        'text':     'lib/requirejs/text',
        'jquery':   'lib/jquery/jquery-2.1.0',
    },
    shim: {
        'app/pages/legacy-dependency': {
            deps: ['jquery'],
            exports: 'legacyDep'
        },
        'app/pages/legacy': {
            deps: ['jquery', 'app/pages/legacy-dependency'],
            exports: 'legacy'
        }
    }
});

require([], function () {
    'use strict';

    var match = window.location.search.match(/page=([\w-/]+)/);
    var page = match && match[1];

    require([page]);
});
