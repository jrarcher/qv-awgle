import DS from "ember-data";
var attr = DS.attr,
hasMany = DS.hasMany;
export default DS.Model.extend({
	order:attr('number'),
	text:attr('string'),
	type:attr('string', {defaultValue: 'none'}), //genre of question
	format:attr('number',{defaultValue: 0}), //Slider or MultipleChoice
	choice:hasMany('choice'),
	allowComment:attr('boolean')
});