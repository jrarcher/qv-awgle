import Em from 'ember';

export
default Em.ObjectController.extend({
	username: Em.computed.alias('model.username'),
	password: null,
	passwordAgain: null,
	gender: null,
	birth: null,
	street1: null,
	street2: null,
	city: null,
	state: null,
	zip: null,
	country: null,
	lat: null,
	lon: null,
	first: null,
	last: null,
	middle: null,
	prefix: null,
	suffix: null,
	isAdmin: false,
	canViewUser: Em.computed.alias('model.right.canViewUser'),
	canEditUser: Em.computed.alias('model.right.canEditUser'),
	canDeleteUser: Em.computed.alias('model.right.canDeleteUser'),
	canViewCompany: Em.computed.alias('model.right.canViewCompany'),
	canEditCompany: Em.computed.alias('model.right.canEditCompany'),
	canDeleteCompany: Em.computed.alias('model.right.canDeleteCompany'),
	canViewSurvey: Em.computed.alias('model.right.canViewSurvey'),
	canEditSurvey: Em.computed.alias('model.right.canEditSurvey'),
	canDeleteSurvey: Em.computed.alias('model.right.canDeleteSurvey'),
	canMakeAdmin: Em.computed.alias('model.right.canMakeAdmin'),
	actions: {
		saveUser: function() {
			var model = this.get('model');
			console.log(model);
		},
		changeState: function(right, state){
			console.log('Right: ' + right);
			this.get('model.right').set(right, state);
		}
	}


});