'use strict';

window.socialShareCallback = (function(window, document){

    function facebook(callback) {
        FB.ui({
            method: 'share',
            href: location.href
        }, function(response){
            if(callback && response) {
                callback(null, response);
            }
        });
    };

    function twitter(callback) {
        twttr.ready(function (twttr) {
            twttr.events.bind('tweet', callback);
        });
    };

    function linkedin(callback) {
        var li = document.querySelector("share");
        var successName = callback.name || 'linkedinSuccess';
        window[successName] = callback;

    };

    return {
        twitter: twitter,
        facebook: facebook,
        linkedin: linkedin
    };

})(window, document);