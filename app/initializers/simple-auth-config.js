import Session from 'simple-auth/session';
import Ember from 'ember';
export
default {
  name: 'simple-auth-config',
  before: 'simple-auth',
  initialize: function() {
    window.ENV = window.ENV || {};
    window.ENV['simple-auth'] = {
      authorizer: 'simple-auth-authorizer:oauth2-bearer',
      crossOriginWhitelist: ['http://localhost:3000'],
      routeAfterAuthentication: 'dashboard'
    };
    window.ENV['simple-auth-oauth2'] = {
      serverTokenEndpoint: "http://localhost:3000/oauth/token",
      refreshAccessTokens: true
    };
    Session.reopen({
      authUser:function(){
        if (!Ember.isEmpty(this.get('auth_user'))){
          return this.get('auth_user');
        }
        var _user = this.get('user');
        if (!_user){
          return false;
        } 
        var user = Ember.$.parseJSON(_user);
        user.name = user.name[0];
        user.address = user.address[0];
        user.right = user.right[0]; 
        this.set('auth_user', user);
        return user;
      }.property('auth_user')
    });

  }
};