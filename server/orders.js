Meteor.publish('Orders',function(){
	return Orders.find({});
});

Meteor.publish('OrdersByDate',function(date){
	return Orders.find({orderDate: date});
});

Meteor.publish('OrdersByDay',function(day){
       return Orders.find({day2: day});
});

Meteor.publish('OrdersByUser',function(id){
	return Orders.find({userId: Meteor.userId()});
});

Meteor.methods({
	InsertCash: function(result, number) {
	  var x = parseInt(Orders.find({orderDate: moment().format('YYYY-MM-DD'), userId: Meteor.userId()}).count());
              var order = {
              orderNumber: x + 1,
              orderDate: moment().format('YYYY-MM-DD'),
              tips: 0,
              cash: parseFloat(result),
              fee: number,
              userId: Meteor.userId(),
              }
              Orders.insert(order);
},

	RemoveOrders: function(result){
		var query = {
              orderNumber: parseInt(result),
             
              }
              Orders.remove(query);
},

	InsertTips: function(result, number){
		var x = parseInt(Orders.find({orderDate: moment().format('YYYY-MM-DD'), userId: Meteor.userId()}).count());
              var order = {
              orderNumber: x + 1,  
              orderDate: moment().format('YYYY-MM-DD'),
              tips: parseFloat(result),
              cash: 0,
              fee: number,
              userId: Meteor.userId(),
              }
              Orders.insert(order);
},

	DicreaseOrderNumber: function(query, mod){
		Orders.update(query,mod);

},
       ChooseDay: function(result){
                          
              var query = {name: "Day"}
              var mod = {$set: {day: result}};
              var options = {upsert: true};

              var teste3 = Orders.update(query, mod, options);
},



});



