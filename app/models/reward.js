import DS from "ember-data";
var attr = DS.attr;
export default DS.Model.extend({
	cid:attr('string'),
	type:attr('string'),
	description:attr('string'),
	expires:attr('date'),
	image:attr('string')
});