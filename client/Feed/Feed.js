Template.Feed.events({
	"submit form": function(evento, template) {
		evento.preventDefault();
		let textoDoFormulario = evento.target.texto.value;
		console.log(textoDoFormulario);
		Posts.insert({
			texto: textoDoFormulario
		});
		evento.target.texto.value = "";
	}
});

Template.Feed.helpers({
	posts: function() {
		let postsDaCollection = Posts.find().fetch();
		return postsDaCollection;
	}
});	