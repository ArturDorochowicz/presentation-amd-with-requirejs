define(function (require) {
    'use strict';

    var $ = require('jquery');
    var dependency = require('./relative-path-dependency');

    $(function () {
        $('<h3></h3>').text(dependency).appendTo(document.body);
    });

});
