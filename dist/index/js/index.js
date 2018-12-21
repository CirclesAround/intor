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
           },
           attachEvent: function attachEvent() {
               $('#change').on('click', function () {
                   weui.datePicker({
                       start: new Date(), // 从今天开始
                       end: 2030,
                       defaultValue: [2020, 6, 9],
                       onChange: function onChange(result) {
                           console.log(result);
                       },
                       onConfirm: function onConfirm(result) {
                           console.log(result);
                       },
                       id: 'datePicker'
                   });
               });
           },

           methods: {}
       };
       app.init();
   });

})));
