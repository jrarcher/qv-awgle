import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
	location: config.locationType
});

Router.map(function() {
	this.route('index', {
		path: '/'
	});
	this.route('about');
	this.route('contact');
	this.route('login');

	/*** Protected Routes ***/
	this.resource('dashboard', function() {
		this.route('index', {path: '/'});
	});
	this.resource('companies',function(){
		this.route('index', {path:'/'});
		this.route('new');
		this.resource('company', {path:'/company/:id'}, function(){
			this.route('index', {path:'/'});
			this.route('edit');
		});
	});
	this.resource('users',function(){
		this.route('index', {path:'/'});
		this.route('new');
		this.resource('user', function(){
			this.route('index', {path:'/:id'});
			this.route('edit', {path:'/:id/edit'});
		});
	});
	this.resource('surveys',function(){
		this.route('index', {path:'/'});
		this.route('new');
		this.resource('survey', {path:'/survey/:id'}, function(){
			this.route('index', {path:'/'});
			this.route('edit');
		});
	});

});

export
default Router;