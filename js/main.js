$(document).ready(function(){
	
	function clickMenuMob(e){
		e.preventDefault();
		$('nav.menu-nav ul.main-menu').toggleClass('show-mobile');
	}
	
	
	//adicionando listeners de eventos
	$('.menu-nav .menu-mob').on('click', clickMenuMob);
});