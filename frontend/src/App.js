import React from 'react';
import Routes from "./Routes";

import './App.css';

function App() {

	const formPreguntas =
	{
		title: "Preguntas",
		belongsTo: "postulante",
		endpoint: "",
		totalStages: 4,
		stages: [
			{
				id: 0,
				name: "Preguntas (1/4)",
				fields: {
					permanecerPie:{
						type: 'normal',
						elements: [
							{
								label: '¿Puedes permanecer de pie?',
								elementType: 'select',
								elementConfig: {
									name: 'permanecerPie',
									id: 'permanecerPie',
									options: [
										{ value: '', displayValue: 'Seleccione...', disabled: true },
										{ value: '0', displayValue: 'No, o muy poco tiempo' },
										{ value: '1', displayValue: 'Esporádicamente (Hasta un 20% de la jornada laboral)' },
										{ value: '2', displayValue: 'Entre un 20% y 70% de la jornada laboral' },
										{ value: '3', displayValue: 'La mayor parte del tiempo' }
									]
								},
								value: ''
							}
						]
					},
					permanecerSentado:{
						type: 'normal',
						elements: [
							{
								label: '¿Puedes permanecer sentado?',
								elementType: 'select',
								elementConfig: {
									name: 'permanecerSentado',
									id: 'permanecerSentado',
									options: [
										{ value: '', displayValue: 'Seleccione...', disabled: true },
										{ value: '0', displayValue: 'No, o muy poco tiempo' },
										{ value: '1', displayValue: 'Esporádicamente (Hasta un 20% de la jornada laboral)' },
										{ value: '2', displayValue: 'Entre un 20% y 70% de la jornada laboral' },
										{ value: '3', displayValue: 'La mayor parte del tiempo' }
									]
								},
								value: ''
							}
						]
					},
					desplazoTrayectos: {
						type: 'normal',
						elements: [
							{
								label: '¿Puedes desplazarte en trayectos, con o sin ayuda técnica?',
								elementType: 'select',
								elementConfig: {
									name: 'desplazoTrayectos',
									id: 'desplazoTrayectos',
									options: [
										{ value: '', displayValue: 'Seleccione...', disabled: true },
										{ value: '0', displayValue: 'No, o muy poco tiempo' },
										{ value: '1', displayValue: 'Esporádicamente (Hasta un 20% de la jornada laboral)' },
										{ value: '2', displayValue: 'Entre un 20% y 70% de la jornada laboral' },
										{ value: '3', displayValue: 'La mayor parte del tiempo' }
									]
								},
								value: ''
							}
						]
					},
					diferentesPisos: {
						type: 'normal',
						elements: [
							{
								label: '¿Puedes realizar actividades en diferentes pisos?',
								elementType: 'select',
								elementConfig: {
									name: 'diferentesPisos',
									id: 'diferentesPisos',
									options: [
										{ value: '', displayValue: 'Seleccione...', disabled: true },
										{ value: '0', displayValue: 'No, o muy poco tiempo' },
										{ value: '1', displayValue: 'Esporádicamente (Hasta un 20% de la jornada laboral)' },
										{ value: '2', displayValue: 'Entre un 20% y 70% de la jornada laboral' },
										{ value: '3', displayValue: 'La mayor parte del tiempo' }
									]
								},
								value: ''
							}
						]
					},
				}
			},
			{
				id: 1,
				name: "Preguntas (2/4)",
				fields: {
					diferentesAlturas:{
						type: 'normal',
						elements: [
							{
								label: '¿Puedes alcanzar o coger objetos en diferentes alturas?',
								elementType: 'select',
								elementConfig: {
									name: 'diferentesAlturas',
									id: 'diferentesAlturas',
									options: [
										{ value: '', displayValue: 'Seleccione...', disabled: true },
										{ value: '0', displayValue: 'No, o muy poco tiempo' },
										{ value: '1', displayValue: 'Esporádicamente (Hasta un 20% de la jornada laboral)' },
										{ value: '2', displayValue: 'Entre un 20% y 70% de la jornada laboral' },
										{ value: '3', displayValue: 'La mayor parte del tiempo' }
									]
								},
								value: ''
							}
						]
					},
					objetosPequeños:{
						type: 'normal',
						elements: [
							{
								label: '¿Puedes usar herramientas u objetos pequeños?',
								elementType: 'select',
								elementConfig: {
									name: 'objetosPequeños',
									id: 'objetosPequeños',
									options: [
										{ value: '', displayValue: 'Seleccione...', disabled: true },
										{ value: '0', displayValue: 'No, o muy poco tiempo' },
										{ value: '1', displayValue: 'Esporádicamente (Hasta un 20% de la jornada laboral)' },
										{ value: '2', displayValue: 'Entre un 20% y 70% de la jornada laboral' },
										{ value: '3', displayValue: 'La mayor parte del tiempo' }
									]
								},
								value: ''
							}
						]
					},
					actividadesVisual: {
						type: 'normal',
						elements: [
							{
								label: '¿Puedes realizar actividades que requieren agudeza visual corta y larga distancia?',
								elementType: 'select',
								elementConfig: {
									name: 'actividadesVisual',
									id: 'actividadesVisual',
									options: [
										{ value: '', displayValue: 'Seleccione...', disabled: true },
										{ value: '0', displayValue: 'No, o muy poco tiempo' },
										{ value: '1', displayValue: 'Esporádicamente (Hasta un 20% de la jornada laboral)' },
										{ value: '2', displayValue: 'Entre un 20% y 70% de la jornada laboral' },
										{ value: '3', displayValue: 'La mayor parte del tiempo' }
									]
								},
								value: ''
							}
						]
					},
					actividadesAuditiva: {
						type: 'normal',
						elements: [
							{
								label: '¿Puedes realizar actividades que requieren agudeza auditiva?',
								elementType: 'select',
								elementConfig: {
									name: 'actividadesAuditiva',
									id: 'actividadesAuditiva',
									options: [
										{ value: '', displayValue: 'Seleccione...', disabled: true },
										{ value: '0', displayValue: 'No, o muy poco tiempo' },
										{ value: '1', displayValue: 'Esporádicamente (Hasta un 20% de la jornada laboral)' },
										{ value: '2', displayValue: 'Entre un 20% y 70% de la jornada laboral' },
										{ value: '3', displayValue: 'La mayor parte del tiempo' }
									]
								},
								value: ''
							}
						]
					},
				}
			},
			{
				id: 2,
				name: "Preguntas (3/4)",
				fields: {
					comunicacionOral:{
						type: 'normal',
						elements: [
							{
								label: '¿Puedes comunicarte de manera oral y fluida?',
								elementType: 'select',
								elementConfig: {
									name: 'comunicacionOral',
									id: 'comunicacionOral',
									options: [
										{ value: '', displayValue: 'Seleccione...', disabled: true },
										{ value: '0', displayValue: 'No, o muy poco tiempo' },
										{ value: '1', displayValue: 'Esporádicamente (Hasta un 20% de la jornada laboral)' },
										{ value: '2', displayValue: 'Entre un 20% y 70% de la jornada laboral' },
										{ value: '3', displayValue: 'La mayor parte del tiempo' }
									]
								},
								value: ''
							}
						]
					},
					leerEscribir:{
						type: 'normal',
						elements: [
							{
								label: '¿Puedes leer y escribir?',
								elementType: 'select',
								elementConfig: {
									name: 'leerEscribir',
									id: 'leerEscribir',
									options: [
										{ value: '', displayValue: 'Seleccione...', disabled: true },
										{ value: '0', displayValue: 'No, o muy poco tiempo' },
										{ value: '1', displayValue: 'Esporádicamente (Hasta un 20% de la jornada laboral)' },
										{ value: '2', displayValue: 'Entre un 20% y 70% de la jornada laboral' },
										{ value: '3', displayValue: 'La mayor parte del tiempo' }
									]
								},
								value: ''
							}
						]
					},
					situacionesNuevas: {
						type: 'normal',
						elements: [
							{
								label: '¿Te adaptas a situaciones de trabajo nuevas?',
								elementType: 'select',
								elementConfig: {
									name: 'situacionesNuevas',
									id: 'situacionesNuevas',
									options: [
										{ value: '', displayValue: 'Seleccione...', disabled: true },
										{ value: '0', displayValue: 'No, o muy poco tiempo' },
										{ value: '1', displayValue: 'Esporádicamente (Hasta un 20% de la jornada laboral)' },
										{ value: '2', displayValue: 'Entre un 20% y 70% de la jornada laboral' },
										{ value: '3', displayValue: 'La mayor parte del tiempo' }
									]
								},
								value: ''
							}
						]
					},
					trabajoEquipo: {
						type: 'normal',
						elements: [
							{
								label: '¿Te adaptas a trabajo en equipo con varias personas?',
								elementType: 'select',
								elementConfig: {
									name: 'trabajoEquipo',
									id: 'trabajoEquipo',
									options: [
										{ value: '', displayValue: 'Seleccione...', disabled: true },
										{ value: '0', displayValue: 'No, o muy poco tiempo' },
										{ value: '1', displayValue: 'Esporádicamente (Hasta un 20% de la jornada laboral)' },
										{ value: '2', displayValue: 'Entre un 20% y 70% de la jornada laboral' },
										{ value: '3', displayValue: 'La mayor parte del tiempo' }
									]
								},
								value: ''
							}
						]
					},
				}
			},
			{
				id: 3,
				name: "Preguntas (4/4)",
				fields: {
					situacionesConflicto:{
						type: 'normal',
						elements: [
							{
								label: '¿Te adaptas a situaciones tensiones y conflicto?',
								elementType: 'select',
								elementConfig: {
									name: 'situacionesConflicto',
									id: 'situacionesConflicto',
									options: [
										{ value: '', displayValue: 'Seleccione...', disabled: true },
										{ value: '0', displayValue: 'No, o muy poco tiempo' },
										{ value: '1', displayValue: 'Esporádicamente (Hasta un 20% de la jornada laboral)' },
										{ value: '2', displayValue: 'Entre un 20% y 70% de la jornada laboral' },
										{ value: '3', displayValue: 'La mayor parte del tiempo' }
									]
								},
								value: ''
							}
						]
					},
					resolverProblemas:{
						type: 'normal',
						elements: [
							{
								label: '¿Te adaptas para resolver problemas?',
								elementType: 'select',
								elementConfig: {
									name: 'resolverProblemas',
									id: 'resolverProblemas',
									options: [
										{ value: '', displayValue: 'Seleccione...', disabled: true },
										{ value: '0', displayValue: 'No, o muy poco tiempo' },
										{ value: '1', displayValue: 'Esporádicamente (Hasta un 20% de la jornada laboral)' },
										{ value: '2', displayValue: 'Entre un 20% y 70% de la jornada laboral' },
										{ value: '3', displayValue: 'La mayor parte del tiempo' }
									]
								},
								value: ''
							}
						]
					},
					tareasEstresantes: {
						type: 'normal',
						elements: [
							{
								label: '¿Te manejas para desarrollar tareas estresantes?',
								elementType: 'select',
								elementConfig: {
									name: 'tareasEstresantes',
									id: 'tareasEstresantes',
									options: [
										{ value: '', displayValue: 'Seleccione...', disabled: true },
										{ value: '0', displayValue: 'No, o muy poco tiempo' },
										{ value: '1', displayValue: 'Esporádicamente (Hasta un 20% de la jornada laboral)' },
										{ value: '2', displayValue: 'Entre un 20% y 70% de la jornada laboral' },
										{ value: '3', displayValue: 'La mayor parte del tiempo' }
									]
								},
								value: ''
							}
						]
					}
				}
			}
		]
	}  

	const formPostulante =
	{
		title: "Información postulante",
		belongsTo: "postulante",
		endpoint: "http://localhost:8080/api/postulante/:id/datos-personales",
		totalStages: 4,
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
								elementType: 'date',
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
								elementType: 'date',
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

	const formPostulanteLaboralNew =
	{
		title: "Información postulante",
		belongsTo: "postulante",
		endpoint: "http://localhost:8080/api/postulante/:id/datos-laborales",
		totalStages: 10,
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
				id: 2,
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
					autoPropio: {
						type: 'normal',
						elements: [
							{
								label: '¿Tiene auto propio?',
								elementType: 'select',
								elementConfig: {
									name: 'autoPropio',
									id: 'autoPropio',
									options: [
										{ value: '', displayValue: 'Seleccione...', disabled: true },
										{ value: 'no', displayValue: 'No' },
										{ value: 'si', displayValue: 'Sí' }
									]
								},
								value: ''
							}
						]
					},
				}
			},
			{
				id: 3,
				name: "Perfil funcional (1/6)",
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
				id: 4,
				name: "Perfil funcional (2/6)",
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
				id: 5,
				name: "Perfil Funcional (3/6)",
				fields: {
					permanecerPie:{
						type: 'normal',
						elements: [
							{
								label: '¿Puedes permanecer de pie?',
								elementType: 'select',
								elementConfig: {
									name: 'permanecerPie',
									id: 'permanecerPie',
									options: [
										{ value: '', displayValue: 'Seleccione...', disabled: true },
										{ value: '0', displayValue: 'No, o muy poco tiempo' },
										{ value: '1', displayValue: 'Esporádicamente (Hasta un 20% de la jornada laboral)' },
										{ value: '2', displayValue: 'Entre un 20% y 70% de la jornada laboral' },
										{ value: '3', displayValue: 'La mayor parte del tiempo' }
									]
								},
								value: ''
							}
						]
					},
					permanecerSentado:{
						type: 'normal',
						elements: [
							{
								label: '¿Puedes permanecer sentado?',
								elementType: 'select',
								elementConfig: {
									name: 'permanecerSentado',
									id: 'permanecerSentado',
									options: [
										{ value: '', displayValue: 'Seleccione...', disabled: true },
										{ value: '0', displayValue: 'No, o muy poco tiempo' },
										{ value: '1', displayValue: 'Esporádicamente (Hasta un 20% de la jornada laboral)' },
										{ value: '2', displayValue: 'Entre un 20% y 70% de la jornada laboral' },
										{ value: '3', displayValue: 'La mayor parte del tiempo' }
									]
								},
								value: ''
							}
						]
					},
					desplazoTrayectos: {
						type: 'normal',
						elements: [
							{
								label: '¿Puedes desplazarte en trayectos, con o sin ayuda técnica?',
								elementType: 'select',
								elementConfig: {
									name: 'desplazoTrayectos',
									id: 'desplazoTrayectos',
									options: [
										{ value: '', displayValue: 'Seleccione...', disabled: true },
										{ value: '0', displayValue: 'No, o muy poco tiempo' },
										{ value: '1', displayValue: 'Esporádicamente (Hasta un 20% de la jornada laboral)' },
										{ value: '2', displayValue: 'Entre un 20% y 70% de la jornada laboral' },
										{ value: '3', displayValue: 'La mayor parte del tiempo' }
									]
								},
								value: ''
							}
						]
					},
					diferentesPisos: {
						type: 'normal',
						elements: [
							{
								label: '¿Puedes realizar actividades en diferentes pisos?',
								elementType: 'select',
								elementConfig: {
									name: 'diferentesPisos',
									id: 'diferentesPisos',
									options: [
										{ value: '', displayValue: 'Seleccione...', disabled: true },
										{ value: '0', displayValue: 'No, o muy poco tiempo' },
										{ value: '1', displayValue: 'Esporádicamente (Hasta un 20% de la jornada laboral)' },
										{ value: '2', displayValue: 'Entre un 20% y 70% de la jornada laboral' },
										{ value: '3', displayValue: 'La mayor parte del tiempo' }
									]
								},
								value: ''
							}
						]
					},
				}
			},
			{
				id: 6,
				name: "Perfil Funcional (4/6)",
				fields: {
					diferentesAlturas:{
						type: 'normal',
						elements: [
							{
								label: '¿Puedes alcanzar o coger objetos en diferentes alturas?',
								elementType: 'select',
								elementConfig: {
									name: 'diferentesAlturas',
									id: 'diferentesAlturas',
									options: [
										{ value: '', displayValue: 'Seleccione...', disabled: true },
										{ value: '0', displayValue: 'No, o muy poco tiempo' },
										{ value: '1', displayValue: 'Esporádicamente (Hasta un 20% de la jornada laboral)' },
										{ value: '2', displayValue: 'Entre un 20% y 70% de la jornada laboral' },
										{ value: '3', displayValue: 'La mayor parte del tiempo' }
									]
								},
								value: ''
							}
						]
					},
					objetosPequeños:{
						type: 'normal',
						elements: [
							{
								label: '¿Puedes usar herramientas u objetos pequeños?',
								elementType: 'select',
								elementConfig: {
									name: 'objetosPequeños',
									id: 'objetosPequeños',
									options: [
										{ value: '', displayValue: 'Seleccione...', disabled: true },
										{ value: '0', displayValue: 'No, o muy poco tiempo' },
										{ value: '1', displayValue: 'Esporádicamente (Hasta un 20% de la jornada laboral)' },
										{ value: '2', displayValue: 'Entre un 20% y 70% de la jornada laboral' },
										{ value: '3', displayValue: 'La mayor parte del tiempo' }
									]
								},
								value: ''
							}
						]
					},
					actividadesVisual: {
						type: 'normal',
						elements: [
							{
								label: '¿Puedes realizar actividades que requieren agudeza visual corta y larga distancia?',
								elementType: 'select',
								elementConfig: {
									name: 'actividadesVisual',
									id: 'actividadesVisual',
									options: [
										{ value: '', displayValue: 'Seleccione...', disabled: true },
										{ value: '0', displayValue: 'No, o muy poco tiempo' },
										{ value: '1', displayValue: 'Esporádicamente (Hasta un 20% de la jornada laboral)' },
										{ value: '2', displayValue: 'Entre un 20% y 70% de la jornada laboral' },
										{ value: '3', displayValue: 'La mayor parte del tiempo' }
									]
								},
								value: ''
							}
						]
					},
					actividadesAuditiva: {
						type: 'normal',
						elements: [
							{
								label: '¿Puedes realizar actividades que requieren agudeza auditiva?',
								elementType: 'select',
								elementConfig: {
									name: 'actividadesAuditiva',
									id: 'actividadesAuditiva',
									options: [
										{ value: '', displayValue: 'Seleccione...', disabled: true },
										{ value: '0', displayValue: 'No, o muy poco tiempo' },
										{ value: '1', displayValue: 'Esporádicamente (Hasta un 20% de la jornada laboral)' },
										{ value: '2', displayValue: 'Entre un 20% y 70% de la jornada laboral' },
										{ value: '3', displayValue: 'La mayor parte del tiempo' }
									]
								},
								value: ''
							}
						]
					},
				}
			},
			{
				id: 7,
				name: "Perfil Funcional (5/6)",
				fields: {
					comunicacionOral:{
						type: 'normal',
						elements: [
							{
								label: '¿Puedes comunicarte de manera oral y fluida?',
								elementType: 'select',
								elementConfig: {
									name: 'comunicacionOral',
									id: 'comunicacionOral',
									options: [
										{ value: '', displayValue: 'Seleccione...', disabled: true },
										{ value: '0', displayValue: 'No, o muy poco tiempo' },
										{ value: '1', displayValue: 'Esporádicamente (Hasta un 20% de la jornada laboral)' },
										{ value: '2', displayValue: 'Entre un 20% y 70% de la jornada laboral' },
										{ value: '3', displayValue: 'La mayor parte del tiempo' }
									]
								},
								value: ''
							}
						]
					},
					leerEscribir:{
						type: 'normal',
						elements: [
							{
								label: '¿Puedes leer y escribir?',
								elementType: 'select',
								elementConfig: {
									name: 'leerEscribir',
									id: 'leerEscribir',
									options: [
										{ value: '', displayValue: 'Seleccione...', disabled: true },
										{ value: '0', displayValue: 'No, o muy poco tiempo' },
										{ value: '1', displayValue: 'Esporádicamente (Hasta un 20% de la jornada laboral)' },
										{ value: '2', displayValue: 'Entre un 20% y 70% de la jornada laboral' },
										{ value: '3', displayValue: 'La mayor parte del tiempo' }
									]
								},
								value: ''
							}
						]
					},
					situacionesNuevas: {
						type: 'normal',
						elements: [
							{
								label: '¿Te adaptas a situaciones de trabajo nuevas?',
								elementType: 'select',
								elementConfig: {
									name: 'situacionesNuevas',
									id: 'situacionesNuevas',
									options: [
										{ value: '', displayValue: 'Seleccione...', disabled: true },
										{ value: '0', displayValue: 'No, o muy poco tiempo' },
										{ value: '1', displayValue: 'Esporádicamente (Hasta un 20% de la jornada laboral)' },
										{ value: '2', displayValue: 'Entre un 20% y 70% de la jornada laboral' },
										{ value: '3', displayValue: 'La mayor parte del tiempo' }
									]
								},
								value: ''
							}
						]
					},
					trabajoEquipo: {
						type: 'normal',
						elements: [
							{
								label: '¿Te adaptas a trabajo en equipo con varias personas?',
								elementType: 'select',
								elementConfig: {
									name: 'trabajoEquipo',
									id: 'trabajoEquipo',
									options: [
										{ value: '', displayValue: 'Seleccione...', disabled: true },
										{ value: '0', displayValue: 'No, o muy poco tiempo' },
										{ value: '1', displayValue: 'Esporádicamente (Hasta un 20% de la jornada laboral)' },
										{ value: '2', displayValue: 'Entre un 20% y 70% de la jornada laboral' },
										{ value: '3', displayValue: 'La mayor parte del tiempo' }
									]
								},
								value: ''
							}
						]
					},
				}
			},
			{
				id: 8,
				name: "Perfil Funcional (6/6)",
				fields: {
					situacionesConflicto:{
						type: 'normal',
						elements: [
							{
								label: '¿Te adaptas a situaciones tensiones y conflicto?',
								elementType: 'select',
								elementConfig: {
									name: 'situacionesConflicto',
									id: 'situacionesConflicto',
									options: [
										{ value: '', displayValue: 'Seleccione...', disabled: true },
										{ value: '0', displayValue: 'No, o muy poco tiempo' },
										{ value: '1', displayValue: 'Esporádicamente (Hasta un 20% de la jornada laboral)' },
										{ value: '2', displayValue: 'Entre un 20% y 70% de la jornada laboral' },
										{ value: '3', displayValue: 'La mayor parte del tiempo' }
									]
								},
								value: ''
							}
						]
					},
					resolverProblemas:{
						type: 'normal',
						elements: [
							{
								label: '¿Te adaptas para resolver problemas?',
								elementType: 'select',
								elementConfig: {
									name: 'resolverProblemas',
									id: 'resolverProblemas',
									options: [
										{ value: '', displayValue: 'Seleccione...', disabled: true },
										{ value: '0', displayValue: 'No, o muy poco tiempo' },
										{ value: '1', displayValue: 'Esporádicamente (Hasta un 20% de la jornada laboral)' },
										{ value: '2', displayValue: 'Entre un 20% y 70% de la jornada laboral' },
										{ value: '3', displayValue: 'La mayor parte del tiempo' }
									]
								},
								value: ''
							}
						]
					},
					tareasEstresantes: {
						type: 'normal',
						elements: [
							{
								label: '¿Te manejas para desarrollar tareas estresantes?',
								elementType: 'select',
								elementConfig: {
									name: 'tareasEstresantes',
									id: 'tareasEstresantes',
									options: [
										{ value: '', displayValue: 'Seleccione...', disabled: true },
										{ value: '0', displayValue: 'No, o muy poco tiempo' },
										{ value: '1', displayValue: 'Esporádicamente (Hasta un 20% de la jornada laboral)' },
										{ value: '2', displayValue: 'Entre un 20% y 70% de la jornada laboral' },
										{ value: '3', displayValue: 'La mayor parte del tiempo' }
									]
								},
								value: ''
							}
						]
					}
				}
			},
			{
				id: 9,
				name: "Otra formación",
				fields: {
					cursos: {
						type: 'cursos',
						elements: [

						]
					}, // fields
				}
			}
		]
	}

	const formEmpresa = 
	{
		title: "Información empresa",
		belongsTo: "empresa",
		endpoint: "",
		totalStages: 1,
		stages:
		[
			{ 
				id: 0,
				name: "Datos empresa",
				fields: {
					ubicacion: {
						type: "normal",
						elements: [
							{
								label: "Ubicación",
								elementType: "input",
								elementConfig: {
									type: "text",
									placeholder: "Av. Tobalaba 417, piso 2",
									name: "ubicacion",
									id: "ubicacion"
								},
								value: ""
							}
						]
					},
					cargo: {
						type: "normal",
						elements: [
							{
								label: "Cargo",
								elementType: "input",
								elementConfig: {
									type: "text",
									placeholder: "Desarrollador PHP Jr.",
									name: "cargo",
									id: "cargo"
								},
								value: ""
							}
						]
					},
				}
			}
		]
	}

	const formCuentaUsuario =
	{
		title: "Información cuenta de usuario",
		belongsTo: "user",
		endpoint: "http://localhost:8080/api/user",
		totalStages: 1,
		stages: [
			{
				id: 0,
				name: "Mi cuenta de usuario",
				fields: {
					email: {
						type: 'normal',
						elements: [
							{
								label: 'Correo electrónico',
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
					password: {
						type: 'normal',
						elements: [
							{
								label: 'Contraseña',
								elementType: 'input',
								elementConfig: {
									type: 'password',
									placeholder: '********',
									name: 'password',
									id: 'password'
								},
								value: ''
							}
						]
					}
				}
			}
		]
	}

  return (
    <Routes
		formPostulante={formPostulante}
		formPostulanteLaboral={formPostulanteLaboralNew}
		formEmpresa={formEmpresa}
		formCuentaUsuario={formCuentaUsuario}
		formPreguntas={formPreguntas}
    />
  );
}

export default App;