import DS from "ember-data";
import Em from "ember";
var attr = DS.attr,
	belongsTo = DS.belongsTo;
export
default DS.Model.extend({
	username: attr('string'),
	pass: attr('string'),
	passAgain: attr('string'),
	gender: attr('number'),
	birth: attr('date'),
	points: attr('number', {
		defaultValue: 0
	}),
	verified: attr('boolean', {
		defaultValue: false
	}),
	created: attr('date'),
	address: belongsTo('address'),
	name: belongsTo('name'),
	right: belongsTo('right'),
	usernameIsValid: Em.computed.match('username', /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/),
	passwordIsValid: function() {
		var pass = this.get('pass'),
			passAgain = this.get('passAgain');
		if (!pass) {
			return false;
		}
		return pass === passAgain;
	}.property('pass', 'passAgain'),
	genderIsValid: function() {
		var gender = this.get('gender');
		return gender >= 0 && gender <= 2;
	}.property('gender'),
	birthIsValid: function() {
		var startYear = moment().subtract('100', 'years'),
			endYear = moment().subtract('18', 'years'),
			birth = moment(this.get('birth'));
		return birth >= startYear && birth <= endYear;
	}.property('birth'),
	isValidUser: Em.computed.and('usernameIsValid', 'passwordIsValid', 'genderIsValid', 'birthIsValid'),
	prettyBirth: function() {
		return moment(this.get('birth')).format('M/D/YYYY');
	}.property('birth'),
	prettyCreated: function() {
		return moment(this.get('created')).format('M/D/YYYY');
	}.property('created'),
	prettyGender: function() {
		var ret;
		switch (this.get('gender')) {
			case 0:
				ret = "Female";
				break;
			case 1:
				ret = "Male";
				break;
			case 2:
				ret = "Other";
				break;
		}
		return ret;
	}.property('gender')
});