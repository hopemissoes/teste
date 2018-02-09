Template.footer3.events({
  'click #remove-box': function(event, template) {
   
    bootbox.prompt({
        title: "Insert Order Number",
        inputType: 'number',

        callback: function (result) {
          if (result === null) { 
              bootbox.alert({
              message: "add order number for remove order!!!",
              className: 'bb-alternate-modal'
              });                                            
          } else {

              Meteor.call('RemoveOrders', result);
                var count = parseInt(Orders.find({orderDate: moment().format('YYYY-MM-DD'), userId: Meteor.userId()}).count());
                  
                  for (i = result; i <= count; i ++ ) {

                    var query = {orderNumber: i};
                    var mod = {$inc: { orderNumber: - 1 }};
                    
              Meteor.call('DicreaseOrderNumber', query, mod);
      }


        }
      }
    });

  },
});