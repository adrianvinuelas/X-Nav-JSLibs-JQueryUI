jQuery(document).ready(function() {
	$(function() {
		$( "#date" ).datepicker();
		$( "#date1" ).datepicker();
		$( "#button").button();
	});

	$(function() {
		$( "#menu" ).menu();
	});

	$(function() {
		$( "#accordion" ).accordion();
	});

	$(function() {
		$( "#draggable" ).draggable();
		$( "#droppable" ).droppable({
			drop: function( event, ui ) {
				$( this )
				.find( "p" )
				.html( "25% de descuento si reservas con dos semanas de antelación" );
				$( "#droppable" ).animate({
					backgroundColor: "red",
					color: "#000",
					width: 430,
					height: 30,
					margin: 70
				}, 1000 );
				runEffect();
			}
		})
		function runEffect() {
			// get effect type from
			var selectedEffect = "explode";
			var options = {};
			$( "#draggable" ).effect( selectedEffect, options, 500);
		};
	});
	
});
