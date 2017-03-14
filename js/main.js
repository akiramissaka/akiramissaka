$(document).ready(function(){
	function clickMenuMob(e){
		e.preventDefault();
		$('nav.menu-nav ul.main-menu').toggleClass('show-mobile');
		$('nav.menu-nav ul.main-menu').slideToggle(300);
	}
	
	function menuNav(e){
		e.preventDefault();
		$('nav.menu-nav ul.main-menu').slideUp(300);
		if($('nav.menu-nav ul.main-menu').hasClass('show-mobile')){
			$('html,body').animate({scrollTop:$(this.hash).offset().top - ($('.menu-nav').height() - $('.menu-nav .main-menu').height() - 5)}, 500);
		}else{
			$('html,body').animate({scrollTop:$(this.hash).offset().top - $('.menu-nav').height() - 15}, 500);
		}
		$('nav.menu-nav ul.main-menu').removeClass('show-mobile');
	}
	
	function checkVisible(elm, evalType) {
		evalType = evalType || "visible";

		var vpH = $(window).height(), // Viewport Height
		st = $(window).scrollTop(), // Scroll Top
		y = $(elm).offset().top,
		elementHeight = $(elm).height();

		if (evalType === "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
		if (evalType === "above") return ((y < (vpH + st)));
	}
	
	function currentPage(){	//função para ver qual seção está mais visivel na tela para deixar a repectiva opçao do menu já selecionada
		var arrElmentsTop = [];
		$('.main-container > section').each(function(){
			if(checkVisible($(this))){
				arrElmentsTop.push($(this));
			}
		});
		//console.log(arrX);
	}
	
	//adicionando listeners de eventos
	$('.menu-nav .menu-mob').on('click', clickMenuMob);
	$('.main-menu a').on('click', menuNav);
	$('.bt-contato a').on('click', menuNav);
	$(window).on('scroll', currentPage);
});