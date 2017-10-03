'use strict';

var src = 'https://www.youtube-nocookie.com/embed/gNX2sv3KJpI?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;playsinline=1&amp;&amp;end=493&amp;start=';
var minStart = 27;
var maxStart = 492;
var start = minStart + Math.floor(Math.random() * (maxStart - minStart));
document.querySelector('iframe').src = src + start;
