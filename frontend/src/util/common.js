export const fixPath = (base, path) => {
	return base.charAt(base.length-1) === '/'
		? base.slice(0, -1) + '/' + path
		: base + '/' + path
}

export function copy(o) {
	var output, v, key;
	output = Array.isArray(o) ? [] : {};
	for (key in o) {
			v = o[key];
			output[key] = (typeof v === "object") ? copy(v) : v;
	}
	return output;
}

export const generateSubForm = (newElementId, newElements) => {
	let newElementsClone = copy(newElements);
  //console.log(newElementsClone);
  for (let element in newElementsClone) {
		let elementObj = {...newElementsClone[element]};
    //console.log(elementObj);
    let elementConfig = {...elementObj.elementConfig};
    // asignar un id dinámico para cada id y name
    newElementsClone[element].elementConfig.id = elementConfig.id + newElementId;
		newElementsClone[element].elementConfig.name = elementConfig.name + newElementId;
		if (elementConfig.type === 'date') {
			newElementsClone[element].value = new Date();
		}
    //console.log(newElementsClone[element].elementConfig.name);
	}
	return newElementsClone;
}