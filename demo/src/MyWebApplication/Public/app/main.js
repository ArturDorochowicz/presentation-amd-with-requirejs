require.config({
    paths: {
        'domReady': 'lib/requirejs/domReady'
    }
});

require(['domReady'], function (domReady) {
    'use strict';

    domReady(function () {
        document.body.innerHTML += '<p>Hello World!</p>';
    });
});

