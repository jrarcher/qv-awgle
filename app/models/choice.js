import DS from "ember-data";
var attr = DS.attr;
export default DS.Model.extend({
	order:attr('number'),
	text:attr('string')
});