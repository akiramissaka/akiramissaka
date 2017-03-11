$(document).ready(function(){
	function clickMenuMob(e){
		
		e.preventDefault();
		$('nav.menu-nav ul.main-menu').slideToggle(300);
	}
	
	function menuNav(e){
		e.preventDefault();
		$('nav.menu-nav ul.main-menu').slideToggle(300);
		$('nav.menu-nav ul.main-menu').removeClass('show-mobile');
		$('html,body').animate({scrollTop:$(this.hash).offset().top - ($('.menu-nav').height() - $('.menu-nav .main-menu').height())}, 500);
	}
	
	function checkVisible( elm, evalType ) {
		evalType = evalType || "visible";

		var vpH = $(window).height(), // Viewport Height
		st = $(window).scrollTop(), // Scroll Top
		y = $(elm).offset().top,
		elementHeight = $(elm).height();

		if (evalType === "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
		if (evalType === "above") return ((y < (vpH + st)));
	}
	
	function actualPage(){	//função para ver qual seção está mais visivel na tela para deixar a repectiva opçao do menu já selecionada
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
	$(window).on('scroll', actualPage);
});