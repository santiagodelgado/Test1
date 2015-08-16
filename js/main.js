var app = {
	showAlert: function (message, title) {
		if (navigator.notification) {
		    navigator.notification.alert(message, null, title, 'OK');
		} else {
		    alert(title ? (title + ": " + message) : message);
		}
	},
    initialize: function() {
		$('.form-signin').submit(function (event) {
			this.usuario=$('#username').val();
			this.pass=$('#password').val();

			var request = $.ajax({
				type: "POST" ,
				crossDomain: true,
				url: "http://192.168.1.10/app_dev.php/mobileapp/" + this.usuario + "/" + this.pass
			});

			request.done(function (response, textStatus, jqXHR){
				//alert("bien " + response);console.log(response);
				$('.container').html(response);
			});

			request.fail(function (jqXHR, textStatus, errorThrown){
				alert("Error: " + textStatus + " | " + errorThrown);//console.error("DFP Plugin Error: " + textStatus, errorThrown);
			});
			event.preventDefault();
			/*$.ajax({
				url: "http://192.168.1.10/app_dev.php/mobileapp/" + $('#username').val() + "/" + $('#password').val(),
				data: {
				    username: $('#username').val(),
				    password: $('#password').val(),
				},
				type: "POST",
				dataType: "html",
				success: function (data) {
				    //var result = $('<div />').append(data).find('#showresults').html();
				    //$('#showresults').html(result);
					//$('.container').html(data);
					this.showAlert("uno", 'Respuesta');
					//this.showAlert(data, 'Respuesta');
				},
				error: function (xhr, status) {
				    app.showAlert("Sorry, there was a problem!" + xhr, "a");
				},
				complete: function (xhr, status) {
				    //$('#showresults').slideDown('slow')
				}
			});*/
		});
    },
    recargar: function() {
		var request = $.ajax({
			type: "POST" ,
			crossDomain: true,
			url: "http://192.168.1.10/app_dev.php/mobileapp/" + this.usuario + "/" + this.pass
		});

		request.done(function (response, textStatus, jqXHR){
			//alert("bien " + response);console.log(response);
			$('.container').html(response);
		});

		request.fail(function (jqXHR, textStatus, errorThrown){
			alert("Error: " + textStatus + " | " + errorThrown);//console.error("DFP Plugin Error: " + textStatus, errorThrown);
		});
    }
};
//alert("Esto: oeoeoeoe");
//app.showAlert("prueba 1", "MiTitulo");
app.initialize();
