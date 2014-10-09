import Em from "ember";
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Em.Route.extend(AuthenticatedRouteMixin,{
	model:function(params){
		return this.store.find('user', params.id);
	},
	actions: {
		willTransition: function(transition) {
			// if (!this.controller.get('isClosing')) {
			// 	transition.abort();
			// 	Em.$('#newUserExit').show();
			// } else {
			// 	Em.AnimatedContainerView.enqueueAnimations({
			// 		users: 'slideRight'
			// 	});
			// }
				Em.AnimatedContainerView.enqueueAnimations({
					users: 'slideRight'
				});
		},
		didTransition: function() {
			// this.controller.set('isClosing', false);
			// return true;
		}
	}
});