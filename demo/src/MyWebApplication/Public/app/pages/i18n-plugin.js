define(['jquery', 'i18n!app/pages/nls/resources'], function ($, resources) {
    'use strict';

    $(function () {
        $('<h3></h3>').text(resources['my-text']).appendTo(document.body);
    });

});
