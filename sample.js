'use strict';

window.socialShareCallback = (function(window, document){
    function twitter(callback) {
        twttr.ready(function (twttr) {
            twttr.events.bind('tweet', callback);
        });
    };
    return {
        twitter: twitter,
    };

})(window, document);