$(function() {
  //abrir e fechar menu
    $('.navtoggle, .navclose') .click(function(e) {
      e.preventDefault ();
      $('.nav') .toggleClass ('active');
  });
});

var lastScrollTop = 0;
$(window).scroll(function(event){
  var st = $(this).scrollTop()
  if (st > lastScrollTop || st === 0){
    $('.lista').slideDown("fast")
  } else {
    $('.lista').slideUp("fast")
  }
  lastScrollTop = st;
})
