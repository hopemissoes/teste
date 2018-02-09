Template.ccck.onCreated(function(){
  this.subscribe('OrdersByDate', 'date');
  this.subscribe('OrdersByUser', 'id');

});

Template.ccck.onRendered(function(){

});

Template.ccck.helpers({
  totalccckValue: function(){
    var totalTips = 0;
      Orders.find({orderDate: moment().format('YYYY-MM-DD'), userId: Meteor.userId()}).fetch().forEach(function(order, id){
        totalTips = totalTips + order.tips;
    });
    return '$ ' + totalTips.toFixed(2);
  },
});


Template.ccck.events({
  'click #ccck-box': function(event, template) {
   
    bootbox.prompt({
        title: "Add Tips Value",
        inputType: 'number',

        callback: function (result) {
          if (result === null) { 
              bootbox.alert({
              message: "Clique OK p/ adicionar Cash",
              className: 'bb-alternate-modal'
              });                                            
          } else {
            
              Meteor.call('InsertTips', result, number);
        }
      }
    });
        var dialog = bootbox.dialog({
              title: 'Add Delivery Fee',
              message: "-",
              buttons: {
              cancel2: {
              label: "+ 0 ",
              className: 'btn btn-secondary btn-sm',
                  callback: function(){
                  number = 0
                    return number;
                  }
              },
              cancel: {
                  label: "+ 1 ",
                  className: 'btn-info btn-lg',
                  callback: function(){
                    number = 1
                      return number;
                  }
              },
              noclose: {
                  label: "+ 2",
                  className: 'btn-warning btn-sm',
                  callback: function(){
                    number = 2
                      return number;
                  }
              },
              ok: {
                  label: "+ 3",
                  className: 'btn-danger btn-sm',
                  callback: function(){
                      number = 3
                      return number;
                  }
              }
          }
          }); 
  },
});