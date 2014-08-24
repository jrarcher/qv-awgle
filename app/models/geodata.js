import DS from "ember-data";
var attr = DS.attr;
export default DS.Model.extend({
	lat:attr('string'),
	lon:attr('string'),
	time:attr('date'),
	/* type ---- 0 = request, 1 = response */
	type:attr('number')
});