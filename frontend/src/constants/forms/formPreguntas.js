export const formPreguntas = 
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
;