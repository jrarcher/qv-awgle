import Em from 'ember';
import ToggleRightsMixin from 'qv/mixins/toggle-rights';
import FormListsMixin from 'qv/mixins/form-lists';

export
default Em.ObjectController.extend(ToggleRightsMixin, FormListsMixin, {
	errorMessage:null,
	thisDate: function() {
		return moment().subtract('years', 18);
	}.property(),
	yearRanges: function() {
		var year = moment().year(),
			startYear = year - 100,
			endYear = year - 18;
		return [startYear, endYear];
	}.property(),
	isClosing:false,
	actions: {
		updateBirth:function(date){
			this.set('model.birth', date);
		},
		closePage:function(){
			this.set('isClosing', true);
			this.store.deleteRecord(this.get('model'));
			this.transitionToRoute('users.index');
		},
		cancelClose:function(){
			Em.$('#newUserExit').slideUp('fast');
		},
		saveUser: function() {
			var model = this.get('model'),
			that = this;
			model.save().then(function() {
				//success
				model.deleteRecord();
				that.set('isClosing', true);
				that.transitionToRoute('users.index');
			},function(err){
				//fail
				var errorText;
				if (err){
					errorText = err.responseJSON.errorText;
				}
				that.set('errorMessage', errorText);
			});
		},
		cancel: function() {
			Em.$('#newUserExit').slideDown('fast');
		}
	}
});