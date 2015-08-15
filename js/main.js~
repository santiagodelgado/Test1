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
    	self.showAlert('Aplicacion inicializada', 'Bienvenido');
		this.usuario='usuario';/*
		this.pass='';

		$('.contenido').html('<form>Usuario: <input type="text" value="'.this.usuario.'"></br>Pass: <input type="password"></form>');*/
    }
};
//alert("Esto: oeoeoeoe");
app.showAlert("prueba 1", "MiTitulo");
app.initialize();
