FlowRouter.route("/", {
    action: function(params, queryParams) {
        BlazeLayout.render("LayoutPrincipal", {main:"Inicio"});
    }
});

FlowRouter.route("/sobre", {
    action: function(params, queryParams) {
	BlazeLayout.render("LayoutPrincipal", {main:"Sobre"});    }
});

FlowRouter.route("/feed", {
	triggersEnter: [AccountsTemplates.ensureSignedIn],
    action: function(params, queryParams) {
	BlazeLayout.render("LayoutPrincipal", {main:"Feed"});    }
});