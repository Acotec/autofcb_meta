// ==UserScript==
// @name         ALBypass
// @namespace    https://github.com/Acotec/autofcb
// @version      0.1.7
// @description  Bypass URL links
// @author       Acotec
// @updateURL    https://github.com/Acotec/autofcb_meta/raw/master/ALBypass.user.js
// @downloadURL  https://github.com/Acotec/autofcb_meta/raw/master/ALBypass.user.js
// @match        *://*/*
// @include      *
// @resource     key https://gist.githubusercontent.com/Harfho/d4805d8a56793fa59d47e464c6eec243/raw/keyEncode.txt
// @resource     delaypage https://gist.githubusercontent.com/Harfho/e6ed9bbe9feb74e71030c680feba9d71/raw/delaypage.txt
// @icon64       data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAiCAMAAAA9FerRAAAAk1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB6eSN1AAAAMHRSTlMA+AXo17f1r6iQfTkqGBMJ/OzlYDMN3MSfW0DhonlpSBzRjIp0bk4iEfC/mIVWyGRxeTntAAABfklEQVQ4y5WU15KDMAxF6S10AoEAIb1nV///dSubTfOIdh8YxvJBvjKSNFrm+vWquNIEOdmT9DbgTABTo5y3+RYA5ZSUOsjOKVCkGlBTwC1wRSE+1OHtXnM3t/sCy1HBW/EAdTrqr61V9gHmfal2mgxdWnRicx36VHVg5wr6taK5WTzAyQrJuSoM6Uzai2FQPsHl4TBnEfauMEK1iPk2jNJD4I4GjFPyhS2vMFJy8ImZw4BYG+/hWCqMl+7+FzLk6a1dOIYy9OP7lMkhmQX7b07ND8uTIlT5p24U8SIsXNcMZqD53dpJO5hS5uDZXJG9JH7PDQZyDcPF5/KefS1rj7jyqN9TxQ2+KfaLH+HKjGe8BxLFXQD0QIrFzt4xry4vJN1+ETpD0zXo3ldCZvlwwUfpU1yCcZsXSzjODRGTX3BDde2ChUkDaC6LO2caq+RNoUZ+iRGHX+mZBqOCNK7xoQSMligFCTl41jJH0g1WOpUmyAtb66ldSNNky1kv8gc+oY9OF7+D2wAAAABJRU5ErkJggg==
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        window.close
// @grant        GM_setClipboard
// @grant        GM_notification
// @grant        GM_xmlhttpRequest
// @grant        GM_getResourceText
// @grant        GM_registerMenuCommand
// @run-at       document-idle
// @run-at       document-start
// @connect      api.yuumari.com
// @connect      yuumari.com
// @connect      github.com
// @connect      gist.github.com
// @connect      gist.githubusercontent.com
// @connect      emailjs.com
// @noframes
// @require      https://github.com/Acotec/autofcb_script/raw/master/ALBypass.user.js
// ==/UserScript==
