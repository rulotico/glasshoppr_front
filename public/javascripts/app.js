$( document ).ready(function() {
  // navbar enter animation
  $('#navbar').jAnimateOnce('fadeInDown');

  //Preload images first
  $.fn.preload = function() {
      this.each(function(){
          $('<img/>')[0].src = this;
      });
  };
  // winerie gallery
  var images = Array("../images/sample1.jpg","../images/sample.jpg","../images/location-sample1.jpg","../images/location-sample.jpg");
  $('.topbanner.winerie').css('background', 'url('+images[0]+') no-repeat 50% fixed / cover');
  $(images).preload();
  var currimg = 0;
  var total = images.length;
  var cancelimg = false;
  var cancel = false;
  // generate navdots for slideshow navigation
  for (var i = 1; i <= total; i++) {
    $('.topbanner.winerie .info .navdots').append('<div class="navdot" id="'+(i-1)+'-img"></div>');
  }
  // slideshow navigation
  $('.navdots').on('click', '.navdot', function() {
    $('.topbanner.winerie').stop(true,true);
    cancel = true;
    getId = $(this).attr('id');
    currimg = parseInt(getId);
    $('.navdot.active').removeClass('active');
    $(this).addClass('active');
    $('.topbanner.winerie').jAnimateOnce("fadeIn");
    $('.topbanner.winerie').css("background", "url("+images[currimg]+") no-repeat 50% fixed / cover");
  });
  // hide generated navdots
  $('.navdot').hide();
  function loadimg(){
    // gallery on
    if (cancelimg === false) {
      currimg++;
      if(currimg > images.length-1){
        currimg=0;
      }
      var newimage = images[currimg];
      $('.navdot').removeClass('active');
      $('#'+currimg+'-img').addClass('active');
      $('.topbanner.winerie').jAnimateOnce("fadeIn");
      $('.topbanner.winerie').css("background", "url("+newimage+") no-repeat 50% fixed / cover");
      if (cancel === false) {
        setTimeout(loadimg,6000);
      }
    // gallery off
  } else if (cancelimg === true) {
      $('.topbanner.winerie').css('background', 'url('+images[0]+') no-repeat 50% fixed / cover');
    }
   }

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
    if ($('.topbanner.winerie').hasClass("expand")) {
      cancelimg = false;
      loadimg();
      $('.navdot').show();
    } else {
      cancelimg = true;
      setTimeout(function() {loadimg();}, 90);
      $('.navdot').hide();
    }
    return false;
  });

  // winerie scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() > 70) {
      $('.topbanner.winerie, .topbanner.winerie > .layer, .topbanner.winerie .book, .topbanner.winerie .info').removeClass('expand');
      cancelimg = true;
      setTimeout(function() {loadimg();}, 90);
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

  // winery paid reservation modal
  $("#inputDate").keyup(function(){
    if ($(this).val().length == 2){
      $(this).val($(this).val() + "/");
    // }else if ($(this).val().length == 4){
    //   $(this).val($(this).val() + "/");
    }
  });

  // user profile builder
  $('.btn.btn-white').on('click', function() {
    getParent = $(this).parents('.panel');
    $(getParent).addClass('shownone').jAnimateOnce('fadeOutLeft');
    $(getParent).next().toggleClass('shownone').jAnimateOnce('fadeInRight');
  });

});
