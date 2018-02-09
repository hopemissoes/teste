Template.formbadCostumer.onCreated(function(){
  this.subscribe('badCostumer');
});

Template.formbadCostumer.onRendered(function(){

});

Template.formbadCostumer.events({
'submit form': function(event, template) {

	event.preventDefault();

		var VarCostumerName = event.target.CostumerName.value;
		var varCostumerAdress = event.target.CostumerAdress.value;
		var varCostumerObservation = event.target.CostumerObservation.value;

		Meteor.call('InsertBadCostumer', VarCostumerName, varCostumerAdress, varCostumerObservation);
		
		event.target.CostumerName.value = "";
    	event.target.CostumerAdress.value = "";
		event.target.CostumerObservation.value = "";
		bootbox.alert({
			message: "Bastard add with sucess!",
			size: 'small'
					});
}
});







