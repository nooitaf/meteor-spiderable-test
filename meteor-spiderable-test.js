var Testdata = new Mongo.Collection('testdata')

if (Meteor.isClient) {

  Router.map(function(){
    this.route('home',{
      path:'/',
      data: function () { return Testdata.findOne(); }
    });
  })
     

  Template.home.helpers({
    testdata: function () {
      return Testdata.find();
    }
  });

}

if (Meteor.isServer) {

  Meteor.startup(function () {
    if (!Testdata.findOne()){
      _(5).times(function(n){
        Testdata.insert({name: 'testdata-' + n});
      })
    }
  });

  Meteor.publish('testdata',function(){
    return Testdata.find();
  })
  
}
