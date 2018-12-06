(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
   typeof define === 'function' && define.amd ? define('index', factory) :
   (factory());
}(this, (function () { 'use strict';

   window.addEventListener('DOMContentLoaded', function () {
       var app = {
           data: {},
           init: function init() {
               this.attachEvent();
               this.methods.test();
           },
           attachEvent: function attachEvent() {},

           methods: {
               test: function test() {
                   console.log(2);
               }
           }
       };
       app.init();
   });

})));
