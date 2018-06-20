Template.NovoPost.events({
	"submit form": function(evento, template) {
		evento.preventDefault();
		let textoDoFormulario = evento.target.texto.value;

		Meteor.call("inserirPost", textoDoFormulario);
		evento.target.texto.value = "";
	}
});