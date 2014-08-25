import Ember from "ember";
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
	model:function(){
		var names = this.store.createRecord('name');
		var addys = this.store.createRecord('address');
		var rights = this.store.createRecord('right');
		return this.store.createRecord('user', {
			name:names,
			address:addys,
			right:rights
		});
	}
	
});