import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
export
default Ember.Route.extend(ApplicationRouteMixin, {
	actions: {
		// display an error when authentication fails
		sessionAuthenticationFailed: function(error) {
			var message = JSON.parse(error).error_description;
			this.controllerFor('login').set('errorMessage', message);
		},
		sessionAuthenticationSucceeded: function() {
			var user = Ember.$.parseJSON(this.get('session.user'));
			user.name = user.name[0];
			user.address = user.address[0];
			user.right = user.right[0];
			this.get('session').set('auth_user', user);
			this._super();
		},
		loading: function() {
			var controller = this.controllerFor('application');
			controller.set('loading', true);
			this.router.one('didTransition', function() {
				controller.set('loading', false);
			});
		},
		finished: function() {
			this.controllerFor('application').set('loading', false);
		}
	}
});