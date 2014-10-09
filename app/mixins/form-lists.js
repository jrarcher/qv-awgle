import Em from "ember";

export
default Em.Mixin.create({
	genders: [{
		key: 'Gender',
		val: -1,
	}, {
		key: 'Female',
		val: 0
	}, {
		key: 'Male',
		val: 1
	}, {
		key: 'N/A',
		val: 2
	}],
	prefixes: [{
		key: 'Mr.',
		val: 0
	}, {
		key: 'Ms.',
		val: 1
	}, {
		key: 'Mrs.',
		val: 2
	}],
	states: [{
		key: 'TX',
		val: 0
	}, {
		key: 'OR',
		val: 1
	}, {
		key: 'OK',
		val: 3
	}, {
		key: 'LA',
		val: 4
	}, {
		key: 'NM',
		val: 5
	}],
	suffixes: [{
		key: 'Jr.',
		val: 0
	}, {
		key: 'Sr.',
		val: 1
	}, {
		key: 'Esq.',
		val: 2
	}, {
		key: 'III',
		val: 3
	}]
});