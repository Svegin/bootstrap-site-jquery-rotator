Meteor.startup(() => {
  // code to run on server at startup
});

//agency
Meteor.publish('agency', function() {
  return Agency.find();
});