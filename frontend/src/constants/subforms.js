export const NEW_TITULO = [
	{
		label: 'Nombre de título',
		elementType: 'input',
		elementConfig: {
			type: 'text',
			placeholder: 'Ingeniería en informática',
			name: 'name',
			id: 'name'
		},
		value: ''
	},
	{
		label: 'Nombre de institución',
		elementType: 'input',
		elementConfig: {
			type: 'text',
			placeholder: 'Universidad de Santiago de Chile',
			name: 'institucion',
			id: 'institucion'
		},
		value: ''
	},
	{
		label: 'Egreso',
		elementType: 'input',
		elementConfig: {
			type: 'text',
			placeholder: '2019',
			name: 'año',
			id: 'año'
		},
		value: ''
	}
]

export const NEW_CURSO = [
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
	},
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
	},
	{
		label: 'Fecha de inicio',
		elementType: 'input',
		elementConfig: {
			type: 'date',
			placeholder: '20/04/2010',
			name: 'fechaInicioCurso',
			id: 'fechaInicioCurso'
		},
		value: new Date()
	},
	{
		label: 'Fecha de término',
		elementType: 'input',
		elementConfig: {
			type: 'date',
			placeholder: '15/06/2010',
			name: 'fechaTerminoCurso',
			id: 'fechaTerminoCurso'
		},
		value: new Date()
	}
]


export const NEW_EXPERIENCIA_LABORAL = [
	{
		label: 'Empresa',
		elementType: 'input',
		elementConfig: {
			type: 'text',
			placeholder: 'AHA Inclusión',
			name: 'empresa',
			id: 'empresa'
		},
		value: ''
	},
	{
		label: 'Fecha de inicio',
		elementType: 'input',
		elementConfig: {
			type: 'date',
			placeholder: new Date(),
			name: 'fechaInicio',
			id: 'fechaInicio'
		},
		value: new Date()
	},
	{
		label: 'Fecha de término',
		elementType: 'input',
		elementConfig: {
			type: 'date',
			placeholder: new Date(),
			name: 'fechaFin',
			id: 'fechaFin'
		},
		value: new Date()
	},
	{
		label: 'Cargo',
		elementType: 'input',
		elementConfig: {
			type: 'text',
			placeholder: 'Vendedor/a',
			name: 'cargo',
			id: 'cargo',
		},
		value: ''
	},
	{
		label: 'Indica el área de la empresa',
		elementType: 'select',
		elementConfig: {
			name: 'area',
			id: 'area',
			options: [
				{ value: '', displayValue: 'Seleccione...', disabled: true },
				{ value: 0, displayValue: 'Administración, contabilidad o finanzas' },
				{ value: 1, displayValue: 'Aduana y comercio exterior' },
				{ value: 2, displayValue: 'Abastecimiento o Logística' },
				{ value: 3, displayValue: 'Agrícola o Ganadero' },
				{ value: 4, displayValue: 'Auxiliar de Aseo o Servicios de Alimentación' },
				{ value: 5, displayValue: 'Atención al Cliente, Call Center o Telemarketing' },
				{ value: 6, displayValue: 'Ingeniería Civil y Construcción' },
				{ value: 7, displayValue: 'Comercial, Ventas o Negocios' },
				{ value: 8, displayValue: 'Comunicación, Relaciones Públicas o Institucionales' },
				{ value: 9, displayValue: 'Construcción' },
				{ value: 10, displayValue: 'Diseño' },
				{ value: 11, displayValue: 'Educación, Docencia o Investigación' },
				{ value: 12, displayValue: 'Gastronomía y Turismo' },
				{ value: 13, displayValue: 'Gerencia y Dirección General' },
				{ value: 14, displayValue: 'Ingenierías' },
				{ value: 15, displayValue: 'Legal' },
				{ value: 16, displayValue: 'Mantención de áreas verdes o jardinería' },
				{ value: 17, displayValue: 'Marketing y Publicidad' },
				{ value: 18, displayValue: 'Minería, Petróleo o Gas' },
				{ value: 19, displayValue: 'Operaciones' },
				{ value: 20, displayValue: 'Producción y Manufactura' },
				{ value: 21, displayValue: 'Recursos Humanos o Formación' },
				{ value: 22, displayValue: 'Salud, Medicina y Farmacia' },
				{ value: 23, displayValue: 'Secretaría y Recepción' },
				{ value: 24, displayValue: 'Seguridad o Vigilancia' },
				{ value: 25, displayValue: 'Tecnología, Informática, Sistemas' },
				{ value: 26, displayValue: 'Textil y Confección' },
				{ value: 27, displayValue: 'Transporte' }
			]
		},
		value: ''
	}
]