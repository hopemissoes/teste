Template.profile.onCreated(function(){
  this.subscribe('teste');

});

Template.profile.helpers({
	profile:function (){
		return  teste.findOne({name:"Day"});
},

	avatarPath:function (){// data context set to profile

		return  teste.findOne({orderDate: this.day});

},

});

Template.profile.events({
	'click #profile': function(event, template){
		var profile = {
			orderDate: '02-06-2018',
			cash: 22,
			fee: 1,
			tips: 7,
		}
		/*var profile = {
                     avatar:'wife',

                            name:{
                                   first:'Andreia ',
                                   last:'Martins',
                                   }
						}*/
		Meteor.call('teste', profile);
	}

})