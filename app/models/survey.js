import DS from "ember-data";
import Ember from "ember";
var attr = DS.attr,
hasMany = DS.hasMany,
belongsTo = DS.belongsTo;
export default DS.Model.extend({
	name:attr('string'),
	cid:attr('string'),
	created:attr('date'),
	start:attr('date'),
	end:attr('date'),
	points:attr('number', {defaultValue:1}),
	status:attr('string', {defaultValue:'active'}),
	description:attr('string'),
	question:hasMany('question'),
	reward:belongsTo('reward'),
	hasReward:function(){
		return !Ember.isEmpty(this.get('reward'));
	}.property('reward')
});