import React from 'react';
import Routes from "./Routes";

import './App.css';

function App() {

  

  const stagesEmpresa =
  [
    {
      id: 0,
      title: 'Datos empresa',
      inputs: {
        location: {
          label: 'Ubicación',
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Av. Tobalaba 417, piso 2',
            name: 'location',
            id: 'location'
          },
          value: ''
        },
        cargo: {
          label: 'Cargo',
          elementType: 'input',
          elementConfig: {
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
          elementType: 'select',
          elementConfig: {
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
          elementType: 'select',
          elementConfig: {
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
          elementType: 'select',
          elementConfig: {
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
          elementType: 'select',
          elementConfig: {
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
          elementType: 'select',
          elementConfig: {
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
          elementType: 'select',
          elementConfig: {
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
        licencia: {

        },
        nivelEducacional: {
          label: 'Nivel educacional',
          elementType: 'select',
          elementConfig: {
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
          elementType: 'select',
          elementConfig: {
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
          elementType: 'select',
          elementConfig: {
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
          elementType: 'select',
          elementConfig: {
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

  const stagesPreguntas =
  [
    {
      id: 0,
      title: "Preguntas (1/2)",
      inputs: {
        permanecerPie: {
          label: '¿Puedes permanecer en pie?',
          elementType: 'select',
          elementConfig: {
            name: 'permanecerPie',
            id: 'permanecerPie',
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
        permanecerSentado: {
          label: '¿Puedes permanecer sentado?',
          elementType: 'select',
          elementConfig: {
            name: 'permanecerSentado',
            id: 'permanecerSentado',
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
        desplazoTrayectos: {
          label: '¿Puedes desplazarte en trayectos, con o sin ayuda técnica?',
          elementType: 'select',
          elementConfig: {
            name: 'desplazoTrayectos',
            id: 'desplazoTrayectos',
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
        diferentesPisos: {
          label: '¿Puedes realizar actividades en diferentes pisos?',
          elementType: 'select',
          elementConfig: {
            name: 'diferentesPisos',
            id: 'diferentesPisos',
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
        diferentesAlturas: {
          label: '¿Puedes alcanzar o coger objetos en diferentes alturas?',
          elementType: 'select',
          elementConfig: {
            name: 'diferentesAlturas',
            id: 'diferentesAlturas',
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
        objetosPequeños: {
          label: '¿Puedes usar herramientas u objetos pequeños?',
          elementType: 'select',
          elementConfig: {
            name: 'objetosPequeños',
            id: 'objetosPequeños',
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
        actividadesVisual: {
          label: '¿Puedes realizar actividades que requieren agudeza visual corta y larga distancia?',
          elementType: 'select',
          elementConfig: {
            name: 'actividadesVisual',
            id: 'actividadesVisual',
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
        actividadesAuditiva: {
          label: '¿Puedes comunicarte de manera oral y fluida?',
          elementType: 'select',
          elementConfig: {
            name: 'actividadesAuditiva',
            id: 'actividadesAuditiva',
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
      id: 1,
      title: "Preguntas (2/2)",
      inputs: {
        comunicacionOral: {
          label: '¿Puedes comunicarte de manera oral y fluida?',
          elementType: 'select',
          elementConfig: {
            name: 'comunicacionOral',
            id: 'comunicacionOral',
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
        leerEscribir: {
          label: '¿Puedes leer y escribir?',
          elementType: 'select',
          elementConfig: {
            name: 'leerEscribir',
            id: 'leerEscribir',
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
        situacionesNuevas: {
          label: '¿Te adaptas a situaciones de trabajo nuevas?',
          elementType: 'select',
          elementConfig: {
            name: 'situacionesNuevas',
            id: 'situacionesNuevas',
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
        trabajoEquipo: {
          label: '¿Te adaptas a trabajo en equipo con varias personas?',
          elementType: 'select',
          elementConfig: {
            name: 'trabajoEquipo',
            id: 'trabajoEquipo',
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
        situacionesConflicto: {
          label: '¿Te adaptas a situaciones tensiones y conflicto?',
          elementType: 'select',
          elementConfig: {
            name: 'situacionesConflicto',
            id: 'situacionesConflicto',
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
        resolverProblemas: {
          label: '¿Te adaptas para resolver problemas?',
          elementType: 'select',
          elementConfig: {
            name: 'resolverProblemas',
            id: 'resolverProblemas',
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
        tareasEstresantes: {
          label: '¿Te manejas para desarrollar tareas estresantes?',
          elementType: 'select',
          elementConfig: {
            name: 'tareasEstresantes',
            id: 'tareasEstresantes',
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
      }
    },
    {
      id: 2 ,
      title: 'Disponibilidad',
      inputs: {
        disponibilidad: {
          label: 'Indique disponibilidad',
          elementType: 'select',
          elementConfig: {
            name: 'disponibilidad',
            id: 'disponibilidad',
            options: [
              { value: '', displayValue: 'Seleccione...', disabled: true },
              { value: '0', displayValue: 'Lunes a viernes' },
              { value: '1', displayValue: 'Sábados, Domingos y festivos' },
              { value: '2', displayValue: 'Cualquier día' },
            ]
          },
          value: ''
        },
        expectativaSueldo: {
          label: 'Indique expectativa de sueldo',
          elementType: 'select',
          elementConfig: {
            name: 'expectativaSueldo',
            id: 'expectativaSueldo',
            options: [
              { value: '', displayValue: 'Seleccione...', disabled: true },
              { value: '0', displayValue: 'Hasta 301.000' },
              { value: '1', displayValue: '301.0001 a 400.000' },
              { value: '2', displayValue: '400.001 a 550.000' },
              { value: '3', displayValue: '550.001 a 650.000' },
              { value: '4', displayValue: '650.001 a 800.000' },
              { value: '5', displayValue: '800.001 a 1.000.000' },
              { value: '6', displayValue: '1.000.000 o más' }
            ]
          },
          value: ''
        },
        ayudaFormulario: {
          label: '¿Requirió de ayuda para completar el formulario?',
          elementType: 'select',
          elementConfig: {
            name: 'ayudaFormulario',
            id: 'ayudaFormulario',
            options: [
              { value: '', displayValue: 'Seleccione...', disabled: true },
              { value: '0', displayValue: 'No' },
              { value: '1', displayValue: 'Si, parcial' },
              { value: '2', displayValue: 'Completamente'}
            ]
          },
          value: ''
        }
      }
    }
  ]
  
  
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
	

	const formPostulante =
	{
		title: "Información postulante",
		belongsTo: "postulante",
		endpoint: "http://localhost:8080/api/postulante/:id/datos-personales",
		totalStages: 5,
		stages: [
			{
				id: 0,
				name: "Identificación",
				fields: {
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
								value: ''
							}
						]
					},
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
								value: ''
							}
						]
					},
					fechaEntrevista: {
						type: 'normal',
						elements: [
							{
								label: 'Fecha de entrevista',
								elementType: 'input',
								elementConfig: {
									type: 'text',
									placeholder: '20/10/2019',
									name: 'fechaEntrevista',
									id: 'fechaEntrevista'
								},
								value: ''
							}
						]
					},
					personaQueEntrevista: {
						type: 'normal',
						elements: [
							{
								label: 'Persona que entrevista',
								elementType: 'input',
								elementConfig: {
									type: 'text',
									placeholder: 'Karina Cisterna',
									name: 'personaQueEntrevista',
									id: 'personaQueEntrevista'
								},
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
								value: ''
							}
						]
					},
					fechaNacimiento: {
						type: 'normal',
						elements: [
							{
								label: 'Fecha de nacimiento',
								elementType: 'input',
								elementConfig: {
									type: 'text',
									placeholder: '20/10/1987',
									name: 'fechaNacimiento',
									id: 'fechaNacimiento'
								},
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
					email: {
						type: 'normal',
						elements: [
							{
								label: 'Correo electrónico de contacto',
								elementType: 'input',
								elementConfig: {
									type: 'email',
									placeholder: 'juan.perez@gmail.com',
									name: 'email',
									id: 'email'
								},
								value: ''
							}
						]
					},
					telefono: {
						type: 'normal',
						elements: [
							{
								label: 'Teléfono',
								elementType: 'input',
								elementConfig: {
									type: 'text',
									placeholder: '+56912345678',
									name: 'telefono',
									id: 'telefono'
								},
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
								value: ''
							}
						]
					},
					region: {
						type: 'normal',
						elements: [
							{
								label: 'Región',
								elementType: 'input',
								elementConfig: {
									type: 'text',
									placeholder: 'Región Metropolitana',
									name: 'region',
									id: 'region'
								},
								value: ''
							}
						]
					},
					comuna: {
						type: 'normal',
						elements: [
							{
								label: 'Comuna',
								elementType: 'input',
								elementConfig: {
									type: 'text',
									placeholder: 'Maipú',
									name: 'comuna',
									id: 'comuna'
								},
								value: ''
							}
						]
					},
				}
			}
		]
	}

	const formPostulanteLaboral =
	{
		title: "Información postulante",
		belongsTo: "postulante",
		endpoint: "http://localhost:8080/api/postulante/:id/datos-laborales",
		totalStages: 4,
		stages: [
			{
				id: 0,
				name: "Etapa uno",
				fields: {
					credencial: {
						label: '¿Tiene credencial de discapacidad?',
						elementType: 'select',
						elementConfig: {
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
						elementType: 'select',
						elementConfig: {
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
					bañoAdaptado: {
						label: '¿Requiere baño adaptado?',
						elementType: 'select',
						elementConfig: {
							name: 'bañoAdaptado',
							id: 'bañoAdaptado',
							options: [
								{ value: '', displayValue: 'Seleccione...', disabled: true },
								{ value: 'true', displayValue: 'Si' },
								{ value: 'false', displayValue: 'No' }
							]
						},
						value: ''
					}
				}
			},
			{
				id: 1,
				name: "Etapa dos",
				fields: {
					dAuditiva: {
						label: 'Grado de discapacidad auditiva',
						elementType: 'select',
						elementConfig: {
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
						elementType: 'select',
						elementConfig: {
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
						elementType: 'select',
						elementConfig: {
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
				}
			},
			{
				id: 2,
				name: "Etapa tres",
				fields: {
					dPsiquica: {
						label: 'Grado de discapacidad psíquica',
						elementType: 'select',
						elementConfig: {
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
						elementType: 'select',
						elementConfig: {
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
					},
					adecuaciones: {
						label: 'Indique si requiere de otras adecuaciones',
						elementType: 'textarea',
						elementConfig:{
							name: 'adecuaciones',
							id: 'adecuaciones'
						},
						value: ''
					}
				}
			},
			{
				id: 3,
				name: "Etapa cuatro",
				fields: {
					nivelEducacional: {
						label: 'Nivel educacional',
						elementType: 'select',
						elementConfig: {
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
						elementType: 'select',
						elementConfig: {
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
						elementType: 'select',
						elementConfig: {
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
						elementType: 'select',
						elementConfig: {
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
	}
	
	const formPostulanteLaboralNew =
	{
		title: "Información postulante",
		belongsTo: "postulante",
		endpoint: "http://localhost:8080/api/postulante/:id/datos-laborales",
		totalStages: 7,
		stages: [
			{
				id: 0,
				name: "Educación",
				fields: {
					nivelEducacional: {
						type: 'normal',
						elements: [
							{
								label: 'Nivel educacional',
								elementType: 'select',
								elementConfig: {
									name: 'nivelEducacional',
									id: 'nivelEducacional',
									options: [
										{ value: '', displayValue: 'Seleccione...', disabled: true },
										{ value: '0', displayValue: 'Educación Especial' },
										{ value: '1', displayValue: 'Ed. Básica Incompleta' },
										{ value: '2', displayValue: 'Ed. Básica Completa' },
										{ value: '3', displayValue: 'Ed. Media Incompleta' },
										{ value: '4', displayValue: 'Ed. Media Completa' },
										{ value: '5', displayValue: 'Ed. Media Técnica-Profesional Incompleta' },
										{ value: '6', displayValue: 'Ed. Media Técnica-Profesional Completa' },
										{ value: '7', displayValue: 'Ed. Superior Profesional Incompleta' },
										{ value: '8', displayValue: 'Ed. Superior Profesional Completa' },
										{ value: '9', displayValue: 'Postgrado' },
									]
								},
								value: ''
							}
						]
					},
					titulo: {
						type: 'normal',
						elements: [
							{
								label: 'Título cursado u obtenido',
								elementType: 'input',
								elementConfig: {
									type: 'text',
									placeholder: 'Pedagogía en Lenguaje',
									name: 'titulo',
									id: 'titulo'
								},
								value: ''
							}
						]
					},
					institucion: {
						type: 'normal',
						elements: [
							{
								label: 'Institución educacional',
								elementType: 'input',
								elementConfig: {
									type: 'text',
									placeholder: 'Universidad de Santiago de Chile',
									name: 'institucion',
									id: 'institucion'
								},
								value: ''
							}
						]
					},
					egreso: {
						type: 'normal',
						elements: [
							{
								label: 'Año de egreso',
								elementType: 'input',
								elementConfig: {
									type: 'text',
									placeholder: '2010',
									name: 'egreso',
									id: 'egreso'
								},
								value: ''
							}
						]
					}
				}
			},
			{
				id: 1,
				name: "Otra formación",
				fields: {
					curso: {
						type: 'normal',
						elements: [
							{
								label: 'Curso de capacitación',
								elementType: 'input',
								elementConfig: {
									type: 'text',
									placeholder: 'Administración pública',
									name: 'curso',
									id: 'curso'
								},
								value: ''
							}
						]
					},
					institucionCurso: {
						type: 'normal',
						elements: [
							{
								label: 'Institución donde se realizó',
								elementType: 'input',
								elementConfig: {
									type: 'text',
									placeholder: 'Universidad de Santiago de Chile',
									name: 'institucionCurso',
									id: 'institucionCurso'
								},
								value: ''
							}
						]
					},
					fechaInicioCurso: {
						type: 'normal',
						elements: [
							{
								label: 'Fecha de inicio',
								elementType: 'input',
								elementConfig: {
									type: 'text',
									placeholder: '20/04/2010',
									name: 'fechaInicioCurso',
									id: 'fechaInicioCurso'
								},
								value: ''
							}
						]
					},
					fechaTerminoCurso: {
						type: 'normal',
						elements: [
							{
								label: 'Fecha de término',
								elementType: 'input',
								elementConfig: {
									type: 'text',
									placeholder: '15/06/2010',
									name: 'fechaTerminoCurso',
									id: 'fechaTerminoCurso'
								},
								value: ''
							}
						]
					}
				}
			},
			{
				id: 2,
				name: "Experiencia laboral",
				fields: {
					experiencias: {
						type: 'multi',
						elements: [
							
						]
					}
				}
			},
			{
				id: 3,
				name: "Otros datos laborales",
				fields: {
					interesesLaborales: {
						type: 'normal',
						elements: [
							{
								label: 'Intereses laborales',
								elementType: 'input',
								elementConfig: {
									type: 'text',
									placeholder: 'Ventas',
									name: 'interesesLaborales',
									id: 'interesesLaborales'
								},
								value: ''
							}
						]
					},
					expectativaSueldo: {
						type: 'normal',
						elements: [
							{
								label: 'Pretención de renta (en pesos)',
								elementType: 'money',
								elementConfig: {
									type: 'text',
									placeholder: '600.000',
									name: 'expectativaSueldo',
									id: 'expectativaSueldo'
								},
								value: ''
							}
						]
					},
					licencia: {
						type: 'normal',
						elements: [
							{
								label: 'Licencia de conducir',
								elementType: 'select',
								elementConfig: {
									name: 'licencia',
									id: 'licencia',
									options: [
										{ value: 'No tiene', displayValue: 'No tiene' },
										{ value: 'A1', displayValue: 'Clase A1' },
										{ value: 'A2', displayValue: 'Clase A2' },
										{ value: 'A3', displayValue: 'Clase A3' },
										{ value: 'A4', displayValue: 'Clase A4' },
										{ value: 'A5', displayValue: 'Clase A5' },
										{ value: 'B', displayValue: 'Clase B' },
										{ value: 'C', displayValue: 'Clase C' },
										{ value: 'D', displayValue: 'Clase D' },
										{ value: 'E', displayValue: 'Clase E' },
										{ value: 'F', displayValue: 'Clase F' }
									]
								},
								value: ''
							}
						]
					},
				}
			},
			{
				id: 4,
				name: "Perfil funcional",
				fields: {
					sillaRuedas: {
						type: 'normal',
						elements: [
							{
								label: '¿Utiliza silla de ruedas?',
								elementType: 'select',
								elementConfig: {
									name: 'sillaRuedas',
									id: 'sillaRuedas',
									options: [
										{ value: '', displayValue: 'Seleccione...', disabled: true },
										{ value: 'true', displayValue: 'Si' },
										{ value: 'false', displayValue: 'No' }
									]
								},
								value: ''
							}
						]
					},
					bañoAdaptado: {
						type: 'normal',
						elements: [
							{
								label: '¿Requiere baño adaptado?',
								elementType: 'select',
								elementConfig: {
									name: 'bañoAdaptado',
									id: 'bañoAdaptado',
									options: [
										{ value: '', displayValue: 'Seleccione...', disabled: true },
										{ value: 'true', displayValue: 'Si' },
										{ value: 'false', displayValue: 'No' }
									]
								},
								value: ''
							}
						]
					},
					dAuditiva: {
						type: 'normal',
						elements: [
							{
								label: 'Grado de discapacidad auditiva',
								elementType: 'select',
								elementConfig: {
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
							}
						]
					},
					dFisica: {
						type: 'normal',
						elements: [
							{
								label: 'Grado de discapacidad física',
								elementType: 'select',
								elementConfig: {
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
							}
						]
					},
					dIntelectual: {
						type: 'normal',
						elements: [
							{
								label: 'Grado de discapacidad intelectual',
								elementType: 'select',
								elementConfig: {
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
							}
						]
					},
				}
			},
			{
				id: 5,
				name: "Etapa tres",
				fields: {
					dPsiquica: {
						type: 'normal',
						elements: [
							{
								label: 'Grado de discapacidad psíquica',
								elementType: 'select',
								elementConfig: {
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
							}
						]
					},
					dVisual: {
						type: 'normal',
						elements: [
							{
								label: 'Grado de discapacidad visual',
								elementType: 'select',
								elementConfig: {
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
						]
					},
					adecuaciones: {
						type: 'normal',
						elements: [
							{
								label: 'Indique si requiere de otras adecuaciones',
								elementType: 'textarea',
								elementConfig:{
									name: 'adecuaciones',
									id: 'adecuaciones'
								},
								value: ''
							}
						]
					}
				}
			},
			{
				id: 6,
				name: "Otra formación",
				fields: {
					cursos: {
						type: 'cursos',
						elements: [
							
						]
					}, // fields
				}
			},
			// stages
		]
	}

  return (
    <Routes 
			formPostulante={formPostulante}
			formPostulanteLaboral={formPostulanteLaboralNew}
      stagesEmpresa={stagesEmpresa} 
      stagesPreguntas={stagesPreguntas}
    />
  );
}

export default App;