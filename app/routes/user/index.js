import Em from "ember";
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Em.Route.extend(AuthenticatedRouteMixin,{
	model:function(params){
		return this.store.find('user', params.id);
	}
});