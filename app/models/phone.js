import DS from "ember-data";
var attr = DS.attr;
export default DS.Model.extend({
	area: attr('string'),
	prefix: attr('string'),
	line: attr('string'),
	ext: attr('string'),
	type: attr('string'),
	country:attr('string'),
	owner: attr('string'),

	prettyNumber:function(){
		var area = this.get('area'),
		prefix = this.get('prefix'),
		line = this.get('line');
		var ph = area + '.' + prefix + '.' + line;
		return ph;
	}.property(),
	prettyPhone:function(){
		var area = this.get('area'),
		prefix = this.get('prefix'),
		line = this.get('line'),
		ext = this.get('ext'),
		type = this.get('type');

		var ph = type + ': ' + area + '.' + prefix + '.' + line;
		if (ext.length > 0){
			ph += ' Ext.' + ext;
		} 
		return  ph;
	}.property('area','prefix','line','ext','type')
});