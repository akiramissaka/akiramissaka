$(document).ready(function(){
	function clickMenuMob(e){
		e.preventDefault();
		$('nav.menu-nav ul.main-menu').toggleClass('show-mobile');
		$('nav.menu-nav ul.main-menu').slideToggle(200);
	}
	
	function isMenuMobile(){
		if($('.menu-nav .menu-mob').is(':visible')){
			return true;
		}else{
			return false;
		}
	}
	
	function menuNav(e){
		e.preventDefault();
		if(isMenuMobile()){
			$('nav.menu-nav ul.main-menu').slideUp(200);
		}
		if($(this).parent().is('li')){
			$('.menu-nav .main-menu li').removeClass('selected');	//remove a classe selected de todos os li do menu
			//$(this).parent().addClass('selected');					//adiciona a classe selected ao li clicado
		}
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
	
	function menuPosition(){
		var st = $(window).scrollTop();
		var ulTop = $('nav.menu-nav ul.main-menu').offset().top;
		var navHeight = $('nav.menu-nav').offset().top + $('nav.menu-nav').height();

		if(isMenuMobile() == false){
			var t, t2;
			
			if(st >= ulTop && $('nav.menu-nav ul.main-menu').hasClass('fixed') == false){
				$('nav.menu-nav .logo a').addClass('invisible');
				$('nav.menu-nav ul.main-menu').addClass('fixed');
				t = setTimeout(function(){ 
					$('nav.menu-nav .logo a').addClass('fixed');
					$('nav.menu-nav .logo a').removeClass('invisible');
				}, 200);
				//clearTimeout(t);
				console.log(1);
			}
			//console.log(st  + '//' + navHeight);
			if(st <= navHeight){
				//$('nav.menu-nav .logo a').removeClass('invisible');
				$('nav.menu-nav ul.main-menu').removeClass('fixed');
				//t2 = setTimeout(function(){ 
					$('nav.menu-nav .logo a').removeClass('fixed');
				//}, 300);
			}
		}else{
			if($('nav.menu-nav .dev').is(':visible')){
				$('nav.menu-nav .dev').fadeOut(200);
			}
			
		}
	}
	

	//$('#sobre').backstretch('img/bg/bg-sobre.jpg');
	
	//adicionando listeners de eventos
	$('.menu-nav .menu-mob').on('click', clickMenuMob);
	$('.main-menu a, .bt-contato a, .menu-nav .logo a').on('click', menuNav);
	//$('.bt-contato a').on('click', menuNav);
	$(window).on('scroll', function(){currentPage(); menuPosition()});
});