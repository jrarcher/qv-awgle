import Em from 'ember';

export
default Em.ObjectController.extend({
	genders: [{
		key: 'Female',
		val: 0
	}, {
		key: 'Male',
		val: 1
	}, {
		key: 'N/A',
		val: 2
	}],
	prefixes:['Mr.', 'Ms.', 'Mrs.'],
	selectedGender: null,
	username: Em.computed.alias('model.username'),
	password: null,
	passwordAgain: null,
	gender: Em.computed.alias('model.gender'),
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
	isAdmin: Em.computed.alias('model.right.isAdmin'),
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
		changeState: function(right, state) {
			this.get('model.right').set(right, state);
		},
		cancel: function() {
			this.store.deleteRecord(this.get('model'));
			this.transitionToRoute('users.index');
		},
		toggleRights: function(key, enable) {
			switch (key) {
				case "user":
					if (enable){
						if (!this.get('canViewUser')){
							Em.$('[name="canViewUser"]')[0].click();
						}
						if (!this.get('canEditUser')){
							Em.$('[name="canEditUser"]')[0].click();
						}
						if (!this.get('canDeleteUser')){
							Em.$('[name="canDeleteUser"]')[0].click();
						}
					}
					else{
						if (this.get('canViewUser')){
							Em.$('[name="canViewUser"]')[0].click();
						}
						if (this.get('canEditUser')){
							Em.$('[name="canEditUser"]')[0].click();
						}
						if (this.get('canDeleteUser')){
							Em.$('[name="canDeleteUser"]')[0].click();
						}	
					}
					break;
				case "company":
					if (enable){
						if (!this.get('canViewCompany')){
							Em.$('[name="canViewCompany"]')[0].click();
						}
						if (!this.get('canEditCompany')){
							Em.$('[name="canEditCompany"]')[0].click();
						}
						if (!this.get('canDeleteCompany')){
							Em.$('[name="canDeleteCompany"]')[0].click();
						}
					}
					else{
						if (this.get('canViewCompany')){
							Em.$('[name="canViewCompany"]')[0].click();
						}
						if (this.get('canEditCompany')){
							Em.$('[name="canEditCompany"]')[0].click();
						}
						if (this.get('canDeleteCompany')){
							Em.$('[name="canDeleteCompany"]')[0].click();
						}	
					}
					break;
				case "survey":
					if (enable){
						if (!this.get('canViewSurvey')){
							Em.$('[name="canViewSurvey"]')[0].click();
						}
						if (!this.get('canEditSurvey')){
							Em.$('[name="canEditSurvey"]')[0].click();
						}
						if (!this.get('canDeleteSurvey')){
							Em.$('[name="canDeleteSurvey"]')[0].click();
						}
					}
					else{
						if (this.get('canViewSurvey')){
							Em.$('[name="canViewSurvey"]')[0].click();
						}
						if (this.get('canEditSurvey')){
							Em.$('[name="canEditSurvey"]')[0].click();
						}
						if (this.get('canDeleteSurvey')){
							Em.$('[name="canDeleteSurvey"]')[0].click();
						}	
					}
					break;
			}
		}
	}


});