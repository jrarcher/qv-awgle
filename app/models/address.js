import DS from "ember-data";
var attr = DS.attr;

export default DS.Model.extend({
	street1: attr('string'),
	street2: attr('string'),
	city: attr('string'),
	state: attr('string'),
	zip: attr('string'),
	country: attr('string'),
	lat: attr('string'),
	lon: attr('string'),
	type: attr('string'),
	description: attr('string'),
	cityState:function(){
		return this.get('city') + ', ' + this.get('state');
	}.property('city', 'state')
});