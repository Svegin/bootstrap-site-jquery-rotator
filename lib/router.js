Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('agency'); }
});

Router.route('/', function() {
  this.render('header', {
  	to: "main"});
  });

Router.route('/services', function() {
  this.render('services', {
  	to: "main"});
  });
	
	Router.route('/portfolio', function() {
 	 this.render('portfolio', {
  	to: "main"});
  });

    Router.route('/portfolio/:_id', function() {
   this.render('viewItem', {
    to: "main",
      data:function(){
        return Agency.findOne(this.params._id);
      }
  });
  });

  Router.route('/about', function() {
  this.render('about', {
  	to: "main"});
  });

Router.route('/team', function() {
  this.render('team', {
  	to: "main"});
  });

Router.route('/contact', function() {
  this.render('contact', {
  	to: "main"});
  });


Router.onBeforeAction('loading');