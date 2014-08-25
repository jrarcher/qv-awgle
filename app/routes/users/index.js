import Ember from "ember";
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
/*** USERS ROUTE***/
export default Ember.Route.extend(AuthenticatedRouteMixin,{
	model:function(){
		return this.store.find('user');
	}
});