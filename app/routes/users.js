import Ember from "ember";
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
/*** USERS ROUTE***/
export
default Ember.Route.extend(AuthenticatedRouteMixin, {
	actions: {
		editUser: function(user) {
			this.transitionToAnimated('user.edit', {
				users: 'slideLeft'
			}, user);
		},
		showUser: function(user) {
			this.transitionToAnimated('user.index', {
				users: 'slideLeft'
			}, user);
		}
	}
});