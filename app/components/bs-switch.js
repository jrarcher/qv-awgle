import Em from "ember";

export default Em.Component.extend({
  tagName: 'input',
  attributeBindings:['name', 'type',  'onState', 'size', 'animate', 'disabled', 'readonly',
  'indeterminate', 'onColor', 'offColor', 'onText', 'offText', 'labelText', 'baseClass', 'wrapperClass',
  'onInit', 'onSwitchChange', 'radioAllOff'],
  type:'checkbox',
  // checked:false,
	onState:false,
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
     	state:self.get('onState'),
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
     this.$().on('switchChange.bootstrapSwitch', function(event, state){
        if (self.get('action')){
          self.sendAction('action', self.get('name'), state);
        }
     })
  }.on('didInsertElement')
});
			