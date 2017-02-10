$(document).ready(function(){
	var disturbed = false;
	$(".button-collapse").sideNav();
	$('.parallax').parallax();
	$('.carousel').carousel();

	// $('.carousel').click(function(){
	// 	disturbed = 4;
	// });

	$('.carousel').hover(function(){disturbed = true},function(){disturbed = false});

	setInterval(function(){
		if (!disturbed){
			$('.carousel').carousel('next');
		}
	}, 2000);

	$('#contact').submit(function(){
		var name = $('#name').val();
		var callback = $('#email').val();
		var project = $('#project').val();

		if (callback.length > 0 && name.length > 0 && project.length > 0){
			var email = "sonny.tosco@gmail.com";   //Enter Email Here
			var subject = name + " wants to talk about their project";
			var body = "Hello Ronin Dev Team,\n\n " +
			"I would like to have a project built, " +
			project +
			"\n\nThank You,\n" + `${name}\n` + callback;
			document.location=`mailto:${email}?subject=${subject}&body=` + encodeURIComponent(body);
		}
		return false;
	});

	$(window).resize(function () {
		var screen = $(window);
		if (screen.width() < 993) {
			$("#contact-form-location").html("down below");
			$("#navbar-mobile").css("display","block");
			$("#navbar-desktop").css("display", "none");
		}
		else {
			$("#contact-form-location").html("on your right");
			$("#navbar-mobile").css("display","none");
			$("#navbar-desktop").css("display", "block");
		}
		$(".tech-card").css("height", $("#back-end-card").css("height"));
		$(".portfolio-card").css("height",$("#limelight-card").css("height"));
	});

	$('.card').hover(
		function(){
			$(this).children().children('.activator').click();
			$(this).children('.activator').click(); //for the tech page since the activator is only 1 element deep
		}, function(){
			$(this).children().children('.card-title').click();
			$(this).children('.card-title').click(); //for the tech page since the activator is only 1 element deep
		}
	);

});
