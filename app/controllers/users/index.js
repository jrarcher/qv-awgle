import Em from 'ember';

export default Em.ArrayController.extend({
	sortAscending:true,
	sortProperties:['username'],
	actions:{
		sortDirection:function(){
			this.toggleProperty('sortAscending');
		},
		addUser:function(){
			this.transitionToRouteAnimated('users.new', {users:'slideLeft'});
		}
	}
});