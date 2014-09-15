import Ember from "ember";
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
/*** USERS ROUTE***/
export
default Ember.Route.extend(AuthenticatedRouteMixin, {
	actions: {
		showUser: function(user) {
			// window.alert('show: ' + user.get('id'));
			this.transitionToAnimated('user.index', {
				users: 'slideLeft'
			}, user);
		}
	}
});