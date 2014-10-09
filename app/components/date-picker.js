import Em from "ember";

export
default Em.Component.extend({
  didInsertElement: function() {},
  _yearRange: function() {
    var _date = new Date();
    if (Em.isEmpty(this.get('yearRange'))) {
      //by default return age-picker format
      return (_date.getFullYear() - 100) + ':' + _date.getFullYear();
    } else if (this.get('yearRange') === 0) {
      //if equal to zero, return today plus 2 years
      this.set('maxDate', '+2Y');
      this.set('minDate', _date);
      return _date.getFullYear() + ':' + (_date.getFullYear() + 2);
    } else {
      return this.get('yearRange');
    }
  }.property(),
  _maxDate: function() {
    if (Em.isEmpty(this.get('maxDate'))) {
      //By default max year is 18 years ago from today
      return '-18Y';
    } else return this.get('maxDate');
  }.property(),
  _minDate: function() {
    return this.get('minDate');
  }.property(),
  yearRange: null,
  maxDate: null,
  minDate: null,
  defaultText: 'Birth',
  model: null,
  theValue: null,
  actions: {
    showCalendar: function() {
      var self = this;
      Em.View.views[this.get('elementId')].$('.datepicker').datepicker({
        autoclose: true,
        changeMonth: true,
        changeYear: true,
        yearRange: this.get('_yearRange'),
        maxDate: this.get('_maxDate'),
        minDate: this.get('_minDate'),
        onSelect: function(date) {
          if (self.get('action')) {
            self.sendAction('action', date);
          }
        }
      }).focus();
    }
  }
});