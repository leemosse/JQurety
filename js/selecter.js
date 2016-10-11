$(document).ready(function()  {

// $('a');
// $('#MyId');
// $('.myClass')
// $('input[name="email"]');
// $('#header h1.title');
// $('div.myClass, ul.fruits');
//
var a= $('a');
  a.attr('href','http://www.naver.com');
  a.html('Naver');

  $('ul li').has('p');
  $('ul li').not('.selected');
  $('ul li').first();
  $('ul li').eq(2);

  $('.fruits').find('.selected').css('color','red')

$('input[type="text"]').click(function(){
  alert('text입력ㄱㄱ')
})


$('h1.title').on('click',function(){
  alert('하이퍼링크 지원')
})

});
