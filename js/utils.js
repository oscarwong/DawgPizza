function apply(source, target) {
	for (prop in source) {
		target[prop] = source[prop];
	}
} //apply()

function wrapSuper(superFn, context) {
	return function() {
		return superFn.apply(context, arguments);
	}
}