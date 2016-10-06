Template.portList.helpers({
  port_all: function(){
  	return Agency.find({topic:'portfolio'});
  } 
  
});