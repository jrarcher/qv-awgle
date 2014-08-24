import DS from "ember-data";
var attr = DS.attr;
export default DS.Model.extend({
	isAdmin: attr('boolean', {defaultValue:false}),
	canViewUser: attr('boolean', {defaultValue:false}),
	canEditUser: attr('boolean', {defaultValue:false}),
	canDeleteUser: attr('boolean', {defaultValue:false}),
	canViewCompany: attr('boolean', {defaultValue:false}),
	canEditCompany: attr('boolean', {defaultValue:false}),
	canDeleteCompany: attr('boolean', {defaultValue:false}),
	canViewSurvey: attr('boolean', {defaultValue:false}),
	canEditSurvey: attr('boolean', {defaultValue:false}),
	canDeleteSurvey: attr('boolean', {defaultValue:false}),
	canMakeAdmin: attr('boolean', {defaultValue:false}),
	adminCompanies:null
});