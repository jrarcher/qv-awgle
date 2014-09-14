import Em from 'ember';

export
default Em.ObjectController.extend({
	errorMessage:null,
	genders: [{
		key: 'Gender',
		val: -1,
	},{
		key: 'Female',
		val: 0
	}, {
		key: 'Male',
		val: 1
	}, {
		key: 'N/A',
		val: 2
	}],
	prefixes: ['Mr.', 'Ms.', 'Mrs.'],
	suffixes: ['Jr.', 'Sr.', 'III', 'Esq.'],
	states: ['TX', 'OR', 'OK', 'LA', 'NM'],
	thisDate: function() {
		return moment().subtract('years', 18);
	}.property(),
	yearRanges: function() {
		var year = moment().year(),
			startYear = year - 100,
			endYear = year - 18;
		return [startYear, endYear];
	}.property(),
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
	isClosing:false,
	actions: {
		closePage:function(){
			this.set('isClosing', true);
			this.store.deleteRecord(this.get('model'));
			this.transitionToRoute('users.index');
		},
		cancelClose:function(){
			Em.$('#newUserExit').slideUp('fast');
		},
		saveUser: function() {
			var model = this.get('model'),
			that = this;
			model.save().then(function() {
				//success
				model.deleteRecord();
				that.set('isClosing', true);
				that.transitionToRoute('users.index');
			},function(err){
				//fail
				var errorText;
				if (err){
					errorText = err.responseJSON.errorText;
				}
				that.set('errorMessage', errorText);
			});
		},
		changeState: function(right, state) {
			this.get('model.right').set(right, state);
		},
		cancel: function() {
			Em.$('#newUserExit').slideDown('fast');
		},
		toggleRights: function(key, enable) {
			switch (key) {
				case "user":
					if (enable) {
						if (!this.get('canViewUser')) {
							Em.$('[name="canViewUser"]')[0].click();
						}
						if (!this.get('canEditUser')) {
							Em.$('[name="canEditUser"]')[0].click();
						}
						if (!this.get('canDeleteUser')) {
							Em.$('[name="canDeleteUser"]')[0].click();
						}
					} else {
						if (this.get('canViewUser')) {
							Em.$('[name="canViewUser"]')[0].click();
						}
						if (this.get('canEditUser')) {
							Em.$('[name="canEditUser"]')[0].click();
						}
						if (this.get('canDeleteUser')) {
							Em.$('[name="canDeleteUser"]')[0].click();
						}
					}
					break;
				case "company":
					if (enable) {
						if (!this.get('canViewCompany')) {
							Em.$('[name="canViewCompany"]')[0].click();
						}
						if (!this.get('canEditCompany')) {
							Em.$('[name="canEditCompany"]')[0].click();
						}
						if (!this.get('canDeleteCompany')) {
							Em.$('[name="canDeleteCompany"]')[0].click();
						}
					} else {
						if (this.get('canViewCompany')) {
							Em.$('[name="canViewCompany"]')[0].click();
						}
						if (this.get('canEditCompany')) {
							Em.$('[name="canEditCompany"]')[0].click();
						}
						if (this.get('canDeleteCompany')) {
							Em.$('[name="canDeleteCompany"]')[0].click();
						}
					}
					break;
				case "survey":
					if (enable) {
						if (!this.get('canViewSurvey')) {
							Em.$('[name="canViewSurvey"]')[0].click();
						}
						if (!this.get('canEditSurvey')) {
							Em.$('[name="canEditSurvey"]')[0].click();
						}
						if (!this.get('canDeleteSurvey')) {
							Em.$('[name="canDeleteSurvey"]')[0].click();
						}
					} else {
						if (this.get('canViewSurvey')) {
							Em.$('[name="canViewSurvey"]')[0].click();
						}
						if (this.get('canEditSurvey')) {
							Em.$('[name="canEditSurvey"]')[0].click();
						}
						if (this.get('canDeleteSurvey')) {
							Em.$('[name="canDeleteSurvey"]')[0].click();
						}
					}
					break;
			}
		}
	}
});