import DS from "ember-data";

export default DS.RESTAdapter.extend({
	host: 'http://localhost:3000',
	pathForType: function(type) {
		return (type);
	}
});