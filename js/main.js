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
			//this.usuario=$('#username').val();
			//this.pass=$('#password').val();
			usuario=$('#username').val();
			pass=$('#password').val();

			var request = $.ajax({
				type: "POST" ,
				crossDomain: true,
				url: "http://192.168.1.10/app_dev.php/mobileapp/" + usuario + "/" + pass
			});

			request.done(function (response, textStatus, jqXHR){
				//alert("bien " + response);console.log(response);
				$('.contenido').html(response);
			});

			request.fail(function (jqXHR, textStatus, errorThrown){
				this.showAlert("Error: " + textStatus + " | " + errorThrown, "Error");
				//console.error("DFP Plugin Error: " + textStatus, errorThrown);
			});
			event.preventDefault();
		});
    },
    recargar: function() {
		//this.showAlert(this.usuario + "/" + this.pass, "Idea");
		//this.showAlert(usuario + "/" + pass, "Idea");
		var request = $.ajax({
			type: "POST" ,
			crossDomain: true,
			url: "http://192.168.1.10/app_dev.php/mobileapp/" + usuario + "/" + pass
		});

		request.done(function (response, textStatus, jqXHR){
			//alert("bien " + response);console.log(response);
			$('.contenido').html(response);
		});

		request.fail(function (jqXHR, textStatus, errorThrown){
			this.showAlert("Error: " + textStatus + " | " + errorThrown, "Error");
			//console.error("DFP Plugin Error: " + textStatus, errorThrown);
		});
    }
};
//alert("Esto: oeoeoeoe");
//app.showAlert("prueba 1", "MiTitulo");
app.initialize();
