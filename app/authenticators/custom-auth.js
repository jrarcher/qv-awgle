// import Ember from 'ember';
import Authenticator from 'simple-auth-oauth2/authenticators/oauth2';

export
default Authenticator.extend({
	makeRequest: function(url, data) {
		data.client_id = 'webApp1';
		data.client_secret = '2pennie$';
		// var headerAuth = "Basic " + btoa(client_id + ":" + client_secret);
		// console.log(headerAuth);
		// return Ember.$.ajax({
		//     url: this.serverTokenEndpoint,
		//     type: 'POST',
		//     data: data,
		//     dataType: 'json',
		//     contentType: 'application/x-www-form-urlencoded',
		//     headers: {
		//         Authorization: headerAuth
		//     }
		// });
		return this._super(url, data);
	}
});