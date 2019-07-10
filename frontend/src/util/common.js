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

export const getComunas = (value) => {
  let newComuna = {
    type: 'normal',
    elements: [
      {
        label: 'Comuna',
        elementType: 'select',
        elementConfig: {
          name: 'comuna',
          id: 'comuna',
          options: []
        },
        subtext: '',
        value: '',
      }
    ]
  }

  //Comunas de Chile, separadas por región
  switch(value) {
    case('0'):
      newComuna.elements[0].elementConfig.options = [
        { value: '', displayValue: 'Seleccione...', disabled: true },
        { value: 0, displayValue: 'Arica' },
        { value: 1, displayValue: 'Camarones' },
        { value: 2, displayValue: 'General Lagos' },
        { value: 3, displayValue: 'Putre' },
      ]
      break;
    case('1'):
      newComuna.elements[0].elementConfig.options = [
        { value: '', displayValue: 'Seleccione...', disabled: true },
        { value: 1, displayValue: 'Alto Hospicio' },
        { value: 2, displayValue: 'Camiña' },
        { value: 3, displayValue: 'Colchane' },
        { value: 4, displayValue: 'Huara' },
        { value: 5, displayValue: 'Iquique' },
        { value: 6, displayValue: 'Pica' },
        { value: 7, displayValue: 'Pozo Almonte' },
      ]
      break;
    case('2'):
      newComuna.elements[0].elementConfig.options = [
        { value: '', displayValue: 'Seleccione...', disabled: true },
        { value: 0, displayValue: 'Antofagasta' },
        { value: 1, displayValue: 'Calama' },
        { value: 2, displayValue: 'María Elena' },
        { value: 3, displayValue: 'Mejillones' },
        { value: 4, displayValue: 'Ollagüe' },
        { value: 5, displayValue: 'San Pedro de Atacama' },
        { value: 6, displayValue: 'Sierra Gorda' },
        { value: 7, displayValue: 'Taltal' },
        { value: 8, displayValue: 'Tocopilla' },
      ]
      break;
    case('3'):
      newComuna.elements[0].elementConfig.options = [
        { value: '', displayValue: 'Seleccione...', disabled: true },
        { value: 0, displayValue: 'Alto del Carmen' },
        { value: 1, displayValue: 'Caldera' },
        { value: 2, displayValue: 'Chañaral' },
        { value: 3, displayValue: 'Copiapó' },
        { value: 4, displayValue: 'Diego de Almagro' },
        { value: 5, displayValue: 'Freirina' },
        { value: 6, displayValue: 'Huasco' },
        { value: 7, displayValue: 'Tierra Amarilla' },
        { value: 8, displayValue: 'Vallenar' },
      ]
      break;
    case('4'):
      newComuna.elements[0].elementConfig.options = [
        { value: '', displayValue: 'Seleccione...', disabled: true },
        { value: 0, displayValue: 'Andacollo' },
        { value: 1, displayValue: 'Canela' },
        { value: 2, displayValue: 'Combarbalá' },
        { value: 3, displayValue: 'Coquimbo' },
        { value: 4, displayValue: 'Illapel' },
        { value: 5, displayValue: 'La Serena' },
        { value: 6, displayValue: 'La Higuera' },
        { value: 7, displayValue: 'Los Vilos' },
        { value: 8, displayValue: 'Monte Patria' },
        { value: 9, displayValue: 'Ovalle' },
        { value: 10, displayValue: 'Paiguano' },
        { value: 11, displayValue: 'Punitaqui' },
        { value: 12, displayValue: 'Río Hurtado' },
        { value: 13, displayValue: 'Salamanca' },
        { value: 14, displayValue: 'Vicuña' },
      ]
      break;
    case('5'):
      newComuna.elements[0].elementConfig.options = [
        { value: '', displayValue: 'Seleccione...', disabled: true },
        { value: 0, displayValue: 'Algarrobo' },
        { value: 1, displayValue: 'Cabildo' },
        { value: 2, displayValue: 'Calera' },
        { value: 3, displayValue: 'Calle Larga' },
        { value: 4, displayValue: 'Cartagena' },
        { value: 5, displayValue: 'Casablanca' },
        { value: 6, displayValue: 'Catemu' },
        { value: 7, displayValue: 'Concón' },
        { value: 8, displayValue: 'El Tabo' },
        { value: 9, displayValue: 'El Quisco' },
        { value: 10, displayValue: 'Hijuelas' },
        { value: 11, displayValue: 'Isla de Pascua' },
        { value: 12, displayValue: 'Juan Fernández' },
        { value: 13, displayValue: 'La Cruz' },
        { value: 14, displayValue: 'La Ligua' },
        { value: 15, displayValue: 'Limache' },
        { value: 16, displayValue: 'Llaillay' },
        { value: 17, displayValue: 'Los Andes' },
        { value: 18, displayValue: 'Nogales' },
        { value: 19, displayValue: 'Olmué' },
        { value: 20, displayValue: 'Panquehue' },
        { value: 21, displayValue: 'Papudo' },
        { value: 22, displayValue: 'Petorca' },
        { value: 23, displayValue: 'Puchuncaví' },
        { value: 24, displayValue: 'Putaendo' },
        { value: 25, displayValue: 'Quillota' },
        { value: 26, displayValue: 'Quilpué' },
        { value: 27, displayValue: 'Quintero' },
        { value: 28, displayValue: 'Rinconada' },
        { value: 29, displayValue: 'San Antonio' },
        { value: 30, displayValue: 'San Esteban' },
        { value: 31, displayValue: 'San Felipe' },
        { value: 32, displayValue: 'Santa María' },
        { value: 33, displayValue: 'Santo Domingo' },
        { value: 34, displayValue: 'Valparaíso' },
        { value: 35, displayValue: 'Villa Alemana' },
        { value: 36, displayValue: 'Viña del Mar' },
        { value: 37, displayValue: 'Zapallar' },
      ]
      break;
    case('6'):
      newComuna.elements[0].elementConfig.options = [
        { value: '', displayValue: 'Seleccione...', disabled: true },
        { value: 0, displayValue: 'Alhué' },
        { value: 1, displayValue: 'Buin' },
        { value: 2, displayValue: 'Calera de Tango' },
        { value: 3, displayValue: 'Cerrillos' },
        { value: 4, displayValue: 'Cerro Navia' },
        { value: 5, displayValue: 'Colina' },
        { value: 6, displayValue: 'Conchalí' },
        { value: 7, displayValue: 'Curacaví' },
        { value: 8, displayValue: 'El Bosque' },
        { value: 9, displayValue: 'El Monte' },
        { value: 10, displayValue: 'Estación Central' },
        { value: 11, displayValue: 'Huechuraba' },
        { value: 12, displayValue: 'Independencia' },
        { value: 13, displayValue: 'Isla de Maipo' },
        { value: 14, displayValue: 'La Cisterna' },
        { value: 15, displayValue: 'La Florida' },
        { value: 16, displayValue: 'La Granja' },
        { value: 17, displayValue: 'La Pintana' },
        { value: 18, displayValue: 'La Reina' },
        { value: 19, displayValue: 'Lampa' },
        { value: 20, displayValue: 'Las Condes' },
        { value: 21, displayValue: 'Lo Barnechea' },
        { value: 22, displayValue: 'Lo Espejo' },
        { value: 23, displayValue: 'Lo Prado' },
        { value: 24, displayValue: 'Macul' },
        { value: 25, displayValue: 'Maipú' },
        { value: 26, displayValue: 'María Pinto' },
        { value: 27, displayValue: 'Melipilla' },
        { value: 28, displayValue: 'Ñuñoa' },
        { value: 29, displayValue: 'Padre Hurtado' },
        { value: 30, displayValue: 'Paine' },
        { value: 31, displayValue: 'Pedro Aguirre Cerda' },
        { value: 32, displayValue: 'Peñaflor' },
        { value: 33, displayValue: 'Peñalolén' },
        { value: 34, displayValue: 'Pirque' },
        { value: 35, displayValue: 'Providencia' },
        { value: 36, displayValue: 'Pudahuel' },
        { value: 37, displayValue: 'Puente Alto' },
        { value: 38, displayValue: 'Quilicura' },
        { value: 39, displayValue: 'Quinta Normal' },
        { value: 40, displayValue: 'Recoleta' },
        { value: 41, displayValue: 'Renca' },
        { value: 42, displayValue: 'San Bernardo' },
        { value: 43, displayValue: 'San Joaquín' },
        { value: 44, displayValue: 'San José de Maipo' },
        { value: 45, displayValue: 'San Miguel' },
        { value: 46, displayValue: 'San Pedro' },
        { value: 47, displayValue: 'San Ramón' },
        { value: 48, displayValue: 'Santiago' },
        { value: 49, displayValue: 'Talagante' },
        { value: 50, displayValue: 'Tiltil' },
        { value: 51, displayValue: 'Vitacura' },
      ]
      break;
    case('7'):
      newComuna.elements[0].elementConfig.options = [
        { value: '', displayValue: 'Seleccione...', disabled: true },
        { value: 0, displayValue: 'Chépica' },
        { value: 1, displayValue: 'Chimbarongo' },
        { value: 2, displayValue: 'Codegua' },
        { value: 3, displayValue: 'Coinco' },
        { value: 4, displayValue: 'Coltauco' },
        { value: 5, displayValue: 'Doñihue' },
        { value: 6, displayValue: 'Graneros' },
        { value: 7, displayValue: 'La Estrella' },
        { value: 8, displayValue: 'Las Cabras' },
        { value: 9, displayValue: 'Litueche' },
        { value: 10, displayValue: 'Lolol' },
        { value: 11, displayValue: 'Machalí' },
        { value: 12, displayValue: 'Malloa' },
        { value: 13, displayValue: 'Marchihue' },
        { value: 14, displayValue: 'Nancagua' },
        { value: 15, displayValue: 'Navidad' },
        { value: 16, displayValue: 'Olivar' },
        { value: 17, displayValue: 'Palmilla' },
        { value: 18, displayValue: 'Paredones' },
        { value: 19, displayValue: 'Peralillo' },
        { value: 20, displayValue: 'Peumo' },
        { value: 21, displayValue: 'Pichidegua' },
        { value: 22, displayValue: 'Pichilemu' },
        { value: 23, displayValue: 'Placilla' },
        { value: 24, displayValue: 'Pumanque' },
        { value: 25, displayValue: 'Quinta de Tilcoco' },
        { value: 26, displayValue: 'Rancagua' },
        { value: 27, displayValue: 'Rengo' },
        { value: 28, displayValue: 'Requínoa' },
        { value: 29, displayValue: 'San Fernando' },
        { value: 30, displayValue: 'San Francisco de Mostazal' },
        { value: 31, displayValue: 'San Vicente de Tagua Tagua' },
        { value: 32, displayValue: 'Santa Cruz' },
      ]
      break;
    case('8'):
      newComuna.elements[0].elementConfig.options = [
        { value: '', displayValue: 'Seleccione...', disabled: true },
        { value: 0, displayValue: 'Cauquenes' },
        { value: 1, displayValue: 'Chanco' },
        { value: 2, displayValue: 'Colbún' },
        { value: 3, displayValue: 'Constitución' },
        { value: 4, displayValue: 'Curepto' },
        { value: 5, displayValue: 'Curicó' },
        { value: 6, displayValue: 'Empedrado' },
        { value: 7, displayValue: 'Hualañé' },
        { value: 8, displayValue: 'Licantén' },
        { value: 9, displayValue: 'Linares' },
        { value: 10, displayValue: 'Longaví' },
        { value: 11, displayValue: 'Maule' },
        { value: 12, displayValue: 'Molina' },
        { value: 13, displayValue: 'Parral' },
        { value: 14, displayValue: 'Pelarco' },
        { value: 15, displayValue: 'Pelluhue' },
        { value: 16, displayValue: 'Pencahue' },
        { value: 17, displayValue: 'Rauco' },
        { value: 18, displayValue: 'Retiro' },
        { value: 19, displayValue: 'Río Claro' },
        { value: 20, displayValue: 'Romeral' },
        { value: 21, displayValue: 'Sagrada Familia' },
        { value: 22, displayValue: 'San Clemente' },
        { value: 23, displayValue: 'San Javier de Loncomilla' },
        { value: 24, displayValue: 'San Rafael' },
        { value: 25, displayValue: 'Talca' },
        { value: 26, displayValue: 'Teno' },
        { value: 27, displayValue: 'Vichuquén' },
        { value: 28, displayValue: 'Villa Alegre' },
        { value: 29, displayValue: 'Yerbas Buenas' },
      ]
      break;
    case('9'):
      newComuna.elements[0].elementConfig.options = [
        { value: '', displayValue: 'Seleccione...', disabled: true },
        { value: 0, displayValue: 'Bulnes' },
        { value: 1, displayValue: 'Chillán' },
        { value: 2, displayValue: 'Chillán Viejo' },
        { value: 3, displayValue: 'Cobquecura' },
        { value: 4, displayValue: 'Coelemu' },
        { value: 5, displayValue: 'Coihueco' },
        { value: 6, displayValue: 'El Carmen' },
        { value: 7, displayValue: 'Ninhue' },
        { value: 8, displayValue: 'Ñiquén' },
        { value: 9, displayValue: 'Pemuco' },
        { value: 10, displayValue: 'Pinto' },
        { value: 11, displayValue: 'Portezuelo' },
        { value: 12, displayValue: 'Quillón' },
        { value: 13, displayValue: 'Quirihue' },
        { value: 14, displayValue: 'Ránquil' },
        { value: 15, displayValue: 'San Carlos' },
        { value: 16, displayValue: 'San Fabián' },
        { value: 17, displayValue: 'San Ignacio' },
        { value: 18, displayValue: 'San Nicolás' },
        { value: 19, displayValue: 'Treguaco' },
        { value: 20, displayValue: 'Yungay' },
      ]
      break;
    case('10'):
      newComuna.elements[0].elementConfig.options = [
        { value: '', displayValue: 'Seleccione...', disabled: true },
        { value: 0, displayValue: 'Alto Biobío' },
        { value: 1, displayValue: 'Antuco' },
        { value: 2, displayValue: 'Arauco' },
        { value: 3, displayValue: 'Cabrero' },
        { value: 4, displayValue: 'Cañete' },
        { value: 5, displayValue: 'Chiguayante' },
        { value: 6, displayValue: 'Concepción' },
        { value: 7, displayValue: 'Contulmo' },
        { value: 8, displayValue: 'Coronel' },
        { value: 9, displayValue: 'Curanilahue' },
        { value: 10, displayValue: 'Florida' },
        { value: 11, displayValue: 'Hualpén' },
        { value: 12, displayValue: 'Hualqui' },
        { value: 13, displayValue: 'Laja' },
        { value: 14, displayValue: 'Lebu' },
        { value: 15, displayValue: 'Los Álamos' },
        { value: 16, displayValue: 'Los Ángeles' },
        { value: 17, displayValue: 'Lota' },
        { value: 18, displayValue: 'Mulchén' },
        { value: 19, displayValue: 'Nacimiento' },
        { value: 20, displayValue: 'Negrete' },
        { value: 21, displayValue: 'Penco' },
        { value: 22, displayValue: 'Quilaco' },
        { value: 23, displayValue: 'Quilleco' },
        { value: 24, displayValue: 'San Pedro de la Paz' },
        { value: 25, displayValue: 'San Rosendo' },
        { value: 26, displayValue: 'Santa Bárbara' },
        { value: 27, displayValue: 'Santa Juana' },
        { value: 28, displayValue: 'Talcahuano' },
        { value: 29, displayValue: 'Tirúa' },
        { value: 30, displayValue: 'Tomé' },
        { value: 31, displayValue: 'Tucapel' },
        { value: 32, displayValue: 'Yumbel' },
      ]
      break;
    case('11'):
      newComuna.elements[0].elementConfig.options = [
        { value: '', displayValue: 'Seleccione...', disabled: true },
        { value: 0, displayValue: 'Angol' },
        { value: 1, displayValue: 'Carahue' },
        { value: 2, displayValue: 'Cholchol' },
        { value: 3, displayValue: 'Collipulli' },
        { value: 4, displayValue: 'Cunco' },
        { value: 5, displayValue: 'Curacautín' },
        { value: 6, displayValue: 'Curarrehue' },
        { value: 7, displayValue: 'Ercilla' },
        { value: 8, displayValue: 'Freire' },
        { value: 9, displayValue: 'Galvarino' },
        { value: 10, displayValue: 'Gorbea' },
        { value: 11, displayValue: 'Lautaro' },
        { value: 12, displayValue: 'Loncoche' },
        { value: 13, displayValue: 'Lonquimay' },
        { value: 14, displayValue: 'Los Sauces' },
        { value: 15, displayValue: 'Lumaco' },
        { value: 16, displayValue: 'Melipeuco' },
        { value: 17, displayValue: 'Nueva Imperial' },
        { value: 18, displayValue: 'Padre las Casas' },
        { value: 19, displayValue: 'Perquenco' },
        { value: 20, displayValue: 'Pitrufquén' },
        { value: 21, displayValue: 'Pucón' },
        { value: 22, displayValue: 'Purén' },
        { value: 23, displayValue: 'Renaico' },
        { value: 24, displayValue: 'Saavedra' },
        { value: 25, displayValue: 'Temuco' },
        { value: 26, displayValue: 'Teodoro Schmidt' },
        { value: 27, displayValue: 'Toltén' },
        { value: 28, displayValue: 'Traiguén' },
        { value: 29, displayValue: 'Victoria' },
        { value: 30, displayValue: 'Vilcún' },
        { value: 31, displayValue: 'Villarrica' },
      ]
      break;
    case('12'):
      newComuna.elements[0].elementConfig.options = [
        { value: '', displayValue: 'Seleccione...', disabled: true },
        { value: 0, displayValue: 'Corral' },
        { value: 1, displayValue: 'Futrono' },
        { value: 2, displayValue: 'La Unión' },
        { value: 3, displayValue: 'Lago Ranco' },
        { value: 4, displayValue: 'Lanco' },
        { value: 5, displayValue: 'Los Lagos' },
        { value: 6, displayValue: 'Máfil' },
        { value: 7, displayValue: 'Mariquina' },
        { value: 8, displayValue: 'Paillaco' },
        { value: 9, displayValue: 'Panguipulli' },
        { value: 10, displayValue: 'Río Bueno' },
        { value: 11, displayValue: 'Valdivia' },
      ]
      break;
    case('13'):
      newComuna.elements[0].elementConfig.options = [
        { value: '', displayValue: 'Seleccione...', disabled: true },
        { value: 0, displayValue: 'Ancud' },
        { value: 1, displayValue: 'Calbuco' },
        { value: 2, displayValue: 'Castro' },
        { value: 3, displayValue: 'Chaitén' },
        { value: 4, displayValue: 'Chonchi' },
        { value: 5, displayValue: 'Cochamó' },
        { value: 6, displayValue: 'Curaco de Vélez' },
        { value: 7, displayValue: 'Dalcahue' },
        { value: 8, displayValue: 'Fresia' },
        { value: 9, displayValue: 'Frutillar' },
        { value: 10, displayValue: 'Futaleufú' },
        { value: 11, displayValue: 'Hualaihué' },
        { value: 12, displayValue: 'Llanquihue' },
        { value: 13, displayValue: 'Los Muermos' },
        { value: 14, displayValue: 'Maullín' },
        { value: 15, displayValue: 'Osorno' },
        { value: 16, displayValue: 'Palena' },
        { value: 17, displayValue: 'Puerto Montt' },
        { value: 18, displayValue: 'Puerto Octay' },
        { value: 19, displayValue: 'Puerto Varas' },
        { value: 20, displayValue: 'Puqueldón' },
        { value: 21, displayValue: 'Purranque' },
        { value: 22, displayValue: 'Puyehue' },
        { value: 23, displayValue: 'Queilén' },
        { value: 24, displayValue: 'Quellón' },
        { value: 25, displayValue: 'Quemchi' },
        { value: 26, displayValue: 'Quinchao' },
        { value: 27, displayValue: 'Río Negro' },
        { value: 28, displayValue: 'San Juan de la Costa' },
        { value: 29, displayValue: 'San Pablo' },
      ]
      break;
    case('14'):
      newComuna.elements[0].elementConfig.options = [
        { value: '', displayValue: 'Seleccione...', disabled: true },
        { value: 0, displayValue: 'Aysén' },
        { value: 1, displayValue: 'Chile Chico' },
        { value: 2, displayValue: 'Cisnes' },
        { value: 3, displayValue: 'Cochrane' },
        { value: 4, displayValue: 'Coyhaique' },
        { value: 5, displayValue: 'Guaitecas' },
        { value: 6, displayValue: 'Lago Verde' },
        { value: 7, displayValue: 'O’Higgins' },
        { value: 8, displayValue: 'Río Ibáñez' },
        { value: 9, displayValue: 'Tortel' },
      ]
      break;
    case('15'):
      newComuna.elements[0].elementConfig.options = [
        { value: '', displayValue: 'Seleccione...', disabled: true },
        { value: 0, displayValue: 'Antártica' },
        { value: 1, displayValue: 'Cabo de Hornos' },
        { value: 2, displayValue: 'Laguna Blanca' },
        { value: 3, displayValue: 'Natales' },
        { value: 4, displayValue: 'Porvenir' },
        { value: 5, displayValue: 'Primavera' },
        { value: 6, displayValue: 'Punta Arenas' },
        { value: 7, displayValue: 'Río Verde' },
        { value: 8, displayValue: 'San Gregorio' },
        { value: 9, displayValue: 'Timaukel' },
        { value: 10, displayValue: 'Torres del Paine' },
      ]
      break;
    default:
      newComuna.elements[0].elementConfig.options = [{ value: '', displayValue: ''}]
  }

  return newComuna
}