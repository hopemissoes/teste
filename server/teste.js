Meteor.publish('teste',function(){
	return teste.find({});
});

Meteor.methods({
       teste: function(profile){
              
              teste.insert(profile);

       },
})