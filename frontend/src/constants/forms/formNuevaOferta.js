import { FORM_NUEVA_OFERTA } from '../index';
//Nueva oferta por parte de usuario empresa - datos de discapacidad a solicitar
export const formNuevaOferta =
	{
		id: 2,
		title: FORM_NUEVA_OFERTA,
		belongsTo: "empresa",
		endpoint: "",
		totalStages: 7,
		stages: [ 
		{
			id: 0,
			name: "Descripción de la oferta",
			fields: {
				name: {
					type: 'normal',
					elements: [
						{
							label: 'Nombre trabajo',
							elementType: 'input',
							elementConfig: {
								type: 'text',
								placeholder: 'Vendedor',
								name: 'name',
								id: 'name'
							},
							subtext: '',
							value: ''
						}
					]
				},
				description: {
					type: 'normal',
					elements: [
						{
							label: 'Indique una descripción de su oferta',
							elementType: 'textarea',
							elementConfig:{
								name: 'description',
								id: 'description'
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
			name: "Accesibilidad",
			fields: {
				sillaDeRuedas: {
					type: 'normal',
					elements: [
						{
							label: '¿Tienes acceso para silla de ruedas?',
							elementType: 'select',
							elementConfig: {
								name: 'sillaDeRuedas',
								id: 'sillaDeRuedas',
								options: [
									{ value: '', displayValue: 'Seleccione...', disabled: true },
									{ value: 'true', displayValue: 'Si' },
									{ value: 'false', displayValue: 'No' }
								]
							},
							subtext: '',
							value: ''
						}
					]
				},
				bañoAdaptado: {
					type: 'normal',
					elements: [
						{
							label: '¿Tienes baño adaptado?',
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
							subtext: '',
							value: ''
						}
					]
				}
			}
		},
		{
			id: 2,
			name: "Exigencia física (1/3)",
			fields: {
				permanecerPie: {
					type: 'normal',
					elements: [
						{
							label: '¿Cuánto requieres que el candidato permanezca de pie?',
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
							subtext: '',
							value: ''
						}
					]
				},
				permanecerSentado: {
					type: 'normal',
					elements: [
						{
							label: '¿Cuánto requieres que el candidato permanezca sentado?',
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
							subtext: '',
							value: ''
						}
					]
				},
				desplazoTrayectos: {
					type: 'normal',
					elements: [
						{
							label: '¿Cuánto requieres que el candidato pueda desplazarse, con o sin ayuda?',
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
							subtext: '',
							value: ''
						}
					]
				},
				diferentesPisos: {
					type: 'normal',
					elements: [
						{
							label: '¿Cuánto requieres que el candidato pueda desplazarse entre diferentes pisos?',
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
							subtext: '',
							value: ''
						}
					]
									},
									diferentesAlturas: {
					type: 'normal',
											elements: [
						{
							label: '¿Cuánto requieres que el candidato pueda acceder a diferentes alturas?',
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
							subtext: '',
							value: ''
						}
					]
									}
							}
			},
			{
							id: 3,
							name: "Exigencia física (2/3)",
							fields: {
									objetosPequeños: {
					type: 'normal',
					elements: [
						{
							label: '¿Cuánto requieres que el candidato maneje objetos pequeños?',
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
							subtext: '',
							value: ''
						}
					]
									},
									actividadesVisual: {
					type: 'normal',
					elements: [
						{
							label: '¿Cuánto requieres que el candidato pueda realizar actividades de agudeza visual?',
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
							subtext: '',
							value: ''
						}
					]
									},
									actividadesAuditiva: {
											type: 'normal',
					elements: [
						{
							label: '¿Cuánto requieres que el candidato pueda realizar actividades de agudeza auditiva?',
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
							subtext: '',
							value: ''
						}
					]
									},
									comunicacionOral: {
											type: 'normal',
					elements: [
						{
							label: '¿Cuánto requieres que el candidato pueda comunicarse de manera oral?',
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
							subtext: '',
							value: ''
						}
					]
									},
									leerEscribir: {
											type: 'normal',
					elements: [
						{
							label: '¿Cuánto requieres que el candidato pueda leer y escribir?',
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
							subtext: '',
							value: ''
						}
					]
									}
							}
					},
					{
							id: 4,
							name: "Exigencia física (3/3)",
							fields: {
									situacionesNuevas: {
											type: 'normal',
					elements: [
						{
							label: '¿Cuánto requieres que el candidato pueda acomodarse a situaciones nuevas?',
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
							subtext: '',
							value: ''
						}
					]
									},
									trabajoEquipo: {
											type: 'normal',
					elements: [
						{
							label: '¿Cuánto requieres que el candidato pueda acomodarse a trabajo en equipo?',
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
							subtext: '',
							value: ''
						}
					]
									},
									situacionesConflicto: {
											type: 'normal',
					elements: [
						{
							label: '¿Cuánto requieres que el candidato se adapte a situaciones de conflicto y tensión?',
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
							subtext: '',
							value: ''
						}
					]
									},
									resolverProblemas: {
											type: 'normal',
					elements: [
						{
							label: '¿Cuánto requieres que el candidato pueda resolver problemas?',
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
							subtext: '',
							value: ''
						}
					]
									},
									tareasEstresantes: {
											type: 'normal',
					elements: [
						{
							label: '¿Cuánto requieres que el candidato pueda realizar tareas estresantes?',
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
							subtext: '',
							value: ''
						}
					]
									}
							}
					},
					{
							id: 5,
							name: "Exigencias laborales",
							fields: {
									licencia: {
					type: 'normal',
					elements: [
						{
							label: '¿Qué clase de licencia requiere tener el candidato para el cargo?',
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
							subtext: '',
							value: ''
						}
					]
				},
									nivelEducacional: {
					type: 'normal',
					elements: [
						{
							label: '¿Qué nivel educacional mínimo debe tener el candidato?',
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
							subtext: '',
							value: ''
						}
					]
				},
				disponibilidad: {
					type: 'normal',
					elements: [
						{
							label: 'Disponibilidad deseada',
							elementType: 'select',
							elementConfig: {
								name: 'disponibilidad',
								id: 'disponibilidad',
								options: [
									{ value: '', displayValue: 'Seleccione...', disabled: true },
									{ value: '0', displayValue: 'Lunes a Viernes' },
									{ value: '1', displayValue: 'Sábados, Domingos y festivos' },
									{ value: '2', displayValue: 'Cualquier día' }
								]
							},
							subtext: '',
							value: ''
						}
					]
				},
				rentaEstimada: {
					type: 'normal',
					elements: [
						{
							label: 'Renta estimada a ofrecer',
							elementType: 'select',
							elementConfig: {
								name: 'rentaEstimada',
								id: 'rentaEstimada',
								options: [
									{ value: '', displayValue: 'Seleccione...', disabled: true },
									{ value: '0', displayValue: 'Hasta 301.000' },
									{ value: '1', displayValue: '301.0001 a 400.000' },
									{ value: '2', displayValue: '400.001 a 550.000' },
									{ value: '3', displayValue: '550.001 a 650.000' },
									{ value: '4', displayValue: '650.001 a 800.000' },
									{ value: '5', displayValue: '800.001 a 1.000.000' },
									{ value: '6', displayValue: '1.000.001 o más' }
								]
							},
							subtext: '',
							value: ''
						}
					]
				}
			}
		},
		{
			id: 6,
			name: "Experiencia laboral exigida",
			fields: {
				experiencias: {
					type: 'multi',
					elements: []
				}
			}
		},
			]
	}
;