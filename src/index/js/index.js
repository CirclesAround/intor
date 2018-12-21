window.addEventListener('DOMContentLoaded' , function () {
   let app = {
       data: {

       },
       init() {
           this.attachEvent()
       },
       attachEvent () {
          $('#change').on('click', function () {
              weui.datePicker({
                  start: new Date(), // 从今天开始
                  end: 2030,
                  defaultValue: [2020, 6, 9],
                  onChange: function(result){
                      console.log(result);
                  },
                  onConfirm: function(result){
                      console.log(result);
                  },
                  id: 'datePicker'
              })
          })
       },
       methods: {

       }
   }
   app.init()
})
