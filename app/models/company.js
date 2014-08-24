import DS from "ember-data";
var attr = DS.attr;
export default DS.Model.extend({
	parent:attr('string'),
	name: attr('string'),
	type: attr('string'),
	description: attr('string'),
	created: attr('date'),
	address: DS.belongsTo('address'),
	phone: DS.hasMany('phone', {embedded: 'always'}),
	prettyCreated: function(){
		return moment(this.get('created')).format('M/D/YYYY'); 
	}.property('created')
});