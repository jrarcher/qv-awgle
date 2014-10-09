import DS from "ember-data";
import Em from "ember";
var attr = DS.attr;
export default DS.Model.extend({
	first: attr('string'),
	last: attr('string'),
	middle: attr('string'),
	prefix: attr('number'),
	suffix: attr('number'),
	prettyName:function(){
		var firstName = this.get('first'),
		lastName = this.get('last');
		if(Em.isNone(firstName) || Em.isNone(lastName)){
			return 'Awgle User';
		}
		else{
			return lastName + ', ' + firstName;	
		}
		
	}.property('first', 'last')
});