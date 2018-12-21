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
                  start: 1986, // 从哪一天开始
                  end: 2030,
                  defaultValue: [1986, 2, 22],
                  onConfirm: function(result){
                      console.log(result);
                      $('#change').val(`${result[0].value} 年 ${result[1].value} 月 ${result[2].value} 日`)
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
