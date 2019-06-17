export default 
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
;