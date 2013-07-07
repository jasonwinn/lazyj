/*
 * Author: Jason Winn
 * http://jasonwinn.org
 *
 * Created June 2013
 * Released under the MIT License
 */ 

var lazyj = function () {
    'use strict';

    // One Time Collection of images
    var images = document.images,
        timer = 0,
        count = images.length,
        LIMIT = 20, // Minimum execution time in ms
        BUFFER = 200; // Load any images with 200px

    // Add Handler Function 
    // We use this to not override any existing dom event bindings
    var addHandler = function (elem, type, handler) {
        if (elem.addEventListener) {
            elem.addEventListener(type, handler, false);
        } else if (elem.attachEvent) {
            elem.attachEvent('on' + type, handler);
        } else {
            elem['on' + type] = handler;
        }
    };


    var loadImages = function() {
        var i = 0,
            img,
            src,
            proceed;

        while (i < count) {
            img = images[i];
            proceed = img.getAttribute('data-lazyj');
            src = img.getAttribute('data-src');
            
            // replace attributes
            if (proceed === 'true' && src && inViewport(img)) {
                img.src = src;
                img.setAttribute('data-lazyj', false);
            }

            i++;
        }
    };


    // Limit the loadImages call to execute no faster than every 20ms
    var timeImages = function () {
        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(function () {
            loadImages();
        }, LIMIT);
    };


    // Credit John Resig for this approach (instead of using offset)
    var inViewport = function(elem) {
        var rect = elem.getBoundingClientRect();

        return ( 
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= ((window.innerHeight + BUFFER) || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    
    // OnScroll
    addHandler(window, 'scroll', function() {
        timeImages();
    });

    
    // Resize
    addHandler(window, 'resize', function() {
        timeImages();
    });

    loadImages();
}();

