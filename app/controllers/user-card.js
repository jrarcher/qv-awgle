import Em from 'ember';

export
default Em.ObjectController.extend({
	elmId:function(){
		var elmId = 'uc' + this.get('model.id');
		return elmId;
	}.property('model.id'),
	actions: {
		showDeleteConfirm: function() {
			var elm = '#' + this.get('elmId') + ' .deleteConfirm';
			Em.$(elm).slideDown('fast');
		},
		hideDeleteConfirm: function() {
			var elm = '#' + this.get('elmId') + ' .deleteConfirm';
			Em.$(elm).slideUp('fast');
		},
		destroyUser: function(user) {
			user.destroyRecord().then(function() {
				//success
			}, function(err) {
				//failure
				window.alert('OOPS');
			});
		}
	}
});