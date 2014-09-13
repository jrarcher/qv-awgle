import Em from "ember";

export default Ember.View.extend({
	didInsertElement:function(){
		Em.$('#newUserExit').hide();
	}
});