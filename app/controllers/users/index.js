import Ember from 'ember';

export default Ember.ArrayController.extend({
	sortAscending:true,
	sortProperties:['username'],
	actions:{
		sortDirection:function(){
			this.toggleProperty('sortAscending');
		},
		addUser:function(){
			this.transitionToRoute('users.new');
		}
	}
});