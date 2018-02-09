Router.configure({
	layoutTemplate: 'layout'
});


Router.map(function() {
	this.route('principal', {path: '/'});
	this.route('badCostumer', {path: '/badCostumer'});
	this.route('formbadCostumer', {path: '/formbadCostumer'});
	this.route('otherDays', {path: '/otherDays'});
	this.route('profile',{path:'/profile'});


});