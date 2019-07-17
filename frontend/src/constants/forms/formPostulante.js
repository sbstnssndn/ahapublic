import { API_BASE_URL, FORM_POSTULANTE} from '../index';
//Datos personales del usuario postulante
export const formPostulante = 
  {
    id: 3,
    title: FORM_POSTULANTE,
    belongsTo: "postulante",
    endpoint: API_BASE_URL+"/user",
    totalStages: 4,
    stages: [
      {
        id: 0,
        name: "Identificación",
        fields: {       
          firstName: {
            type: 'normal',
            elements: [
              {
                label: 'Nombres',
                elementType: 'input',
                elementConfig: {
                  type: 'text',
                  placeholder: 'Juan Alberto',
                  name: 'firstName',
                  id: 'firstName'
                },
                subtext: '',
                value: ''
              }
            ]
          },
          lastName: {
            type: 'normal',
            elements: [
              {
                label: 'Apellidos',
                elementType: 'input',
                elementConfig: {
                  type: 'text',
                  placeholder: 'Pérez Soto',
                  name: 'lastName',
                  id: 'lastName'
                },
                subtext: '',
                value: ''
              }
            ]
          },
          rut: {
            type: 'normal',
            elements: [
              {
                label: 'RUT',
                elementType: 'input',
                elementConfig: {
                  type: 'text',
                  placeholder: '12345678-0',
                  name: 'rut',
                  id: 'rut'
                },
                subtext: '',
                value: ''
              }
            ]
          }
        }
      },
      {
        id: 1,
        name: "Datos personales",
        fields: {
          genero: {
            type: 'normal',
            elements: [
              {
                label: 'Género',
                elementType: 'select',
                elementConfig: {
                  name: 'genero',
                  id: 'genero',
                  options: [
                    { value: '', displayValue: 'Seleccione...', disabled: true },
                    { value: 0, displayValue: 'Femenino' },
                    { value: 1, displayValue: 'Masculino' },
                    { value: 2, displayValue: 'No especifica' }
                  ]
                },
                subtext: '',
                value: ''
              }
            ]
          },
          fechaNacimiento: {
            type: 'normal',
            elements: [
              {
                label: 'Fecha de nacimiento',
                elementType: 'date',
                elementConfig: {
                  type: 'text',
                  placeholder: '20/10/1987',
                  name: 'fechaNacimiento',
                  id: 'fechaNacimiento'
                },
                subtext: '',
                value: ''
              }
            ]
          },
          nacionalidad: {
            type: 'normal',
            elements: [
              {
                label: 'País de nacionalidad',
                elementType: 'select',
                elementConfig: {
                  name: 'nacionalidad',
                  id: 'nacionalidad',
                  options: [
										{ value: '', displayValue: 'Seleccione...', disabled: true },
                    { value: 'Chile', displayValue: 'Chile' },
                    { value: 'Argentina', displayValue: 'Argentina' },
                    { value: 'Venezuela', displayValue: 'Venezuela' },
                    { value: 'Colombia', displayValue: 'Colombia' },
                    { value: 'Perú', displayValue: 'Perú' },
                    { value: 'Bolivia', displayValue: 'Bolivia' },
                  ]
                },
                value: 'Chile'
              }
            ]
          }
        }
      },
      {
        id: 2,
        name: "Contacto",
        fields: {
          telefono1: {
            type: 'normal',
            elements: [
              {
                label: 'Teléfono',
                elementType: 'input',
                elementConfig: {
                  type: 'text',
                  placeholder: '+56912345678',
                  name: 'telefono1',
                  id: 'telefono1'
                },
                subtext: '',
                value: ''
              }
            ]
          },
          telefono2: {
            type: 'normal',
            elements: [
              {
                label: 'Teléfono alternativo',
                elementType: 'input',
                elementConfig: {
                  type: 'text',
                  placeholder: '+56987654321',
                  name: 'telefono2',
                  id: 'telefono2'
                },
                subtext: '',
                value: ''
              }
            ]
          },
          email2: {
            type: 'normal',
            elements: [
              {
                label: 'Correo electrónico de contacto',
                elementType: 'input',
                elementConfig: {
                  type: 'email2',
                  placeholder: 'juan.perez@gmail.com',
                  name: 'email2',
                  id: 'email2'
                },
                subtext: '',
                value: ''
              }
            ]
          }
        }
      },
      {
        id: 3,
        name: "Ubicación",
        fields: {
          calle: {
            type: 'normal',
            elements: [
              {
                label: 'Calle y número',
                elementType: 'input',
                elementConfig: {
                  type: 'text',
                  placeholder: 'Av. Pajaritos 1234',
                  name: 'calle',
                  id: 'calle'
                },
                subtext: '',
                value: ''
              }
            ]
          },
          region: {
            type: 'normal',
            elements: [
              {
                label: 'Región',
                elementType: 'select',
                elementConfig: {
                  name: 'region',
                  id: 'region',
                  options: [
                    { value: '', displayValue: 'Seleccione...', disabled: true },
                    { value: 0, displayValue: 'Arica y Parinacota' },
                    { value: 1, displayValue: 'Tarapacá' },
                    { value: 2, displayValue: 'Antofagasta' },
                    { value: 3, displayValue: 'Atacama' },
                    { value: 4, displayValue: 'Coquimbo' },
                    { value: 5, displayValue: 'Valparaíso' },
                    { value: 6, displayValue: 'Metropolitana de Santiago' },
                    { value: 7, displayValue: 'Libertador Gral. Bernardo O’Higgins' },
                    { value: 8, displayValue: 'Maule' },
                    { value: 9, displayValue: 'Ñuble' },
                    { value: 10, displayValue: 'Biobío' },
                    { value: 11, displayValue: 'Araucanía' },
                    { value: 12, displayValue: 'Los Ríos' },
                    { value: 13, displayValue: 'Los Lagos' },
                    { value: 14, displayValue: 'Aysén del Gral. Carlos Ibáñez del Campo' },
                    { value: 15, displayValue: 'Magallanes y de la Antártica Chilena' },
                  ]
                },
                subtext: '',
                value: '',
              }
            ]
          },
          comuna: {
            type: 'normal',
            elements: [
              {
                label: 'Comuna',
                elementType: 'select',
                elementConfig: {
                  name: 'comuna',
                  id: 'comuna',
                  options: [
										{ value: '', displayValue: 'Seleccione...', disabled: true },
										{ value: 0, displayValue: 'Arica', disabled: true },
										{ value: 1, displayValue: 'Camarones', disabled: true },
										{ value: 2, displayValue: 'General Lagos', disabled: true },
										{ value: 3, displayValue: 'Putre', disabled: true },
										{ value: 4, displayValue: 'Alto Hospicio', disabled: true },
										{ value: 5, displayValue: 'Camiña', disabled: true },
										{ value: 6, displayValue: 'Colchane', disabled: true },
										{ value: 7, displayValue: 'Huara', disabled: true },
										{ value: 8, displayValue: 'Iquique', disabled: true },
										{ value: 9, displayValue: 'Pica', disabled: true },
										{ value: 10, displayValue: 'Pozo Almonte', disabled: true },
										{ value: 11, displayValue: 'Antofagasta', disabled: true },
										{ value: 12, displayValue: 'Calama', disabled: true },
										{ value: 13, displayValue: 'María Elena', disabled: true },
										{ value: 14, displayValue: 'Mejillones', disabled: true },
										{ value: 15, displayValue: 'Ollagüe', disabled: true },
										{ value: 16, displayValue: 'San Pedro de Atacama', disabled: true },
										{ value: 17, displayValue: 'Sierra Gorda', disabled: true },
										{ value: 18, displayValue: 'Taltal', disabled: true },
										{ value: 19, displayValue: 'Tocopilla', disabled: true },
										{ value: 20, displayValue: 'Alto del Carmen', disabled: true },
										{ value: 21, displayValue: 'Caldera', disabled: true },
										{ value: 22, displayValue: 'Chañaral', disabled: true },
										{ value: 23, displayValue: 'Copiapó', disabled: true },
										{ value: 24, displayValue: 'Diego de Almagro', disabled: true },
										{ value: 25, displayValue: 'Freirina', disabled: true },
										{ value: 26, displayValue: 'Huasco', disabled: true },
										{ value: 27, displayValue: 'Tierra Amarilla', disabled: true },
										{ value: 28, displayValue: 'Vallenar', disabled: true },
										{ value: 29, displayValue: 'Andacollo', disabled: true },
										{ value: 30, displayValue: 'Canela', disabled: true },
										{ value: 31, displayValue: 'Combarbalá', disabled: true },
										{ value: 32, displayValue: 'Coquimbo', disabled: true },
										{ value: 33, displayValue: 'Illapel', disabled: true },
										{ value: 34, displayValue: 'La Serena', disabled: true },
										{ value: 35, displayValue: 'La Higuera', disabled: true },
										{ value: 36, displayValue: 'Los Vilos', disabled: true },
										{ value: 37, displayValue: 'Monte Patria', disabled: true },
										{ value: 38, displayValue: 'Ovalle', disabled: true },
										{ value: 39, displayValue: 'Paiguano', disabled: true },
										{ value: 40, displayValue: 'Punitaqui', disabled: true },
										{ value: 41, displayValue: 'Río Hurtado', disabled: true },
										{ value: 42, displayValue: 'Salamanca', disabled: true },
										{ value: 43, displayValue: 'Vicuña', disabled: true },
										{ value: 44, displayValue: 'Algarrobo', disabled: true },
										{ value: 45, displayValue: 'Cabildo', disabled: true },
										{ value: 46, displayValue: 'Calera', disabled: true },
										{ value: 47, displayValue: 'Calle Larga', disabled: true },
										{ value: 48, displayValue: 'Cartagena', disabled: true },
										{ value: 49, displayValue: 'Casablanca', disabled: true },
										{ value: 50, displayValue: 'Catemu', disabled: true },
										{ value: 51, displayValue: 'Concón', disabled: true },
										{ value: 52, displayValue: 'El Tabo', disabled: true },
										{ value: 53, displayValue: 'El Quisco', disabled: true },
										{ value: 54, displayValue: 'Hijuelas', disabled: true },
										{ value: 55, displayValue: 'Isla de Pascua', disabled: true },
										{ value: 56, displayValue: 'Juan Fernández', disabled: true },
										{ value: 57, displayValue: 'La Cruz', disabled: true },
										{ value: 58, displayValue: 'La Ligua', disabled: true },
										{ value: 59, displayValue: 'Limache', disabled: true },
										{ value: 60, displayValue: 'Llaillay', disabled: true },
										{ value: 61, displayValue: 'Los Andes', disabled: true },
										{ value: 62, displayValue: 'Nogales', disabled: true },
										{ value: 63, displayValue: 'Olmué', disabled: true },
										{ value: 64, displayValue: 'Panquehue', disabled: true },
										{ value: 65, displayValue: 'Papudo', disabled: true },
										{ value: 66, displayValue: 'Petorca', disabled: true },
										{ value: 67, displayValue: 'Puchuncaví', disabled: true },
										{ value: 68, displayValue: 'Putaendo', disabled: true },
										{ value: 69, displayValue: 'Quillota', disabled: true },
										{ value: 70, displayValue: 'Quilpué', disabled: true },
										{ value: 71, displayValue: 'Quintero', disabled: true },
										{ value: 72, displayValue: 'Rinconada', disabled: true },
										{ value: 73, displayValue: 'San Antonio', disabled: true },
										{ value: 74, displayValue: 'San Esteban', disabled: true },
										{ value: 75, displayValue: 'San Felipe', disabled: true },
										{ value: 76, displayValue: 'Santa María', disabled: true },
										{ value: 77, displayValue: 'Santo Domingo', disabled: true },
										{ value: 78, displayValue: 'Valparaíso', disabled: true },
										{ value: 79, displayValue: 'Villa Alemana', disabled: true },
										{ value: 80, displayValue: 'Viña del Mar', disabled: true },
										{ value: 81, displayValue: 'Zapallar', disabled: true },
										{ value: 82, displayValue: 'Alhué', disabled: true },
										{ value: 83, displayValue: 'Buin', disabled: true },
										{ value: 84, displayValue: 'Calera de Tango', disabled: true },
										{ value: 85, displayValue: 'Cerrillos', disabled: true },
										{ value: 86, displayValue: 'Cerro Navia', disabled: true },
										{ value: 87, displayValue: 'Colina', disabled: true },
										{ value: 88, displayValue: 'Conchalí', disabled: true },
										{ value: 89, displayValue: 'Curacaví', disabled: true },
										{ value: 90, displayValue: 'El Bosque', disabled: true },
										{ value: 91, displayValue: 'El Monte', disabled: true },
										{ value: 92, displayValue: 'Estación Central', disabled: true },
										{ value: 93, displayValue: 'Huechuraba', disabled: true },
										{ value: 94, displayValue: 'Independencia', disabled: true },
										{ value: 95, displayValue: 'Isla de Maipo', disabled: true },
										{ value: 96, displayValue: 'La Cisterna', disabled: true },
										{ value: 97, displayValue: 'La Florida', disabled: true },
										{ value: 98, displayValue: 'La Granja', disabled: true },
										{ value: 99, displayValue: 'La Pintana', disabled: true },
										{ value: 100, displayValue: 'La Reina', disabled: true },
										{ value: 101, displayValue: 'Lampa', disabled: true },
										{ value: 102, displayValue: 'Las Condes', disabled: true },
										{ value: 103, displayValue: 'Lo Barnechea', disabled: true },
										{ value: 104, displayValue: 'Lo Espejo', disabled: true },
										{ value: 105, displayValue: 'Lo Prado', disabled: true },
										{ value: 106, displayValue: 'Macul', disabled: true },
										{ value: 107, displayValue: 'Maipú', disabled: true },
										{ value: 108, displayValue: 'María Pinto', disabled: true },
										{ value: 109, displayValue: 'Melipilla', disabled: true },
										{ value: 110, displayValue: 'Ñuñoa', disabled: true },
										{ value: 111, displayValue: 'Padre Hurtado', disabled: true },
										{ value: 112, displayValue: 'Paine', disabled: true },
										{ value: 113, displayValue: 'Pedro Aguirre Cerda', disabled: true },
										{ value: 114, displayValue: 'Peñaflor', disabled: true },
										{ value: 115, displayValue: 'Peñalolén', disabled: true },
										{ value: 116, displayValue: 'Pirque', disabled: true },
										{ value: 117, displayValue: 'Providencia', disabled: true },
										{ value: 118, displayValue: 'Pudahuel', disabled: true },
										{ value: 119, displayValue: 'Puente Alto', disabled: true },
										{ value: 120, displayValue: 'Quilicura', disabled: true },
										{ value: 121, displayValue: 'Quinta Normal', disabled: true },
										{ value: 122, displayValue: 'Recoleta', disabled: true },
										{ value: 123, displayValue: 'Renca', disabled: true },
										{ value: 124, displayValue: 'San Bernardo', disabled: true },
										{ value: 125, displayValue: 'San Joaquín', disabled: true },
										{ value: 126, displayValue: 'San José de Maipo', disabled: true },
										{ value: 127, displayValue: 'San Miguel', disabled: true },
										{ value: 128, displayValue: 'San Pedro', disabled: true },
										{ value: 129, displayValue: 'San Ramón', disabled: true },
										{ value: 130, displayValue: 'Santiago', disabled: true },
										{ value: 131, displayValue: 'Talagante', disabled: true },
										{ value: 132, displayValue: 'Tiltil', disabled: true },
										{ value: 133, displayValue: 'Vitacura', disabled: true },
										{ value: 134, displayValue: 'Chépica', disabled: true },
										{ value: 135, displayValue: 'Chimbarongo', disabled: true },
										{ value: 136, displayValue: 'Codegua', disabled: true },
										{ value: 137, displayValue: 'Coinco', disabled: true },
										{ value: 138, displayValue: 'Coltauco', disabled: true },
										{ value: 139, displayValue: 'Doñihue', disabled: true },
										{ value: 140, displayValue: 'Graneros', disabled: true },
										{ value: 141, displayValue: 'La Estrella', disabled: true },
										{ value: 142, displayValue: 'Las Cabras', disabled: true },
										{ value: 143, displayValue: 'Litueche', disabled: true },
										{ value: 144, displayValue: 'Lolol', disabled: true },
										{ value: 145, displayValue: 'Machalí', disabled: true },
										{ value: 146, displayValue: 'Malloa', disabled: true },
										{ value: 147, displayValue: 'Marchihue', disabled: true },
										{ value: 148, displayValue: 'Nancagua', disabled: true },
										{ value: 149, displayValue: 'Navidad', disabled: true },
										{ value: 150, displayValue: 'Olivar', disabled: true },
										{ value: 151, displayValue: 'Palmilla', disabled: true },
										{ value: 152, displayValue: 'Paredones', disabled: true },
										{ value: 153, displayValue: 'Peralillo', disabled: true },
										{ value: 154, displayValue: 'Peumo', disabled: true },
										{ value: 155, displayValue: 'Pichidegua', disabled: true },
										{ value: 156, displayValue: 'Pichilemu', disabled: true },
										{ value: 157, displayValue: 'Placilla', disabled: true },
										{ value: 158, displayValue: 'Pumanque', disabled: true },
										{ value: 159, displayValue: 'Quinta de Tilcoco', disabled: true },
										{ value: 160, displayValue: 'Rancagua', disabled: true },
										{ value: 161, displayValue: 'Rengo', disabled: true },
										{ value: 162, displayValue: 'Requínoa', disabled: true },
										{ value: 163, displayValue: 'San Fernando', disabled: true },
										{ value: 164, displayValue: 'San Francisco de Mostazal', disabled: true },
										{ value: 165, displayValue: 'San Vicente de Tagua Tagua', disabled: true },
										{ value: 166, displayValue: 'Santa Cruz', disabled: true },
										{ value: 167, displayValue: 'Cauquenes', disabled: true },
										{ value: 168, displayValue: 'Chanco', disabled: true },
										{ value: 169, displayValue: 'Colbún', disabled: true },
										{ value: 170, displayValue: 'Constitución', disabled: true },
										{ value: 171, displayValue: 'Curepto', disabled: true },
										{ value: 172, displayValue: 'Curicó', disabled: true },
										{ value: 173, displayValue: 'Empedrado', disabled: true },
										{ value: 174, displayValue: 'Hualañé', disabled: true },
										{ value: 175, displayValue: 'Licantén', disabled: true },
										{ value: 176, displayValue: 'Linares', disabled: true },
										{ value: 177, displayValue: 'Longaví', disabled: true },
										{ value: 178, displayValue: 'Maule', disabled: true },
										{ value: 179, displayValue: 'Molina', disabled: true },
										{ value: 180, displayValue: 'Parral', disabled: true },
										{ value: 181, displayValue: 'Pelarco', disabled: true },
										{ value: 182, displayValue: 'Pelluhue', disabled: true },
										{ value: 183, displayValue: 'Pencahue', disabled: true },
										{ value: 184, displayValue: 'Rauco', disabled: true },
										{ value: 185, displayValue: 'Retiro', disabled: true },
										{ value: 186, displayValue: 'Río Claro', disabled: true },
										{ value: 187, displayValue: 'Romeral', disabled: true },
										{ value: 188, displayValue: 'Sagrada Familia', disabled: true },
										{ value: 189, displayValue: 'San Clemente', disabled: true },
										{ value: 190, displayValue: 'San Javier de Loncomilla', disabled: true },
										{ value: 191, displayValue: 'San Rafael', disabled: true },
										{ value: 192, displayValue: 'Talca', disabled: true },
										{ value: 193, displayValue: 'Teno', disabled: true },
										{ value: 194, displayValue: 'Vichuquén', disabled: true },
										{ value: 195, displayValue: 'Villa Alegre', disabled: true },
										{ value: 196, displayValue: 'Yerbas Buenas', disabled: true },
										{ value: 197, displayValue: 'Bulnes', disabled: true },
										{ value: 198, displayValue: 'Chillán', disabled: true },
										{ value: 199, displayValue: 'Chillán Viejo', disabled: true },
										{ value: 200, displayValue: 'Cobquecura', disabled: true },
										{ value: 201, displayValue: 'Coelemu', disabled: true },
										{ value: 202, displayValue: 'Coihueco', disabled: true },
										{ value: 203, displayValue: 'El Carmen', disabled: true },
										{ value: 204, displayValue: 'Ninhue', disabled: true },
										{ value: 205, displayValue: 'Ñiquén', disabled: true },
										{ value: 206, displayValue: 'Pemuco', disabled: true },
										{ value: 207, displayValue: 'Pinto', disabled: true },
										{ value: 208, displayValue: 'Portezuelo', disabled: true },
										{ value: 209, displayValue: 'Quillón', disabled: true },
										{ value: 210, displayValue: 'Quirihue', disabled: true },
										{ value: 211, displayValue: 'Ránquil', disabled: true },
										{ value: 212, displayValue: 'San Carlos', disabled: true },
										{ value: 213, displayValue: 'San Fabián', disabled: true },
										{ value: 214, displayValue: 'San Ignacio', disabled: true },
										{ value: 215, displayValue: 'San Nicolás', disabled: true },
										{ value: 216, displayValue: 'Treguaco', disabled: true },
										{ value: 217, displayValue: 'Yungay', disabled: true },
										{ value: 218, displayValue: 'Alto Biobío', disabled: true },
										{ value: 219, displayValue: 'Antuco', disabled: true },
										{ value: 220, displayValue: 'Arauco', disabled: true },
										{ value: 221, displayValue: 'Cabrero', disabled: true },
										{ value: 222, displayValue: 'Cañete', disabled: true },
										{ value: 223, displayValue: 'Chiguayante', disabled: true },
										{ value: 224, displayValue: 'Concepción', disabled: true },
										{ value: 225, displayValue: 'Contulmo', disabled: true },
										{ value: 226, displayValue: 'Coronel', disabled: true },
										{ value: 227, displayValue: 'Curanilahue', disabled: true },
										{ value: 228, displayValue: 'Florida', disabled: true },
										{ value: 229, displayValue: 'Hualpén', disabled: true },
										{ value: 230, displayValue: 'Hualqui', disabled: true },
										{ value: 231, displayValue: 'Laja', disabled: true },
										{ value: 232, displayValue: 'Lebu', disabled: true },
										{ value: 233, displayValue: 'Los Álamos', disabled: true },
										{ value: 234, displayValue: 'Los Ángeles', disabled: true },
										{ value: 235, displayValue: 'Lota', disabled: true },
										{ value: 236, displayValue: 'Mulchén', disabled: true },
										{ value: 237, displayValue: 'Nacimiento', disabled: true },
										{ value: 238, displayValue: 'Negrete', disabled: true },
										{ value: 239, displayValue: 'Penco', disabled: true },
										{ value: 240, displayValue: 'Quilaco', disabled: true },
										{ value: 241, displayValue: 'Quilleco', disabled: true },
										{ value: 242, displayValue: 'San Pedro de la Paz', disabled: true },
										{ value: 243, displayValue: 'San Rosendo', disabled: true },
										{ value: 244, displayValue: 'Santa Bárbara', disabled: true },
										{ value: 245, displayValue: 'Santa Juana', disabled: true },
										{ value: 246, displayValue: 'Talcahuano', disabled: true },
										{ value: 247, displayValue: 'Tirúa', disabled: true },
										{ value: 248, displayValue: 'Tomé', disabled: true },
										{ value: 249, displayValue: 'Tucapel', disabled: true },
										{ value: 250, displayValue: 'Yumbel', disabled: true },
										{ value: 251, displayValue: 'Angol', disabled: true },
										{ value: 252, displayValue: 'Carahue', disabled: true },
										{ value: 253, displayValue: 'Cholchol', disabled: true },
										{ value: 254, displayValue: 'Collipulli', disabled: true },
										{ value: 255, displayValue: 'Cunco', disabled: true },
										{ value: 256, displayValue: 'Curacautín', disabled: true },
										{ value: 257, displayValue: 'Curarrehue', disabled: true },
										{ value: 258, displayValue: 'Ercilla', disabled: true },
										{ value: 259, displayValue: 'Freire', disabled: true },
										{ value: 260, displayValue: 'Galvarino', disabled: true },
										{ value: 261, displayValue: 'Gorbea', disabled: true },
										{ value: 262, displayValue: 'Lautaro', disabled: true },
										{ value: 263, displayValue: 'Loncoche', disabled: true },
										{ value: 264, displayValue: 'Lonquimay', disabled: true },
										{ value: 265, displayValue: 'Los Sauces', disabled: true },
										{ value: 266, displayValue: 'Lumaco', disabled: true },
										{ value: 267, displayValue: 'Melipeuco', disabled: true },
										{ value: 268, displayValue: 'Nueva Imperial', disabled: true },
										{ value: 269, displayValue: 'Padre las Casas', disabled: true },
										{ value: 270, displayValue: 'Perquenco', disabled: true },
										{ value: 271, displayValue: 'Pitrufquén', disabled: true },
										{ value: 272, displayValue: 'Pucón', disabled: true },
										{ value: 273, displayValue: 'Purén', disabled: true },
										{ value: 274, displayValue: 'Renaico', disabled: true },
										{ value: 275, displayValue: 'Saavedra', disabled: true },
										{ value: 276, displayValue: 'Temuco', disabled: true },
										{ value: 277, displayValue: 'Teodoro Schmidt', disabled: true },
										{ value: 278, displayValue: 'Toltén', disabled: true },
										{ value: 279, displayValue: 'Traiguén', disabled: true },
										{ value: 280, displayValue: 'Victoria', disabled: true },
										{ value: 281, displayValue: 'Vilcún', disabled: true },
										{ value: 282, displayValue: 'Villarrica', disabled: true },
										{ value: 283, displayValue: 'Corral', disabled: true },
										{ value: 284, displayValue: 'Futrono', disabled: true },
										{ value: 285, displayValue: 'La Unión', disabled: true },
										{ value: 286, displayValue: 'Lago Ranco', disabled: true },
										{ value: 287, displayValue: 'Lanco', disabled: true },
										{ value: 288, displayValue: 'Los Lagos', disabled: true },
										{ value: 289, displayValue: 'Máfil', disabled: true },
										{ value: 290, displayValue: 'Mariquina', disabled: true },
										{ value: 291, displayValue: 'Paillaco', disabled: true },
										{ value: 292, displayValue: 'Panguipulli', disabled: true },
										{ value: 293, displayValue: 'Río Bueno', disabled: true },
										{ value: 294, displayValue: 'Valdivia', disabled: true },
										{ value: 295, displayValue: 'Ancud', disabled: true },
										{ value: 296, displayValue: 'Calbuco', disabled: true },
										{ value: 297, displayValue: 'Castro', disabled: true },
										{ value: 298, displayValue: 'Chaitén', disabled: true },
										{ value: 299, displayValue: 'Chonchi', disabled: true },
										{ value: 300, displayValue: 'Cochamó', disabled: true },
										{ value: 301, displayValue: 'Curaco de Vélez', disabled: true },
										{ value: 302, displayValue: 'Dalcahue', disabled: true },
										{ value: 303, displayValue: 'Fresia', disabled: true },
										{ value: 304, displayValue: 'Frutillar', disabled: true },
										{ value: 305, displayValue: 'Futaleufú', disabled: true },
										{ value: 306, displayValue: 'Hualaihué', disabled: true },
										{ value: 307, displayValue: 'Llanquihue', disabled: true },
										{ value: 308, displayValue: 'Los Muermos', disabled: true },
										{ value: 309, displayValue: 'Maullín', disabled: true },
										{ value: 310, displayValue: 'Osorno', disabled: true },
										{ value: 311, displayValue: 'Palena', disabled: true },
										{ value: 312, displayValue: 'Puerto Montt', disabled: true },
										{ value: 313, displayValue: 'Puerto Octay', disabled: true },
										{ value: 314, displayValue: 'Puerto Varas', disabled: true },
										{ value: 315, displayValue: 'Puqueldón', disabled: true },
										{ value: 316, displayValue: 'Purranque', disabled: true },
										{ value: 317, displayValue: 'Puyehue', disabled: true },
										{ value: 318, displayValue: 'Queilén', disabled: true },
										{ value: 319, displayValue: 'Quellón', disabled: true },
										{ value: 320, displayValue: 'Quemchi', disabled: true },
										{ value: 321, displayValue: 'Quinchao', disabled: true },
										{ value: 322, displayValue: 'Río Negro', disabled: true },
										{ value: 323, displayValue: 'San Juan de la Costa', disabled: true },
										{ value: 324, displayValue: 'San Pablo', disabled: true },
										{ value: 325, displayValue: 'Aysén', disabled: true },
										{ value: 326, displayValue: 'Chile Chico', disabled: true },
										{ value: 327, displayValue: 'Cisnes', disabled: true },
										{ value: 328, displayValue: 'Cochrane', disabled: true },
										{ value: 329, displayValue: 'Coyhaique', disabled: true },
										{ value: 330, displayValue: 'Guaitecas', disabled: true },
										{ value: 331, displayValue: 'Lago Verde', disabled: true },
										{ value: 332, displayValue: 'O’Higgins', disabled: true },
										{ value: 333, displayValue: 'Río Ibáñez', disabled: true },
										{ value: 334, displayValue: 'Tortel', disabled: true },
										{ value: 335, displayValue: 'Antártica', disabled: true },
										{ value: 336, displayValue: 'Cabo de Hornos', disabled: true },
										{ value: 337, displayValue: 'Laguna Blanca', disabled: true },
										{ value: 338, displayValue: 'Natales', disabled: true },
										{ value: 339, displayValue: 'Porvenir', disabled: true },
										{ value: 340, displayValue: 'Primavera', disabled: true },
										{ value: 341, displayValue: 'Punta Arenas', disabled: true },
										{ value: 342, displayValue: 'Río Verde', disabled: true },
										{ value: 343, displayValue: 'San Gregorio', disabled: true },
										{ value: 344, displayValue: 'Timaukel', disabled: true },
										{ value: 345, displayValue: 'Torres del Paine', disabled: true },
										
									]
                },
                subtext: '',
                value: '',
              }
            ]
          },
        }
      }
    ]
  }
;