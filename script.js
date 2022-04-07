// ==UserScript==
// @name         Facebook Play & Scroll Blocker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bolcks annoying floating videos
// @author       Abdover
// @match        https://www.facebook.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=facebook.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var timeoutId = null;
var temp = 0;
function changev() {
if (document.getElementsByClassName('tqsryivl')[0]){
  document.getElementsByClassName('tqsryivl')[0].remove();
    temp =1;
}
    if (temp==0){
  timeoutId = setTimeout(changev, 1000);}
}
changev()
})();
