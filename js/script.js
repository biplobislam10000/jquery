// js










// jq

$(document).ready(function(){

	// alert start

    $('#bttn').on("click", function(){
        alert("Hello World");
	});

	// hide
	$('#btnh').on('click',function(){
		$('.sh').hide();
	});

	// show
    $('#btns').on('click',function(){
		$('.sh').show();
	});

	// toggle
    $('#btnt').on('click',function(){
		$('.tgl').toggle();
	});


	// fafde
	// hide
	$('#fbtnh').on('click',function(){
		$('.fsh').fadeOut(3000);
	});

	// show
    $('#fbtns').on('click',function(){
		$('.fsh').fadeIn(3000);
	});

	// toggle
    $('#fbtnt').on('click',function(){
		$('.ftgl').fadeToggle(3000);
	});

	// animistion effect
	$('.ques').on('click',function(){
		$('.ans').slideToggle(1000);
	});

	// draggble 
	$("#draggable" ).draggable();
    
    // shortable
    $( "#sortable" ).sortable();
    
    // Accordion
    $( "#accordion" ).accordion();

    // Autocomplete
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $("#tags").autocomplete({
      source: availableTags
    });
    
    // Checkboxradio
    $( "input" ).checkboxradio();

    // Controlgroup
    $( ".controlgroup" ).controlgroup()
    $( ".controlgroup-vertical" ).controlgroup({
      "direction": "vertical"
    });

    // Datepicker
    $( "#datepicker" ).datepicker();
});