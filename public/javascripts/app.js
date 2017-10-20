$( document ).ready(function() {
  // navbar enter animation
  $('#navbar').jAnimateOnce('fadeInDown');

  // winerie reservation accordion
  $('#accordion-schedule').on('click', function() {
    $(this).hide();
    $('.reviews').addClass('down');
    $('.winerie-info').addClass('down');
    $('.book').addClass('blue');
  });

  // winerie gallery top banner
  $('.topbanner.winerie > .layer').on('click', function(){
    $('.topbanner.winerie, .topbanner.winerie > .layer, .topbanner.winerie .book, .topbanner.winerie .info').toggleClass('expand');
  });

  // winerie scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() > 70) {
      $('.topbanner.winerie, .topbanner.winerie > .layer, .topbanner.winerie .book, .topbanner.winerie .info').removeClass('expand');
    }
    else {
      // $('.topbanner.winerie > img, .topbanner.winerie > .layer').addClass('expand');
    }
  });

  // winerie info tabs
  $('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current').jAnimateOnce('fadeIn');
	});

});
