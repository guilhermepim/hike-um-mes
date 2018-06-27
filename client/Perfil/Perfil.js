Meteor.subscribe("posts");

Template.Perfil.helpers({
	perfil: function() {
		let idDoUsuario = FlowRouter.getParam("id");
		let info = Meteor.users.findOne({_id: idDoUsuario});
		return info;
	},
	posts: function() {
		let idDoUsuario = FlowRouter.getParam("id");
		let postsDoPerfil = Posts.find({idDoAutor: idDoUsuario}).fetch().reverse();
		return postsDoPerfil;
	},
	segue: function() {
		let idDoUsuario = FlowRouter.getParam("id");
		let usuario = Meteor.users.findOne({_id: idDoUsuario});
		let seguidores = usuario.profile.seguidores;
		let posicao = seguidores.indexOf(Meteor.userId());

		if(posicao === -1) {
			return false;
		} else {
			return true;
		}
	},
	euMesmo: function() {
		let idDoUsuario = FlowRouter.getParam("id");
		if(idDoUsuario === Meteor.userId()) {
			return true;
		} else {
			return false;
		}
	}
});

Template.Perfil.events({
	"click .seguir": function(evento, Template) {
		let idDoUsuario = FlowRouter.getParam("id");
		Meteor.call("seguirUsuario", idDoUsuario);
		console.log("seguindo");
	},
	"click .deixar-de-seguir": function(evento, Template) {
		let idDoUsuario = FlowRouter.getParam("id");
		Meteor.call("deixarDeSeguirUsuario", idDoUsuario);
		console.log("deixando de seguir");
	}
});
