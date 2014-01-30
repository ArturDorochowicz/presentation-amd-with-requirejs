(function (window, $, legacyDep) {
    'use strict';

    window.legacy = function () {
        return ['Hello from legacy ' + $.now(), legacyDep()];
    };

}(window, jQuery, legacyDep));
