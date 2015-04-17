
Router.configure({
	fastRender: true,
	waitOn: function(){
		return Meteor.subscribe('testdata');
	}
});
