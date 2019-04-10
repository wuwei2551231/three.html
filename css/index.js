$(function(){
	// m-导航菜单
	$('.menu').click(function(){
		$(this).next().slideToggle(300).end().toggleClass('show'); 
	})
	
	// m-搜索
	$('.search').click(function(){
		$(this).closest('.header').find('.search-in').slideToggle(100);
		$(this).toggleClass('show');
	})
	
	//m-answer
	$('.answer p').click(function(){
		if($(window).outerWidth()>=1024){//电脑端不操作
			return false;
		}
		$(this).next().slideToggle(300);
		$('.answer p').not($(this)).removeClass('show').next().slideUp(300);
		$(this).toggleClass('show');
	})
	
	//m-footer
	$('.footer-p').click(function(){
		$(this).next().slideToggle(300);
		$('.footer-p').not($(this)).next().hide();
	})
	
	//swiper 插件
	var swiper = new Swiper('.swiper-container', {
	  loop: true,
	  centeredSlides: true,
	  autoplay: {
	    delay: 2500,
	    disableOnInteraction: false,
	  },
	  pagination: {
	    el: '.swiper-pagination',
	    clickable: true,
	  },
	  navigation: {
	    nextEl: '.swiper-button-next',
	    prevEl: '.swiper-button-prev',
	  },
	});
})

