var acc = $(".accordion");

	acc.on("click", function(e) {
		$(this).toggleClass("active");


		var panel = $(".accordion").next();
		panel.toggleClass();
	});

