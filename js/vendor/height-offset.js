var main = document.getElementsByClassName('post-fixed')[0];
var header = document.getElementsByClassName('fixed-height')[0];

aEventListener(window, 'load', recalc);
aEventListener(window, 'resize', recalc);

function recalc() {
    main.style.paddingTop = header.clientHeight + 'px';
}

function aEventListener(el, eventName, handler) {
    if (el.addEventListener) {
        el.addEventListener(eventName, handler);
    } else if (el.attachEvent) {
        el.attachEvent('on' + eventName, function(){
            handler.call(el);
        });
    }
}