Template.footer1.onCreated(function(){
  this.subscribe('OrdersByDate', 'date');
});

Template.footer1.onRendered(function(){

});

Template.footer1.helpers({
  cashOut: function(){
    var cashOut = 0;
    var totalFee = 0;
    var totalTips = 0;
    var totalCash = 0;
        Orders.find({orderDate: moment().format('YYYY-MM-DD'), userId: Meteor.userId()}).fetch().forEach(function(order, id){

            totalFee = totalFee + order.fee - (order.fee * 0.1); 
            totalTips = totalTips + order.tips - (order.tips * 0.1);
            totalCash = totalCash + order.cash;

            cashOut = totalCash - (totalFee + totalTips);
    });
    return '$ ' + cashOut.toFixed(2);
  },
   totalFee: function(){
    var totalFee = 0;
     Orders.find({orderDate: moment().format('YYYY-MM-DD'), userId: Meteor.userId()}).fetch().forEach(function(order, id){
      totalFee = totalFee + order.fee;
    });
    return '$ ' + totalFee;
  }

});