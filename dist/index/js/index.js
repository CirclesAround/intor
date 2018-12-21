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
                       start: 1986, // 从哪一天开始
                       end: 2030,
                       defaultValue: [1986, 2, 22],
                       onConfirm: function onConfirm(result) {
                           console.log(result);
                           $('#change').val(result[0].value + ' \u5E74 ' + result[1].value + ' \u6708 ' + result[2].value + ' \u65E5');
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
