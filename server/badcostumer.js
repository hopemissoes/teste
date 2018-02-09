Meteor.publish('badCostumer',function(){
	return badCostumer.find({});
});

Meteor.methods({
	InsertBadCostumer: function(VarCostumerName, varCostumerAdress, varCostumerObservation){
		var newbad = {

			CostumerName: VarCostumerName,
			CostumerAdress: varCostumerAdress,
			CostumerObservation: varCostumerObservation,
		}

		badCostumer.insert(newbad);
	}
})