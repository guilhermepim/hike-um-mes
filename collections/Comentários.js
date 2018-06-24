Comentarios = new Mongo.Collection("comentarios");

Meteor.methods({
	"inserirComentario": function(textoDoComentario, idDoPost) {
		if(Meteor.userId() !== null && textoDoComentario) {
			Comentarios.insert({
				texto: textoDoComentario,
				post: idDoPost,
				autor: Meteor.userId()
			});
		}
	}
});