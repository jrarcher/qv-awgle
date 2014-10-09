import Em from "ember";

export
default Em.Mixin.create({
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
		changeState: function(right, state) {
			this.get('model.right').set(right, state);
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