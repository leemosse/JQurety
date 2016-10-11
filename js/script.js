$(document).ready(function() {


  $('a').click(function(){
    $.get('ajax.html',myCallBack);
  })

  function myCallBack() {
    alert("callbackstart");
  }

});
