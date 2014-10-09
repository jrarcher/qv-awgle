import Em from "ember";
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export
default Em.Route.extend(AuthenticatedRouteMixin, {
	model: function() {
		var names = this.store.createRecord('name');
		var addys = this.store.createRecord('address');
		var rights = this.store.createRecord('right');
		var user =  this.store.createRecord('user', {
			name: names,
			address: addys,
			right: rights
		});
		// user.set('isDirty',false);
		return user;
	},
	actions: {
		willTransition: function(transition) {
			if (!this.controller.get('isClosing')) {
				transition.abort();
				Em.$('#newUserExit').show();
			} else {
				Em.AnimatedContainerView.enqueueAnimations({
					users: 'slideRight'
				});
			}
		},
		didTransition: function() {
			this.controller.set('isClosing', false);
			return true;
		}
	}

});