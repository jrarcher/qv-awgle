import Ember from 'ember';
import AuthenticationControllerMixin from 'simple-auth/mixins/authentication-controller-mixin';

export default Ember.Controller.extend(AuthenticationControllerMixin,{
	authUser:null,
	rights:null
});