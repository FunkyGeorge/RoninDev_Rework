$(document).ready(function(){
	var disturbed = 0;
	$(".button-collapse").sideNav();
	$('.carousel').carousel();

	$('.carousel').click(function(){
		disturbed = 4;
	});

	setInterval(function(){
		if (disturbed > 0){
			disturbed--;
		} else {
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

});
