export const fixPath = (base, path) => {
	return base.charAt(base.length-1) === '/'
		? base.slice(0, -1) + '/' + path
		: base + '/' + path
}