Template.badCostumer.onCreated(function(){
  this.subscribe('badCostumer');
});

Template.badCostumer.onRendered(function(){

});

Template.badCostumer.helpers({
badCostumer: function(){
       return badCostumer.find().fetch();
 		},

});