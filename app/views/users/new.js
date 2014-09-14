import Em from "ember";

export default Em.View.extend({
	didInsertElement:function(){
		Em.$('#newUserExit').hide();
	}
});