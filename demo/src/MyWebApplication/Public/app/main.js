require.config({
    paths: {
        'domReady': 'lib/requirejs/domReady',
        'jquery': 'lib/jquery/jquery-2.1.0'
    }
});

require(['domReady', 'jquery'], function (domReady, $) {
    'use strict';

    domReady(function () {
        $('<p></p>').text('Hello World!').appendTo(document.body);
    });
});

