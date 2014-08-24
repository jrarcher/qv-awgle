import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin, {
  authenticator: 'custom-auth:oauth2-password-grant',
  password:'foo',
  identification:'foo@foo.com'
});