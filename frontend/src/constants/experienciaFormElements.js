export const getNewTitulo = (idAppend) => [
	{
		label: 'Nombre de título',
		elementType: 'input',
		elementConfig: {
			type: 'text',
			placeholder: 'Ingeniería en informática',
			name: 'name' + idAppend,
			id: 'name' + idAppend
		},
		value: ''
	},
	{
		label: 'Nombre de institución',
		elementType: 'input',
		elementConfig: {
			type: 'text',
			placeholder: 'Universidad de Santiago de Chile',
			name: 'institucion' + idAppend,
			id: 'institucion' + idAppend
		},
		value: ''
	},
	{
		label: 'Egreso',
		elementType: 'input',
		elementConfig: {
			type: 'text',
			placeholder: '2019',
			name: 'año' + idAppend,
			id: 'año' + idAppend
		},
		value: ''
	}
]

export const getNewCurso = (idAppend) => [
	{
		label: 'Curso de capacitación',
		elementType: 'input',
		elementConfig: {
			type: 'text',
			placeholder: 'Administración pública',
			name: 'curso' + idAppend,
			id: 'curso' + idAppend
		},
		value: ''
	},
	{
		label: 'Institución donde se realizó',
		elementType: 'input',
		elementConfig: {
			type: 'text',
			placeholder: 'Universidad de Santiago de Chile',
			name: 'institucionCurso' + idAppend,
			id: 'institucionCurso' + idAppend
		},
		value: ''
	},
	{
		label: 'Fecha de inicio',
		elementType: 'input',
		elementConfig: {
			type: 'date',
			placeholder: '20/04/2010',
			name: 'fechaInicioCurso' + idAppend,
			id: 'fechaInicioCurso' + idAppend
		},
		value: new Date()
	},
	{
		label: 'Fecha de término',
		elementType: 'input',
		elementConfig: {
			type: 'date',
			placeholder: '15/06/2010',
			name: 'fechaTerminoCurso' + idAppend,
			id: 'fechaTerminoCurso' + idAppend
		},
		value: new Date()
	}
]


export const getNewExperienciaLaboral = (idAppend) => [
	{
		label: 'Empresa',
		elementType: 'input',
		elementConfig: {
			type: 'text',
			placeholder: 'AHA Inclusión',
			name: 'empresaExperienciaLaboral' + idAppend,
			id: 'empresaExperienciaLaboral' + idAppend
		},
		value: ''
	},
	{
		label: 'Fecha de inicio',
		elementType: 'input',
		elementConfig: {
			type: 'date',
			placeholder: new Date(),
			name: 'expFechaInicio' + idAppend,
			id: 'expFechaInicio' + idAppend
		},
		value: new Date()
	},
	{
		label: 'Fecha de término',
		elementType: 'input',
		elementConfig: {
			type: 'date',
			placeholder: new Date(),
			name: 'expFechaTermino' + idAppend,
			id: 'expFechaTermino' + idAppend
		},
		value: new Date()
	},
	{
		label: 'Indica tu cargo',
		elementType: 'select',
		elementConfig: {
			name: 'expArea' + idAppend,
			id: 'expArea' + idAppend,
			options: [
				{ value: '', displayValue: 'Seleccione...', disabled: true },
				{ value: '00', displayValue: 'Administración, contabilidad o finanzas' },
				{ value: '01', displayValue: 'Aduana y comercio exterior' },
				{ value: '02', displayValue: 'Abastecimiento o Logística' },
				{ value: '03', displayValue: 'Agrícola o Ganadero' },
				{ value: '04', displayValue: 'Auxiliar de Aseo o Servicios de Alimentación' },
				{ value: '05', displayValue: 'Atención al Cliente, Call Center o Telemarketing' },
				{ value: '06', displayValue: 'Ingeniería Civil y Construcción' },
				{ value: '07', displayValue: 'Comercial, Ventas o Negocios' },
				{ value: '08', displayValue: 'Comunicación, Relaciones Públicas o Institucionales' },
				{ value: '09', displayValue: 'Construcción' },
				{ value: '10', displayValue: 'Diseño' },
				{ value: '11', displayValue: 'Educación, Docencia o Investigación' },
				{ value: '12', displayValue: 'Gastronomía y Turismo' },
				{ value: '13', displayValue: 'Gerencia y Dirección General' },
				{ value: '14', displayValue: 'Ingenierías' },
				{ value: '15', displayValue: 'Legal' },
				{ value: '16', displayValue: 'Mantención de áreas verdes o jardinería' },
				{ value: '17', displayValue: 'Marketing y Publicidad' },
				{ value: '18', displayValue: 'Minería, Petróleo o Gas' },
				{ value: '19', displayValue: 'Operaciones' },
				{ value: '20', displayValue: 'Producción y Manufactura' },
				{ value: '21', displayValue: 'Recursos Humanos o Formación' },
				{ value: '22', displayValue: 'Salud, Medicina y Farmacia' },
				{ value: '23', displayValue: 'Secretaría y Recepción' },
				{ value: '24', displayValue: 'Seguridad o Vigilancia' },
				{ value: '25', displayValue: 'Tecnología, Informática, Sistemas' },
				{ value: '26', displayValue: 'Textil y Confección' },
				{ value: '27', displayValue: 'Transporte' }
			]
		},
		value: ''
	}
]