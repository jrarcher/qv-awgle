import Ember from "ember";
import ApplicationSerializer from 'qv/serializers/application';

export
default ApplicationSerializer.extend({
	serialize: function(user, opts) {
		var json = this._super(user, opts);

		json.name = {};
		json.address = {};
		json.right = {};

		json.name.last = user.get('name.last');
		json.name.first = user.get('name.first');
		json.name.middle = user.get('name.middle');
		json.name.prefix = user.get('name.prefix');
		json.name.suffix = user.get('name.suffix');

		json.address.id = user.get('address.id');
		json.address.street1 = user.get('address.street1');
		json.address.street2 = user.get('address.street2');
		json.address.city = user.get('address.city');
		json.address.state = user.get('address.state');
		json.address.zip = user.get('address.zip');
		json.address.country = user.get('address.country');
		json.address.lat = user.get('address.lat');
		json.address.lon = user.get('address.lon');
		json.address.type = user.get('address.type');
		json.address.description = user.get('address.description');
		json.address.owner = user.get('address.owner');

		json.right.isAdmin = user.get('right.isAdmin');
		json.right.canMakeAdmin = user.get('right.canMakeAdmin');
		json.right.canViewUser = user.get('right.canViewUser');
		json.right.canEditUser = user.get('right.canEditUser');
		json.right.canDeleteUser = user.get('right.canDeleteUser');
		json.right.canViewCompany = user.get('right.canViewCompany');
		json.right.canEditCompany = user.get('right.canEditCompany');
		json.right.canDeleteCompany = user.get('right.canDeleteCompany');
		json.right.canViewSurvey = user.get('right.canViewSurvey');
		json.right.canEditSurvey = user.get('right.canEditSurvey');
		json.right.canDeleteSurvey = user.get('right.canDeleteSurvey');

		json.birth = user.get('birth');
		json.password = user.password;
		json.points = user.points;
		json.verified = user.verified;


		return json;
	}

});