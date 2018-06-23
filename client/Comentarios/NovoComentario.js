Template.NovoComentario.events({
	"submit form": function(evento, template) {
		evento.preventDefault();
		let texto = evento.target.texto.value;
		let idDoPost = template.data._id;

		Meteor.call("inserirComentario", texto, idDoPost);
		
		evento.target.texto.value = "";
	}
});