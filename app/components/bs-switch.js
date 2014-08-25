import Em from "ember";

export default Em.Component.extend({
  tagName: 'input',
  attributeBindings:['name', 'type', 'checked', 'state', 'size', 'animate', 'disabled', 'readonly',
  'indeterminate', 'onColor', 'offColor', 'onText', 'offText', 'labelText', 'baseClass', 'wrapperClass',
  'onInit', 'onSwitchChange', 'radioAllOff'],
  type:'checkbox',
  checked:false,
	state:Em.computed.alias('checked'),
	size:'normal', //null, 'mini', 'small', 'normal', 'large'
	animate:true,
	disabled:false,
	readonly:false,
	indeterminate:false,
	onColor:'success', //'primary', 'info', 'success', 'warning', 'danger', 'default'
	offColor:'danger', //'primary', 'info', 'success', 'warning', 'danger', 'default'
	onText:'Yes',
	offText:'No',
	labelText:'&nbsp;',
	baseClass:'bootstrap-switch',
	wrapperClass:'wrapper',
	inInit:null, //function(event, state) {},
	onSwitchChange:function() {},
	radioAllOff:false,
  didInsertElement: function() {
  	var self=this;
     this.$().bootstrapSwitch({
     	state:self.get('state'),
     	size:self.get('size'),
     	animate:self.get('animate'),
     	disabled:self.get('disabled'),
     	readonly:self.get('readonly'),
     	indeterminate:self.get('indeterminate'),
     	onColor:self.get('onColor'),
     	offColor:self.get('offColor'),
     	onText:self.get('onText'),
     	offText:self.get('offText'),
     	labelText:self.get('labelText'),
     	baseClass:self.get('baseClass'),
     	wrapperClass:self.get('wrapperClass'),
     	inInit:self.get('inInit'),
     	onSwitchChange:self.get('onSwitchChange'),
     	radioAllOff:self.get('radioAllOff')
     });
  }.on('didInsertElement')
});
			