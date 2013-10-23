$(document).ready(function($) {
	//------------------------------------
	// elementos ocultos inicialmente
	$('#borrarDesorden').hide();

	$('#probarToggle').hide();
	//------------------------------------
	//aplicando css desde JS
	$('h1').css({
		'color': '#454657',
		'font-size': '88px'
	});
	// aplicando clase 'colores' del estilos.css
	$('section').addClass('colores');
	// aplicando clase 'animacion' por CSS3 a un div con id
	$('#animaciones').addClass('animacion');
	// Quitando estilos a traves de jQuery
	$('#quitarClase a').click(function(event) {
		$('section').removeClass('colores').removeAttr('class');
	});
	// Agregando clase para el elemento que se retiro
	$('#ponerClase a').click('on', function(event) {
		$('section').addClass('colores');
	});
	// Ocultando el mismo elemento y cambiando elementos de mi sitio
	$('#ocultarBoton').click(function(event) {
		$(this).hide('slow/400/fast', function() {
			$('#quitarClase, #ponerClase, .animacion p').css({
				'color': '#e62cd6',
				'font-size': '66px'
			});
		if($('#borrarDesorden').is(':hidden')){
			$('#borrarDesorden').show();
		} else {
			$('#borrarDesorden').hide();
		}
		});
	});
	// Ocultar varios elementos a partir de un elemento que estaba oculto
	$('#borrarDesorden').click(function(event) {
		$('#botonesParaOcultar, #animaciones').hide();
		$(this).hide('slow/400/fast', function() {
			$('#probarToggle').show();
			$('<br /><div id="modificarContenido">'+
			  '<a class="boton">Agregando elementos</a>'+
			  '</div>').appendTo('#elementoAgregado');
		});
	});
	// Probar el toggle de jQuery
	$('#probarToggle').click(function(event) {
		$('aside').toggle('slow/400/fast');
	});
	// Cambiando texto en un elemento reemplazandolo 
	$('#elementoAgregado').click(function(event) {
		$('footer').html('<h1>copiar, distribuir y comunicar públicamente la obra</h1>');
	});
});