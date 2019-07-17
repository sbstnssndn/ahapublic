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
        { value: 4, displayValue: 'Alto Hospicio' },
        { value: 5, displayValue: 'Camiña' },
        { value: 6, displayValue: 'Colchane' },
        { value: 7, displayValue: 'Huara' },
        { value: 8, displayValue: 'Iquique' },
        { value: 9, displayValue: 'Pica' },
        { value: 10, displayValue: 'Pozo Almonte' },
      ]
      break;
    case('2'):
      newComuna.elements[0].elementConfig.options = [
        { value: '', displayValue: 'Seleccione...', disabled: true },
        { value: 11, displayValue: 'Antofagasta' },
        { value: 12, displayValue: 'Calama' },
        { value: 13, displayValue: 'María Elena' },
        { value: 14, displayValue: 'Mejillones' },
        { value: 15, displayValue: 'Ollagüe' },
        { value: 16, displayValue: 'San Pedro de Atacama' },
        { value: 17, displayValue: 'Sierra Gorda' },
        { value: 18, displayValue: 'Taltal' },
        { value: 19, displayValue: 'Tocopilla' },
      ]
      break;
    case('3'):
      newComuna.elements[0].elementConfig.options = [
        { value: '', displayValue: 'Seleccione...', disabled: true },
        { value: 20, displayValue: 'Alto del Carmen' },
        { value: 21, displayValue: 'Caldera' },
        { value: 22, displayValue: 'Chañaral' },
        { value: 23, displayValue: 'Copiapó' },
        { value: 24, displayValue: 'Diego de Almagro' },
        { value: 25, displayValue: 'Freirina' },
        { value: 26, displayValue: 'Huasco' },
        { value: 27, displayValue: 'Tierra Amarilla' },
        { value: 28, displayValue: 'Vallenar' },
      ]
      break;
    case('4'):
      newComuna.elements[0].elementConfig.options = [
        { value: '', displayValue: 'Seleccione...', disabled: true },
        { value: 29, displayValue: 'Andacollo' },
        { value: 30, displayValue: 'Canela' },
        { value: 31, displayValue: 'Combarbalá' },
        { value: 32, displayValue: 'Coquimbo' },
        { value: 33, displayValue: 'Illapel' },
        { value: 34, displayValue: 'La Serena' },
        { value: 35, displayValue: 'La Higuera' },
        { value: 36, displayValue: 'Los Vilos' },
        { value: 37, displayValue: 'Monte Patria' },
        { value: 38, displayValue: 'Ovalle' },
        { value: 39, displayValue: 'Paiguano' },
        { value: 40, displayValue: 'Punitaqui' },
        { value: 41, displayValue: 'Río Hurtado' },
        { value: 42, displayValue: 'Salamanca' },
        { value: 43, displayValue: 'Vicuña' },
      ]
      break;
    case('5'):
      newComuna.elements[0].elementConfig.options = [
        { value: '', displayValue: 'Seleccione...', disabled: true },
        { value: 44, displayValue: 'Algarrobo' },
        { value: 45, displayValue: 'Cabildo' },
        { value: 46, displayValue: 'Calera' },
        { value: 47, displayValue: 'Calle Larga' },
        { value: 48, displayValue: 'Cartagena' },
        { value: 49, displayValue: 'Casablanca' },
        { value: 50, displayValue: 'Catemu' },
        { value: 51, displayValue: 'Concón' },
        { value: 52, displayValue: 'El Tabo' },
        { value: 53, displayValue: 'El Quisco' },
        { value: 54, displayValue: 'Hijuelas' },
        { value: 55, displayValue: 'Isla de Pascua' },
        { value: 56, displayValue: 'Juan Fernández' },
        { value: 57, displayValue: 'La Cruz' },
        { value: 58, displayValue: 'La Ligua' },
        { value: 59, displayValue: 'Limache' },
        { value: 60, displayValue: 'Llaillay' },
        { value: 61, displayValue: 'Los Andes' },
        { value: 62, displayValue: 'Nogales' },
        { value: 63, displayValue: 'Olmué' },
        { value: 64, displayValue: 'Panquehue' },
        { value: 65, displayValue: 'Papudo' },
        { value: 66, displayValue: 'Petorca' },
        { value: 67, displayValue: 'Puchuncaví' },
        { value: 68, displayValue: 'Putaendo' },
        { value: 69, displayValue: 'Quillota' },
        { value: 70, displayValue: 'Quilpué' },
        { value: 71, displayValue: 'Quintero' },
        { value: 72, displayValue: 'Rinconada' },
        { value: 73, displayValue: 'San Antonio' },
        { value: 74, displayValue: 'San Esteban' },
        { value: 75, displayValue: 'San Felipe' },
        { value: 76, displayValue: 'Santa María' },
        { value: 77, displayValue: 'Santo Domingo' },
        { value: 78, displayValue: 'Valparaíso' },
        { value: 79, displayValue: 'Villa Alemana' },
        { value: 80, displayValue: 'Viña del Mar' },
        { value: 81, displayValue: 'Zapallar' },
      ]
      break;
    case('6'):
      newComuna.elements[0].elementConfig.options = [
        { value: '', displayValue: 'Seleccione...', disabled: true },
        { value: 82, displayValue: 'Alhué' },
        { value: 83, displayValue: 'Buin' },
        { value: 84, displayValue: 'Calera de Tango' },
        { value: 85, displayValue: 'Cerrillos' },
        { value: 86, displayValue: 'Cerro Navia' },
        { value: 87, displayValue: 'Colina' },
        { value: 88, displayValue: 'Conchalí' },
        { value: 89, displayValue: 'Curacaví' },
        { value: 90, displayValue: 'El Bosque' },
        { value: 91, displayValue: 'El Monte' },
        { value: 92, displayValue: 'Estación Central' },
        { value: 93, displayValue: 'Huechuraba' },
        { value: 94, displayValue: 'Independencia' },
        { value: 95, displayValue: 'Isla de Maipo' },
        { value: 96, displayValue: 'La Cisterna' },
        { value: 97, displayValue: 'La Florida' },
        { value: 98, displayValue: 'La Granja' },
        { value: 99, displayValue: 'La Pintana' },
        { value: 100, displayValue: 'La Reina' },
        { value: 101, displayValue: 'Lampa' },
        { value: 102, displayValue: 'Las Condes' },
        { value: 103, displayValue: 'Lo Barnechea' },
        { value: 104, displayValue: 'Lo Espejo' },
        { value: 105, displayValue: 'Lo Prado' },
        { value: 106, displayValue: 'Macul' },
        { value: 107, displayValue: 'Maipú' },
        { value: 108, displayValue: 'María Pinto' },
        { value: 109, displayValue: 'Melipilla' },
        { value: 110, displayValue: 'Ñuñoa' },
        { value: 111, displayValue: 'Padre Hurtado' },
        { value: 112, displayValue: 'Paine' },
        { value: 113, displayValue: 'Pedro Aguirre Cerda' },
        { value: 114, displayValue: 'Peñaflor' },
        { value: 115, displayValue: 'Peñalolén' },
        { value: 116, displayValue: 'Pirque' },
        { value: 117, displayValue: 'Providencia' },
        { value: 118, displayValue: 'Pudahuel' },
        { value: 119, displayValue: 'Puente Alto' },
        { value: 120, displayValue: 'Quilicura' },
        { value: 121, displayValue: 'Quinta Normal' },
        { value: 122, displayValue: 'Recoleta' },
        { value: 123, displayValue: 'Renca' },
        { value: 124, displayValue: 'San Bernardo' },
        { value: 125, displayValue: 'San Joaquín' },
        { value: 126, displayValue: 'San José de Maipo' },
        { value: 127, displayValue: 'San Miguel' },
        { value: 128, displayValue: 'San Pedro' },
        { value: 129, displayValue: 'San Ramón' },
        { value: 130, displayValue: 'Santiago' },
        { value: 131, displayValue: 'Talagante' },
        { value: 132, displayValue: 'Tiltil' },
        { value: 133, displayValue: 'Vitacura' },
      ]
      break;
    case('7'):
      newComuna.elements[0].elementConfig.options = [
        { value: '', displayValue: 'Seleccione...', disabled: true },
        { value: 134, displayValue: 'Chépica' },
        { value: 135, displayValue: 'Chimbarongo' },
        { value: 136, displayValue: 'Codegua' },
        { value: 137, displayValue: 'Coinco' },
        { value: 138, displayValue: 'Coltauco' },
        { value: 139, displayValue: 'Doñihue' },
        { value: 140, displayValue: 'Graneros' },
        { value: 141, displayValue: 'La Estrella' },
        { value: 142, displayValue: 'Las Cabras' },
        { value: 143, displayValue: 'Litueche' },
        { value: 144, displayValue: 'Lolol' },
        { value: 145, displayValue: 'Machalí' },
        { value: 146, displayValue: 'Malloa' },
        { value: 147, displayValue: 'Marchihue' },
        { value: 148, displayValue: 'Nancagua' },
        { value: 149, displayValue: 'Navidad' },
        { value: 150, displayValue: 'Olivar' },
        { value: 151, displayValue: 'Palmilla' },
        { value: 152, displayValue: 'Paredones' },
        { value: 153, displayValue: 'Peralillo' },
        { value: 154, displayValue: 'Peumo' },
        { value: 155, displayValue: 'Pichidegua' },
        { value: 156, displayValue: 'Pichilemu' },
        { value: 157, displayValue: 'Placilla' },
        { value: 158, displayValue: 'Pumanque' },
        { value: 159, displayValue: 'Quinta de Tilcoco' },
        { value: 160, displayValue: 'Rancagua' },
        { value: 161, displayValue: 'Rengo' },
        { value: 162, displayValue: 'Requínoa' },
        { value: 163, displayValue: 'San Fernando' },
        { value: 164, displayValue: 'San Francisco de Mostazal' },
        { value: 165, displayValue: 'San Vicente de Tagua Tagua' },
        { value: 166, displayValue: 'Santa Cruz' },
      ]
      break;
    case('8'):
      newComuna.elements[0].elementConfig.options = [
        { value: '', displayValue: 'Seleccione...', disabled: true },
        { value: 167, displayValue: 'Cauquenes' },
        { value: 168, displayValue: 'Chanco' },
        { value: 169, displayValue: 'Colbún' },
        { value: 170, displayValue: 'Constitución' },
        { value: 171, displayValue: 'Curepto' },
        { value: 172, displayValue: 'Curicó' },
        { value: 173, displayValue: 'Empedrado' },
        { value: 174, displayValue: 'Hualañé' },
        { value: 175, displayValue: 'Licantén' },
        { value: 176, displayValue: 'Linares' },
        { value: 177, displayValue: 'Longaví' },
        { value: 178, displayValue: 'Maule' },
        { value: 179, displayValue: 'Molina' },
        { value: 180, displayValue: 'Parral' },
        { value: 181, displayValue: 'Pelarco' },
        { value: 182, displayValue: 'Pelluhue' },
        { value: 183, displayValue: 'Pencahue' },
        { value: 184, displayValue: 'Rauco' },
        { value: 185, displayValue: 'Retiro' },
        { value: 186, displayValue: 'Río Claro' },
        { value: 187, displayValue: 'Romeral' },
        { value: 188, displayValue: 'Sagrada Familia' },
        { value: 189, displayValue: 'San Clemente' },
        { value: 190, displayValue: 'San Javier de Loncomilla' },
        { value: 191, displayValue: 'San Rafael' },
        { value: 192, displayValue: 'Talca' },
        { value: 193, displayValue: 'Teno' },
        { value: 194, displayValue: 'Vichuquén' },
        { value: 195, displayValue: 'Villa Alegre' },
        { value: 196, displayValue: 'Yerbas Buenas' },
      ]
      break;
    case('9'):
      newComuna.elements[0].elementConfig.options = [
        { value: '', displayValue: 'Seleccione...', disabled: true },
        { value: 197, displayValue: 'Bulnes' },
        { value: 198, displayValue: 'Chillán' },
        { value: 199, displayValue: 'Chillán Viejo' },
        { value: 200, displayValue: 'Cobquecura' },
        { value: 201, displayValue: 'Coelemu' },
        { value: 202, displayValue: 'Coihueco' },
        { value: 203, displayValue: 'El Carmen' },
        { value: 204, displayValue: 'Ninhue' },
        { value: 205, displayValue: 'Ñiquén' },
        { value: 206, displayValue: 'Pemuco' },
        { value: 207, displayValue: 'Pinto' },
        { value: 208, displayValue: 'Portezuelo' },
        { value: 209, displayValue: 'Quillón' },
        { value: 210, displayValue: 'Quirihue' },
        { value: 211, displayValue: 'Ránquil' },
        { value: 212, displayValue: 'San Carlos' },
        { value: 213, displayValue: 'San Fabián' },
        { value: 214, displayValue: 'San Ignacio' },
        { value: 215, displayValue: 'San Nicolás' },
        { value: 216, displayValue: 'Treguaco' },
        { value: 217, displayValue: 'Yungay' },
      ]
      break;
    case('10'):
      newComuna.elements[0].elementConfig.options = [
        { value: '', displayValue: 'Seleccione...', disabled: true },
        { value: 218, displayValue: 'Alto Biobío' },
        { value: 219, displayValue: 'Antuco' },
        { value: 220, displayValue: 'Arauco' },
        { value: 221, displayValue: 'Cabrero' },
        { value: 222, displayValue: 'Cañete' },
        { value: 223, displayValue: 'Chiguayante' },
        { value: 224, displayValue: 'Concepción' },
        { value: 225, displayValue: 'Contulmo' },
        { value: 226, displayValue: 'Coronel' },
        { value: 227, displayValue: 'Curanilahue' },
        { value: 228, displayValue: 'Florida' },
        { value: 229, displayValue: 'Hualpén' },
        { value: 230, displayValue: 'Hualqui' },
        { value: 231, displayValue: 'Laja' },
        { value: 232, displayValue: 'Lebu' },
        { value: 233, displayValue: 'Los Álamos' },
        { value: 234, displayValue: 'Los Ángeles' },
        { value: 235, displayValue: 'Lota' },
        { value: 236, displayValue: 'Mulchén' },
        { value: 237, displayValue: 'Nacimiento' },
        { value: 238, displayValue: 'Negrete' },
        { value: 239, displayValue: 'Penco' },
        { value: 240, displayValue: 'Quilaco' },
        { value: 241, displayValue: 'Quilleco' },
        { value: 242, displayValue: 'San Pedro de la Paz' },
        { value: 243, displayValue: 'San Rosendo' },
        { value: 244, displayValue: 'Santa Bárbara' },
        { value: 245, displayValue: 'Santa Juana' },
        { value: 246, displayValue: 'Talcahuano' },
        { value: 247, displayValue: 'Tirúa' },
        { value: 248, displayValue: 'Tomé' },
        { value: 249, displayValue: 'Tucapel' },
        { value: 250, displayValue: 'Yumbel' },
      ]
      break;
    case('11'):
      newComuna.elements[0].elementConfig.options = [
        { value: '', displayValue: 'Seleccione...', disabled: true },
        { value: 251, displayValue: 'Angol' },
        { value: 252, displayValue: 'Carahue' },
        { value: 253, displayValue: 'Cholchol' },
        { value: 254, displayValue: 'Collipulli' },
        { value: 255, displayValue: 'Cunco' },
        { value: 256, displayValue: 'Curacautín' },
        { value: 257, displayValue: 'Curarrehue' },
        { value: 258, displayValue: 'Ercilla' },
        { value: 259, displayValue: 'Freire' },
        { value: 260, displayValue: 'Galvarino' },
        { value: 261, displayValue: 'Gorbea' },
        { value: 262, displayValue: 'Lautaro' },
        { value: 263, displayValue: 'Loncoche' },
        { value: 264, displayValue: 'Lonquimay' },
        { value: 265, displayValue: 'Los Sauces' },
        { value: 266, displayValue: 'Lumaco' },
        { value: 267, displayValue: 'Melipeuco' },
        { value: 268, displayValue: 'Nueva Imperial' },
        { value: 269, displayValue: 'Padre las Casas' },
        { value: 270, displayValue: 'Perquenco' },
        { value: 271, displayValue: 'Pitrufquén' },
        { value: 272, displayValue: 'Pucón' },
        { value: 273, displayValue: 'Purén' },
        { value: 274, displayValue: 'Renaico' },
        { value: 275, displayValue: 'Saavedra' },
        { value: 276, displayValue: 'Temuco' },
        { value: 277, displayValue: 'Teodoro Schmidt' },
        { value: 278, displayValue: 'Toltén' },
        { value: 279, displayValue: 'Traiguén' },
        { value: 280, displayValue: 'Victoria' },
        { value: 281, displayValue: 'Vilcún' },
        { value: 282, displayValue: 'Villarrica' },
      ]
      break;
    case('12'):
      newComuna.elements[0].elementConfig.options = [
        { value: '', displayValue: 'Seleccione...', disabled: true },
        { value: 283, displayValue: 'Corral' },
        { value: 284, displayValue: 'Futrono' },
        { value: 285, displayValue: 'La Unión' },
        { value: 286, displayValue: 'Lago Ranco' },
        { value: 287, displayValue: 'Lanco' },
        { value: 288, displayValue: 'Los Lagos' },
        { value: 289, displayValue: 'Máfil' },
        { value: 290, displayValue: 'Mariquina' },
        { value: 291, displayValue: 'Paillaco' },
        { value: 292, displayValue: 'Panguipulli' },
        { value: 293, displayValue: 'Río Bueno' },
        { value: 294, displayValue: 'Valdivia' },
      ]
      break;
    case('13'):
      newComuna.elements[0].elementConfig.options = [
        { value: '', displayValue: 'Seleccione...', disabled: true },
        { value: 295, displayValue: 'Ancud' },
        { value: 296, displayValue: 'Calbuco' },
        { value: 297, displayValue: 'Castro' },
        { value: 298, displayValue: 'Chaitén' },
        { value: 299, displayValue: 'Chonchi' },
        { value: 300, displayValue: 'Cochamó' },
        { value: 301, displayValue: 'Curaco de Vélez' },
        { value: 302, displayValue: 'Dalcahue' },
        { value: 303, displayValue: 'Fresia' },
        { value: 304, displayValue: 'Frutillar' },
        { value: 305, displayValue: 'Futaleufú' },
        { value: 306, displayValue: 'Hualaihué' },
        { value: 307, displayValue: 'Llanquihue' },
        { value: 308, displayValue: 'Los Muermos' },
        { value: 309, displayValue: 'Maullín' },
        { value: 310, displayValue: 'Osorno' },
        { value: 311, displayValue: 'Palena' },
        { value: 312, displayValue: 'Puerto Montt' },
        { value: 313, displayValue: 'Puerto Octay' },
        { value: 314, displayValue: 'Puerto Varas' },
        { value: 315, displayValue: 'Puqueldón' },
        { value: 316, displayValue: 'Purranque' },
        { value: 317, displayValue: 'Puyehue' },
        { value: 318, displayValue: 'Queilén' },
        { value: 319, displayValue: 'Quellón' },
        { value: 320, displayValue: 'Quemchi' },
        { value: 321, displayValue: 'Quinchao' },
        { value: 322, displayValue: 'Río Negro' },
        { value: 323, displayValue: 'San Juan de la Costa' },
        { value: 324, displayValue: 'San Pablo' },
      ]
      break;
    case('14'):
      newComuna.elements[0].elementConfig.options = [
        { value: '', displayValue: 'Seleccione...', disabled: true },
        { value: 325, displayValue: 'Aysén' },
        { value: 326, displayValue: 'Chile Chico' },
        { value: 327, displayValue: 'Cisnes' },
        { value: 328, displayValue: 'Cochrane' },
        { value: 329, displayValue: 'Coyhaique' },
        { value: 330, displayValue: 'Guaitecas' },
        { value: 331, displayValue: 'Lago Verde' },
        { value: 332, displayValue: 'O’Higgins' },
        { value: 333, displayValue: 'Río Ibáñez' },
        { value: 334, displayValue: 'Tortel' },
      ]
      break;
    case('15'):
      newComuna.elements[0].elementConfig.options = [
        { value: '', displayValue: 'Seleccione...', disabled: true },
        { value: 335, displayValue: 'Antártica' },
        { value: 336, displayValue: 'Cabo de Hornos' },
        { value: 337, displayValue: 'Laguna Blanca' },
        { value: 338, displayValue: 'Natales' },
        { value: 339, displayValue: 'Porvenir' },
        { value: 340, displayValue: 'Primavera' },
        { value: 341, displayValue: 'Punta Arenas' },
        { value: 342, displayValue: 'Río Verde' },
        { value: 343, displayValue: 'San Gregorio' },
        { value: 344, displayValue: 'Timaukel' },
        { value: 345, displayValue: 'Torres del Paine' },
      ]
      break;
    default:
      newComuna.elements[0].elementConfig.options = [{ value: '', displayValue: ''}]
  }

  return newComuna
}