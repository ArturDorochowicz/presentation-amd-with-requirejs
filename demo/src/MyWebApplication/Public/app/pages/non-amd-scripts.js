define(['jquery', 'app/pages/legacy'], function ($, legacy) {
    'use strict';

    $(function () {
        $.each(legacy(), function () {
            $('<h3></h3>').text(this).appendTo(document.body);
        })
    });

});
