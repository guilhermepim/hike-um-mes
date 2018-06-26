Template.NovoPost.onCreated(function() {
	this.urlDaImagem = new ReactiveVar();
});

Template.NovoPost.events({
	"submit form": function(evento, template) {
		evento.preventDefault();
    
		let textoDoFormulario = evento.target.texto.value;
    let urlDaImagem = template.urlDaImagem.get();
 
		Meteor.call("inserirPost", textoDoFormulario, urlDaImagem);

		evento.target.texto.value = "";
	},
	"change .myFileInput": function(event, template) {
      FS.Utility.eachFile(event, function(file) {
        Images.insert(file, function (err, fileObj) {
          if (err){
             // handle error
          } else {
          		template.urlDaImagem.set("/cfs/files/images/" + fileObj._id);

          	console.log(urlDaImagem);	
          }
        });
     });
   }
});