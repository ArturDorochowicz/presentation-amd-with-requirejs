(function (window, $) {
    'use strict';

    window.legacyDep = function () {
        return 'Hello from legacyDep ' + $.now();
    };

}(window, jQuery));
