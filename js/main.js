$(document).ready(function(){
	function clickMenuMob(e){
		e.preventDefault();
		$('nav.menu-nav ul.main-menu').toggleClass('show-mobile');
		$('nav.menu-nav ul.main-menu').slideToggle(200);
	}
	
	function menuNav(e){
		e.preventDefault();
		$('.menu-nav .main-menu li').removeClass('selected');	//remove a classe selected de todos os li do menu
		$(this).parent().addClass('selected');					//adiciona a classe selected ao li clicado
		$('nav.menu-nav ul.main-menu').slideUp(200);
		if($('nav.menu-nav ul.main-menu').hasClass('show-mobile')){	//caso o menu esteja aberto, subtrai a altura do ul tbm, senao apenas do nav
			$('html,body').animate({scrollTop:$(this.hash).offset().top - ($('.menu-nav').height() - $('.menu-nav .main-menu').height() - 5)}, 500);
		}else{
			$('html,body').animate({scrollTop:$(this.hash).offset().top - $('.menu-nav').height() - 15}, 500);
		}
		$('nav.menu-nav ul.main-menu').removeClass('show-mobile');
	}
	
	function currentPage(){	//função para ver qual seção está mais visivel na tela para deixar a respectiva opçao do menu já selecionada
		//console.log(e.originalEvent);
		var iScrollTop = $(window).scrollTop();
		var arrPages = $('.main-container > .page');
		
		$(arrPages).each(function(){
			var iPageStart = $(this).offset().top;
			var iPageEnd = $(this).offset().top + $(this).height();
			var self = this;
			if(iScrollTop + ($('.menu-nav').height() + 16) >= iPageStart && iScrollTop + ($('.menu-nav').height() + 16) <= iPageEnd){
				$('.menu-nav .main-menu li a').each(function(){
					if(this.hash.replace('#', '') == $(self).attr('id')){
						$('.menu-nav .main-menu li').removeClass('selected');
						$(this).parent().addClass('selected');
					}
				});
			}
		});
	
	}
	
	//adicionando listeners de eventos
	$('.menu-nav .menu-mob').on('click', clickMenuMob);
	$('.main-menu a').on('click', menuNav);
	$('.bt-contato a').on('click', menuNav);
	$(window).on('scroll', currentPage);
});