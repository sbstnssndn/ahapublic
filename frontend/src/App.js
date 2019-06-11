import React from 'react';
import Routes from "./Routes";

import './App.css';

function App() {

  const stagesPostulante =
  [
    {
      id: 0,
      title: 'Datos de usuario',
      inputs: {
        rut: {
          label: 'RUT',
          inputStyle: 'input',
          inputConfig: {
            type: 'text',
            placeholder: '12345678-0',
            name: 'rut',
            id: 'rut'
          },
          value: ''
        },
        firstName: {
          label: 'Nombres',
          inputStyle: 'input',
          inputConfig: {
            type: 'text',
            placeholder: 'Juan Alberto',
            name: 'firstName',
            id: 'firstName'
          },
          value: ''
        },
        lastName: {
          label: 'Apellidos',
          inputStyle: 'input',
          inputConfig: {
            type: 'text',
            placeholder: 'Pérez Soto',
            name: 'lastName',
            id: 'lastName'
          },
          value: ''
        },
        location: {
          label: 'Dirección',
          inputStyle: 'input',
          inputConfig: {
            type: 'text',
            placeholder: 'Av. Pajaritos 754, casa 64',
            name: 'location',
            id: 'location'
          },
          value: ''
        },
        email: {
          label: 'Correo electrónico',
          inputStyle: 'input',
          inputConfig: {
            type: 'email',
            placeholder: 'juan.perez@gmail.com',
            name: 'email',
            id: 'email'
          },
          value: ''
        }
      }
    },
    {
      id: 1,
      title: 'Datos de discapacidad',
      inputs: {
        credencial: {
          label: '¿Tiene credencial de discapacidad?',
          inputStyle: 'select',
          inputConfig: {
            name: 'credencial',
            id: 'credencial',
            options: [
              { value: '', displayValue: 'Seleccione...', disabled: true },
              { value: 'true', displayValue: 'Si' },
              { value: 'false', displayValue: 'No' }
            ]
          },
          value: ''
        },
        sillaRuedas: {
          label: '¿Utiliza silla de ruedas?',
          inputStyle: 'select',
          inputConfig: {
            name: 'sillaRuedas',
            id: 'sillaRuedas',
            options: [
              { value: '', displayValue: 'Seleccione...', disabled: true },
              { value: 'true', displayValue: 'Si' },
              { value: 'false', displayValue: 'No' }
            ]
          },
          value: ''
        },
        dAuditiva: {
          label: 'Grado de discapacidad auditiva',
          inputStyle: 'select',
          inputConfig: {
            name: 'dAuditiva',
            id: 'dAuditiva',
            options: [
              { value: '', displayValue: 'Seleccione...', disabled: true },
              { value: '0', displayValue: '0%' },
              { value: '25', displayValue: '25%' },
              { value: '50', displayValue: '50%' },
              { value: '75', displayValue: '75%' },
              { value: '100', displayValue: '100%' },
            ]
          },
          value: ''
        },
        dFisica: {
          label: 'Grado de discapacidad física',
          inputStyle: 'select',
          inputConfig: {
            name: 'dFisica',
            id: 'dFisica',
            options: [
              { value: '', displayValue: 'Seleccione...', disabled: true },
              { value: '0', displayValue: '0%' },
              { value: '25', displayValue: '25%' },
              { value: '50', displayValue: '50%' },
              { value: '75', displayValue: '75%' },
              { value: '100', displayValue: '100%' },
            ]
          },
          value: ''
        },
        dIntelectual: {
          label: 'Grado de discapacidad intelectual',
          inputStyle: 'select',
          inputConfig: {
            name: 'dIntelectual',
            id: 'dIntelectual',
            options: [
              { value: '', displayValue: 'Seleccione...', disabled: true },
              { value: '0', displayValue: '0%' },
              { value: '25', displayValue: '25%' },
              { value: '50', displayValue: '50%' },
              { value: '75', displayValue: '75%' },
              { value: '100', displayValue: '100%' },
            ]
          },
          value: ''
        },
        dPsiquica: {
          label: 'Grado de discapacidad psíquica',
          inputStyle: 'select',
          inputConfig: {
            name: 'dPsiquica',
            id: 'dPsiquica',
            options: [
              { value: '', displayValue: 'Seleccione...', disabled: true },
              { value: '0', displayValue: '0%' },
              { value: '25', displayValue: '25%' },
              { value: '50', displayValue: '50%' },
              { value: '75', displayValue: '75%' },
              { value: '100', displayValue: '100%' },
            ]
          },
          value: ''
        },
        dVisual: {
          label: 'Grado de discapacidad visual',
          inputStyle: 'select',
          inputConfig: {
            name: 'dVisual',
            id: 'dVisual',
            options: [
              { value: '', displayValue: 'Seleccione...', disabled: true },
              { value: '0', displayValue: '0%' },
              { value: '25', displayValue: '25%' },
              { value: '50', displayValue: '50%' },
              { value: '75', displayValue: '75%' },
              { value: '100', displayValue: '100%' },
            ]
          },
          value: ''
        }
      }
    },
    {
      id: 2,
      title: 'Experiencia laboral',
      inputs: {
        nivelEducacional: {
          label: 'Nivel educacional',
          inputStyle: 'select',
          inputConfig: {
            name: 'nivelEducacional',
            id: 'nivelEducacional',
            options: [
              { value: '', displayValue: 'Seleccione...', disabled: true },
              { value: 'basica incompleta', displayValue: 'Básica incompleta' },
              { value: 'basica completa', displayValue: 'Básica completa' },
              { value: 'media incompleta', displayValue: 'Media incompleta' },
              { value: 'media completa', displayValue: 'Media completa' },
              { value: 'técnica incompleta', displayValue: 'Técnica incompleta' },
              { value: 'técnica completa', displayValue: 'Técnica completa' },
              { value: 'superior incompleta', displayValue: 'Superior incompleta' },
              { value: 'superior completa', displayValue: 'Superior completa' },
            ]
          },
          value: ''
        },
        profesion: {
          label: 'Profesión',
          inputStyle: 'select',
          inputConfig: {
            name: 'profesion',
            id: 'profesion',
            options: [
              { value: '', displayValue: 'Seleccione...', disabled: true },
              { value: 'arquitecto', displayValue: 'Arquitecto' },
              { value: 'ingeniero comercial', displayValue: 'Ingeniero Comercial' },
              { value: 'ingeniero en informática', displayValue: 'Ingeniero en Informática' },
              { value: 'abogado', displayValue: 'Abogado' },
              { value: 'profesor', displayValue: 'Profesor' }
            ]
          },
          value: ''
        },
        tiempoExperiencia: {
          label: 'Experiencia laboral (tiempo)',
          inputStyle: 'select',
          inputConfig: {
            name: 'tiempoExperiencia',
            id: 'tiempoExperiencia',
            options: [
              { value: '', displayValue: 'Seleccione...', disabled: true },
              { value: '0', displayValue: 'Menos de un año' },
              { value: '1', displayValue: 'Entre 1 y 2 años' },
              { value: '3', displayValue: 'Más de 2 años' }
            ]
          },
          value: ''
        },
        areaExperiencia: {
          label: 'Área de experiencia',
          inputStyle: 'select',
          inputConfig: {
            name: 'areaExperiencia',
            id: 'areaExperiencia',
            options: [
              { value: '', displayValue: 'Seleccione...', disabled: true },
              { value: 'finanzas', displayValue: 'Finanzas' },
              { value: 'informatica', displayValue: 'Informática' },
              { value: 'publicidad', displayValue: 'Publicidad' },
              { value: 'contabilidad', displayValue: 'Contabilidad' },
              { value: 'salud', displayValue: 'Salud' },
            ]
          },
          value: ''
        }
      }
    }
  ]

  const stagesEmpresa =
  [
    {
      id: 0,
      title: 'Datos empresa',
      inputs: {
        location: {
          label: 'Ubicación',
          inputStyle: 'input',
          inputConfig: {
            type: 'text',
            placeholder: 'Av. Tobalaba 417, piso 2',
            name: 'location',
            id: 'location'
          },
          value: ''
        },
        cargo: {
          label: 'Cargo',
          inputStyle: 'input',
          inputConfig: {
            type: 'text',
            placeholder: 'Desarrollador PHP Jr.',
            name: 'cargo',
            id: 'cargo'
          },
          value: ''
        },
      }
    },
    {
      id: 1,
      title: 'Datos de accesibilidad',
      inputs: {
        sillaRuedas: {
          label: '¿Tiene acceso para silla de ruedas?',
          inputStyle: 'select',
          inputConfig: {
            name: 'sillaRuedas',
            id: 'sillaRuedas',
            options: [
              { value: '', displayValue: 'Seleccione...', disabled: true },
              { value: 'true', displayValue: 'Si' },
              { value: 'false', displayValue: 'No' }
            ]
          },
          value: ''
        },
        dAuditiva: {
          label: 'Capacidad auditiva requerida',
          inputStyle: 'select',
          inputConfig: {
            name: 'dAuditiva',
            id: 'dAuditiva',
            options: [
              { value: '', displayValue: 'Seleccione...', disabled: true },
              { value: '0', displayValue: '0%' },
              { value: '25', displayValue: '25%' },
              { value: '50', displayValue: '50%' },
              { value: '75', displayValue: '75%' },
              { value: '100', displayValue: '100%' },
            ]
          },
          value: ''
        },
        dFisica: {
          label: 'Capacidad física requerida',
          inputStyle: 'select',
          inputConfig: {
            name: 'dFisica',
            id: 'dFisica',
            options: [
              { value: '', displayValue: 'Seleccione...', disabled: true },
              { value: '0', displayValue: '0%' },
              { value: '25', displayValue: '25%' },
              { value: '50', displayValue: '50%' },
              { value: '75', displayValue: '75%' },
              { value: '100', displayValue: '100%' },
            ]
          },
          value: ''
        },
        dIntelectual: {
          label: 'Capacidad intelectual requerida',
          inputStyle: 'select',
          inputConfig: {
            name: 'dIntelectual',
            id: 'dIntelectual',
            options: [
              { value: '', displayValue: 'Seleccione...', disabled: true },
              { value: '0', displayValue: '0%' },
              { value: '25', displayValue: '25%' },
              { value: '50', displayValue: '50%' },
              { value: '75', displayValue: '75%' },
              { value: '100', displayValue: '100%' },
            ]
          },
          value: ''
        },
        dPsiquica: {
          label: 'Capacidad psíquica requerida',
          inputStyle: 'select',
          inputConfig: {
            name: 'dPsiquica',
            id: 'dPsiquica',
            options: [
              { value: '', displayValue: 'Seleccione...', disabled: true },
              { value: '0', displayValue: '0%' },
              { value: '25', displayValue: '25%' },
              { value: '50', displayValue: '50%' },
              { value: '75', displayValue: '75%' },
              { value: '100', displayValue: '100%' },
            ]
          },
          value: ''
        },
        dVisual: {
          label: 'Capacidad visual requerida',
          inputStyle: 'select',
          inputConfig: {
            name: 'dVisual',
            id: 'dVisual',
            options: [
              { value: '', displayValue: 'Seleccione...', disabled: true },
              { value: '0', displayValue: '0%' },
              { value: '25', displayValue: '25%' },
              { value: '50', displayValue: '50%' },
              { value: '75', displayValue: '75%' },
              { value: '100', displayValue: '100%' },
            ]
          },
          value: ''
        }
      }
    },
    {
      id: 2,
      title: 'Experiencia laboral',
      inputs: {
        nivelEducacional: {
          label: 'Nivel educacional',
          inputStyle: 'select',
          inputConfig: {
            name: 'nivelEducacional',
            id: 'nivelEducacional',
            options: [
              { value: '', displayValue: 'Seleccione...', disabled: true },
              { value: 'basica incompleta', displayValue: 'Básica incompleta' },
              { value: 'basica completa', displayValue: 'Básica completa' },
              { value: 'media incompleta', displayValue: 'Media incompleta' },
              { value: 'media completa', displayValue: 'Media completa' },
              { value: 'técnica incompleta', displayValue: 'Técnica incompleta' },
              { value: 'técnica completa', displayValue: 'Técnica completa' },
              { value: 'superior incompleta', displayValue: 'Superior incompleta' },
              { value: 'superior completa', displayValue: 'Superior completa' },
            ]
          },
          value: ''
        },
        profesion: {
          label: 'Profesión',
          inputStyle: 'select',
          inputConfig: {
            name: 'profesion',
            id: 'profesion',
            options: [
              { value: '', displayValue: 'Seleccione...', disabled: true },
              { value: 'arquitecto', displayValue: 'Arquitecto' },
              { value: 'ingeniero comercial', displayValue: 'Ingeniero Comercial' },
              { value: 'ingeniero en informática', displayValue: 'Ingeniero en Informática' },
              { value: 'abogado', displayValue: 'Abogado' },
              { value: 'profesor', displayValue: 'Profesor' }
            ]
          },
          value: ''
        },
        tiempoExperiencia: {
          label: 'Experiencia laboral (tiempo)',
          inputStyle: 'select',
          inputConfig: {
            name: 'tiempoExperiencia',
            id: 'tiempoExperiencia',
            options: [
              { value: '', displayValue: 'Seleccione...', disabled: true },
              { value: '0', displayValue: 'Menos de un año' },
              { value: '1', displayValue: 'Entre 1 y 2 años' },
              { value: '3', displayValue: 'Más de 2 años' }
            ]
          },
          value: ''
        },
        areaExperiencia: {
          label: 'Área de experiencia',
          inputStyle: 'select',
          inputConfig: {
            name: 'areaExperiencia',
            id: 'areaExperiencia',
            options: [
              { value: '', displayValue: 'Seleccione...', disabled: true },
              { value: 'finanzas', displayValue: 'Finanzas' },
              { value: 'informatica', displayValue: 'Informática' },
              { value: 'publicidad', displayValue: 'Publicidad' },
              { value: 'contabilidad', displayValue: 'Contabilidad' },
              { value: 'salud', displayValue: 'Salud' },
            ]
          },
          value: ''
        }
      }
    }
  ]
	/*
  const regiones = [
    {
      region: "Región Metropolitana de Santiago",
      comunas: [
        "Cerrillos", "Cerro Navia", "Conchalí","El Bosque","Estación Central","Huechuraba","Independencia","La Cisterna","La Florida","La Granja","La Pintana",  "La Reina","Las Condes","Lo Barnechea","Lo Espejo",
        "Lo Prado","Macul","Maipú","Ñuñoa","Pedro Aguirre Cerda","Peñalolén","Providencia","Pudahuel","Quilicura","Quinta Normal",
        "Recoleta","Renca","Santiago","San Joaquín","San Miguel","San Ramón","Vitacura","Puente Alto","Pirque","San José de Maipo",
        "Colina","Lampa","Tiltil","San Bernardo","Buin","Calera de Tango","Paine","Melipilla","Alhué","Curacaví","María Pinto",
        "San Pedro","Talagante","El Monte","Isla de Maipo","Padre Hurtado","Peñaflor"
      ]
    },
    {
      region: "Tarapacá",
      comunas: [
        "Iquique","Alto Hospicio","Pozo Almonte","Camiña","Colchane","Huara","Pica"
      ]
    },
    {
      region: "Antofagasta",
      comunas: [
        "Antofagasta","Mejillones","Sierra Gorda","Taltal","Calama","Ollagüe","San Pedro de Atacama","Tocopilla","María Elena"
      ]
    },
    {
      region: "Atacama",
      comunas: [
        "Copiapó","Caldera","Tierra Amarilla","Chañaral","Diego de Almagro","Vallenar","Alto del Carmen","Freirina","Huasco"
      ]
    },
    {
      region: "Coquimbo",
      comunas: [
        "La Serena","Coquimbo","Andacollo","La Higuera","Paiguano","Vicuña","Illapel","Canela","Los Vilos","Salamanca","Ovalle",
        "Combarbalá","Monte Patria","Punitaqui","Río Hurtado"
      ]
    },
    {
      region: "Valparaíso",
      comunas: [
        "Valparaíso","Casablanca","Concón","Juan Fernández","Puchuncaví","Quintero","Viña del Mar","Isla de Pascua","Los Andes",
        "Calle Larga","Rinconada","San Esteban","La Ligua","Cabildo","Papudo","Petorca","Zapallar","Quillota","Calera","Hijuelas","La Cruz",
        "Nogales","San Antonio","Algarrobo","Cartagena","El Quisco","El Tabo","Santo Domingo","San Felipe","Catemu","Llaillay","Panquehue",
        "Putaendo","Santa María","Quilpué","Limache","Olmué","Villa Alemana"
      ]
    },
    {
      region: "Región del Libertador Gral. Bernardo O’Higgins",
      comunas: ["Rancagua","Codegua","Coinco","Coltauco","Doñihue","Graneros","Las Cabras","Machalí","Malloa",
        "San Francisco de Mostazal","Olivar","Peumo","Pichidegua","Quinta de Tilcoco","Rengo","Requínoa","San Vicente de Tagua Tagua","Pichilemu",
        "La Estrella","Litueche","Marchihue","Navidad","Paredones","San Fernando","Chépica","Chimbarongo","Lolol","Nancagua",
        "Palmilla","Peralillo","Placilla","Pumanque","Santa Cruz"
      ]
    },
    {
      region: "Región del Maule",
      comunas: [
        "Talca","Constitución","Curepto","Empedrado","Maule","Pelarco","Pencahue","Río Claro","San Clemente",
        "San Rafael","Cauquenes","Chanco","Pelluhue","Curicó","Hualañé","Licantén","Molina","Rauco","Romeral",
        "Sagrada Familia","Teno","Vichuquén","Linares","Colbún","Longaví","Parral","Retiro","San Javier de Loncomilla",
        "Villa Alegre","Yerbas Buenas"
      ]
    },
    {
      region: "Región del Biobío",
      comunas: [
        "Concepción","Coronel","Chiguayante","Florida","Hualqui","Lota","Penco","San Pedro de la Paz","Santa Juana","Talcahuano",
        "Tomé","Hualpén","Lebu","Arauco","Cañete","Contulmo","Curanilahue","Los Álamos","Tirúa",
        "Los Ángeles","Antuco","Cabrero","Laja","Mulchén","Nacimiento","Negrete","Quilaco","Quilleco",
        "San Rosendo","Santa Bárbara","Tucapel","Yumbel","Alto Biobío"
      ]
    },
    {
      region: "Región de la Araucanía",
      comunas: [
        "Temuco","Carahue","Cunco","Curarrehue","Freire","Galvarino","Gorbea","Lautaro","Loncoche",
        "Melipeuco","Nueva Imperial","Padre las Casas","Perquenco","Pitrufquén","Pucón","Saavedra","Teodoro Schmidt",
        "Toltén","Vilcún","Villarrica","Cholchol","Angol","Collipulli","Curacautín","Ercilla","Lonquimay",
        "Los Sauces","Lumaco","Purén","Renaico","Traiguén","Victoria"
      ]
    },
    {
      region: "Región de Los Ríos",
      comunas: [
        "Valdivia","Corral","Lanco","Los Lagos","Máfil","Mariquina","Paillaco",
        "Panguipulli","La Unión","Futrono","Lago Ranco","Río Bueno"
      ]
    },
    {
      region: "Región de Los Lagos",
      comunas: [
        "Puerto Montt","Calbuco","Cochamó","Fresia","Frutillar","Los Muermos","Llanquihue","Maullín","Puerto Varas","Castro","Ancud",
        "Chonchi","Curaco de Vélez","Dalcahue","Puqueldón","Queilén","Quellón","Quemchi","Quinchao",
        "Osorno","Puerto Octay","Purranque","Puyehue","Río Negro","San Juan de la Costa","San Pablo","Chaitén",
        "Futaleufú","Hualaihué","Palena"
      ]
    },
    {
      region: "Región Aisén del Gral. Carlos Ibáñez del Campo",
      comunas: [
        "Coihaique","Lago Verde","Aisén","Cisnes","Guaitecas","Cochrane",
        "O’Higgins","Tortel","Chile Chico","Río Ibáñez"
      ]
    },
    {
      region: "Región de Magallanes y de la Antártica Chilena",
      comunas: [
        "Punta Arenas","Laguna Blanca","Río Verde","San Gregorio","Cabo de Hornos (Ex Navarino)","Antártica","Porvenir",
        "Primavera","Timaukel","Natales","Torres del Paine"
      ]
    },
  
    {
      region: "Arica y Parinacota",
      comunas: ["Arica", "Camarones", "Putre", "General Lagos"]
    },
  
    {
      region: "Región de Ñuble",
      comunas: [
        "Cobquecura","Coelemu","Ninhue","Portezuelo","Quirihue","Ránquil","Treguaco","Bulnes","Chillán Viejo",
        "Chillán","El Carmen","Pemuco","Pinto","Quillón","San Ignacio","Yungay",
        "Coihueco","Ñiquén","San Carlos","San Fabián","San Nicolás"
      ]
    }
  ];
	*/
	
  return (
		<Routes stagesPostulante={stagesPostulante} stagesEmpresa={stagesEmpresa} />
  );
}

export default App;