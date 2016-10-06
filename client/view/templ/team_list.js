Template.teamList.helpers({
  teams: function(){
  	return Agency.find({topic:'teams'});
  } 
  
});