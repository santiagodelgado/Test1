var app = {
/*
    findByName: function() {
        console.log('findByName');
        this.store.findByName($('.search-key').val(), function(employees) {
            var l = employees.length;
            var e;
            $('.employee-list').empty();
            for (var i=0; i<l; i++) {
                e = employees[i];
                $('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>');
            }
        });
    },

    initialize: function() {
    	self.showAlert('Store to be Initialized', 'Info');
        this.store = new MemoryStore(function() {
		    self.showAlert('Store Initialized', 'Info');
		});
    	self.showAlert('Store Initialized', 'pene');
        //$('.search-key').on('keyup', $.proxy(this.findByName, this));
    }
*/

	showAlert: function (message, title) {
		if (navigator.notification) {
		    navigator.notification.alert(message, null, title, 'OK');
		} else {
		    alert(title ? (title + ": " + message) : message);
		}
	},
    initialize: function() {
    	//this.showAlert('Aplicacion inicializada', 'Bienvenido');
		//this.usuario='usuario';
		//this.pass='';

		//$('.contenido').html('<form>Usuario: <input type="text" value="test"></br>Pass: <input type="password"></form>');
		$('.form-signin').submit(function (event) {
			var request = $.ajax({
				type: "POST" ,
				crossDomain: true,
				url: "http://192.168.1.10/app_dev.php/mobileapp/" + $('#username').val() + "/" + $('#password').val()
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
    }
};
//alert("Esto: oeoeoeoe");
//app.showAlert("prueba 1", "MiTitulo");
app.initialize();
