define(['domReady'], function (domReady) {
    'use strict';

    domReady(function () {
        document.body.innerHTML += '<h3>Hello from dom-ready</h3>';
    });
});
