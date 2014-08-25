import DS from "ember-data";
var attr = DS.attr;
export default DS.Model.extend({
	first: attr('string'),
	last: attr('string'),
	middle: attr('string'),
	prefix: attr('string'),
	suffix: attr('string'),
	prettyName:function(){
		return this.get('last') + ', ' + this.get('first');
	}.property('first', 'last')
});