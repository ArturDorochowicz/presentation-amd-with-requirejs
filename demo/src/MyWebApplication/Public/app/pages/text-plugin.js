define(['jquery', 'text!app/pages/text-plugin.html'], function ($, templateHtml) {
    'use strict';

    $(function () {
        $(document.body).append(templateHtml);
    });

});

