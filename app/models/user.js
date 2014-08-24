import DS from "ember-data";
var attr = DS.attr,
belongsTo = DS.belongsTo;
export default DS.Model.extend({
	username: attr('string'),
	gender: attr('number'),
	birth:attr('date'),
	points: attr('number', {defaultValue:0}),
	verified: attr('boolean', {defaultValue: false}),
	created: attr('date'),
	address: belongsTo('address'),
	name: belongsTo('name'),
	right:belongsTo('right'),

	prettyBirth: function(){
		return moment(this.get('birth')).format('M/D/YYYY'); 
	}.property('birth'),
	prettyCreated:function(){
		return moment(this.get('created')).format('M/D/YYYY');
	}.property('created'),
	prettyGender:function(){
		var ret;
		switch (this.get('gender')){
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