Template.footer2.onCreated(function(){
  this.subscribe('Orders');
});
Template.footer2.onRendered(function(){

});

Template.footer2.helpers({
  Orders: function(){
     return Orders.find({orderDate: moment().format('YYYY-MM-DD'), userId: Meteor.userId()}).fetch();

 },
 });