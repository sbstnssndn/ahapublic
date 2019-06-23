import React, { Component } from 'react';
import Stage from './Stage/Stage';
import axios from 'axios';
import Stepper from './Stepper/Stepper';
import StageControls from './StageControls/StageControls';
import Card from 'react-bootstrap/Card';
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';


class MasterForm extends Component {
  
  state = {
		currentStage: 0,
		formData: '',
		missing: false,
	}

	handleValidation = (event, inputIdentifier, element) => {
	 	const updatedForm = {
			...this.props.formConfig
		}
		const updatedStages = {
			...updatedForm.stages
		}
		const updatedCurrentStage = {
			...updatedStages[this.state.currentStage]
		}
		const updatedStageFields = {
			...updatedCurrentStage.fields
		}
		// updatedFieldElements es un objeto con keys numéricas para cada elemento del grupoFormulario
		const updatedFieldElements = {
			...updatedStageFields[inputIdentifier].elements
		}

		// clonar el array elements
		const elementsArray = [];
		for (let elem in updatedFieldElements) {
			elementsArray.push({
				...updatedFieldElements[elem]
			})
		}

		for (let elem in elementsArray) {
			console.log(elementsArray[elem].elementConfig.id)
			if(elementsArray[elem].elementConfig.id === element) {

				elementsArray[elem].subtext = ''
				elementsArray[elem].class = 'form-control'
				this.setState({missing: false})

				const singleField = event.target.value
				let len = singleField.length

				switch(element){
					case('rut'):
						let temp = ''
						let rut = singleField

						if (len < 2){
							elementsArray[elem].subtext = 'Rut incorrecto'
							elementsArray[elem].class = 'form-control has-error'
							this.setState({missing: true})
							break;
						}

						for (let i=0; i<len; i++){
							if (rut.charAt(i) != ' '
								&& rut.charAt(i) != '.'
								&& rut.charAt(i) != '-'){
									temp = temp + rut.charAt(i)
								}
						}

						len = temp.length
						rut = temp

						if (len > 2)
							rut = temp.substring(0, len-1)
						else
							rut = temp.charAt(0)

						let verificador = temp.charAt(len-1)

						if (rut == null || verificador == null){
							elementsArray[elem].subtext = 'Rut incorrecto'
							elementsArray[elem].class = 'form-control has-error'
							this.setState({missing: true})
							break;
						}

						let sum = 0
						let mul = 2

						for (let i=rut.length-1; i>=0; i--){
							sum = sum + rut.charAt(i) * mul

							if (mul == 7)
								mul = 2
							else
								mul++
						}

						const res = sum % 11
						let dvr = '0'

						if (res == 1)
							dvr = 'k'
						else if (res == 0)
							dvr = '0'
						else {
							const dvi = 11-res
							dvr = dvi + ''
						}

						if (dvr != verificador.toLowerCase()) {
							elementsArray[elem].subtext = 'Rut incorrecto'
							elementsArray[elem].class = 'form-control has-error'
							this.setState({missing: true})

							break;
						}
						console.log('Rut correcto')
						break;

					case('email'):
						const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
						const result = regex.test(String(singleField).toLowerCase())

						console.log(result)

						if (!result){
							elementsArray[elem].subtext = 'Email incorrecto'
							this.setState({missing: true})
							break;
						}
						else
							this.setState({missing: false})
						break;
					default:
						if (len>255){
							elementsArray[elem].subtext = 'El valor ingresado supera la cantidad máxima permitida'
						}
				}
				}

				updatedForm.stages[this.state.currentStage].fields[inputIdentifier].elements[elem] = elementsArray[elem];
			}		

			this.setState({form: updatedForm});		
	}

	// handleChange(event, firstName)
  handleChange = (event, inputIdentifier, element, elementIndentifier) => {
	 	const updatedForm = {
			...this.props.formConfig
		}
		const updatedStages = {
			...updatedForm.stages
		}
		const updatedCurrentStage = {
			...updatedStages[this.state.currentStage]
		}
		const updatedStageFields = {
			...updatedCurrentStage.fields
		}
		// updatedFieldElements es un objeto con keys numéricas para cada elemento del grupoFormulario
		const updatedFieldElements = {
			...updatedStageFields[inputIdentifier].elements
		}

		// clonar el array elements
		const elementsArray = [];
		for (let elem in updatedFieldElements) {
			elementsArray.push({
				...updatedFieldElements[elem]
			})
		}

		for (let elem in elementsArray) {
			console.log(elementsArray[elem].elementConfig.id)
			if(elementsArray[elem].elementConfig.id === element) {
				if (elementIndentifier === 'date'){
					elementsArray[elem].value = event
				}
				else {
					elementsArray[elem].value = event.target.value;
				}
				updatedForm.stages[this.state.currentStage].fields[inputIdentifier].elements[elem] = elementsArray[elem];
			}		
			
		}
		this.setState({
      form: updatedForm
    });

		// para cada elemento del form group, capturar su value y modificarlo

		
		/* objeto clonado para no mutar el estado al cambiar "value"
		updatedFormElement = {
			"elementType": "input",
			"elementConfig": {
				"type": "text",
				"placeholder": "Juan Alberto"
			},
			"value": "",
			"rules": {
				"required": true
			},
			"valid": false
			}
		*/

		/*
		updatedFormElement.value = event.target.value;
		// guardar en el clon del form original, el nuevo elemento del formulario
		updatedForm.stages[this.state.currentStage].fields[inputIdentifier] = updatedFormElement;

		console.log(event.target.selectedOptions);
		
    this.setState({
      form: updatedForm
    });*/
	}

	componentDidMount() {
		console.log('didmount')
		
	};

  handleSubmit = (event, method) => {
    event.preventDefault();
    
		// extraer los datos de cada form, dentro de cada etapa
		let payload = Object.create(null);
    for (let index in this.props.formConfig.stages) {
      for (let formElementIdentifier in this.props.formConfig.stages[index].fields) {
				// poblar objeto con todos los datos del formulario
				payload[formElementIdentifier] = this.props.formConfig.stages[index].fields[formElementIdentifier].value;
      }
		}
		console.log(payload)
		console.log('metodo: '+method)
		//window.location.href = "http://localhost:3000/";
		
		switch( method.toLowerCase() ) {
			case 'get':
				axios.get(this.props.formConfig.endpoint)
					.then(response => {
						console.log(response);
						this.setState({formData: response.data});
					})
					.catch(function(error){
						console.log(error);
					})
				break;
			case 'post':
				axios.post(this.props.formConfig.endpoint, payload)
					.then(response => {
						console.log(response);
					})
					.catch(function(error){
						console.log(error);
					})
				break;
			default:
				console.log("Debes introducir un método válido");
				break;
		}
  }
	
	_goto = (stage) => {
    this.setState({
      currentStage: stage
    });
  }

  _next = () => {
    let currentStage = this.state.currentStage;
    let lastStage = this.props.formConfig.totalStages - 1;

    currentStage = currentStage >= lastStage - 1 ? lastStage : currentStage + 1;
    this.setState({
      currentStage: currentStage
    });
  }

  _prev = () => {
      let currentStage = this.state.currentStage;
      let firstStage = 0;

      currentStage = currentStage <= firstStage ? firstStage : currentStage - 1;
      this.setState({
        currentStage: currentStage
      });
  }
	
	addCurso = (inputIdentifier) => {
		const updatedForm = {
			...this.props.formConfig
		}
		const updatedStages = {
			...updatedForm.stages
		}
		const updatedCurrentStage = {
			...updatedStages[this.state.currentStage]
		}
		const updatedStageFields = {
			...updatedCurrentStage.fields
		}
		// updatedFieldElements es un objeto con keys numéricas para cada elemento del grupoFormulario
		const updatedFieldElements = {
			...updatedStageFields[inputIdentifier].elements
		}

		// clonar el array elements
		const elementsArray = [];
		for (let elem in updatedFieldElements) {
			elementsArray.push({
				...updatedFieldElements[elem]
			})
		}

		let idAppend = updatedForm.stages[this.state.currentStage].fields[inputIdentifier].elements.length/4;
		let newCurso = [
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

		console.log(elementsArray)

		const newElementsArray = elementsArray.concat(newCurso);

		console.log(newElementsArray)

		updatedForm.stages[this.state.currentStage].fields[inputIdentifier].elements = newElementsArray;

		

		this.setState({
      form: updatedForm
    });
	}

	addExperiencia = (inputIdentifier) => {
		const updatedForm = {
			...this.props.formConfig
		}
		const updatedStages = {
			...updatedForm.stages
		}
		const updatedCurrentStage = {
			...updatedStages[this.state.currentStage]
		}
		const updatedStageFields = {
			...updatedCurrentStage.fields
		}
		// updatedFieldElements es un objeto con keys numéricas para cada elemento del grupoFormulario
		const updatedFieldElements = {
			...updatedStageFields[inputIdentifier].elements
		}

		// clonar el array elements
		const elementsArray = [];
		for (let elem in updatedFieldElements) {
			elementsArray.push({
				...updatedFieldElements[elem]
			})
		}

		let idAppend = updatedForm.stages[this.state.currentStage].fields[inputIdentifier].elements.length/4;
		let newExperiencia = [
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

		console.log(elementsArray)

		const newElementsArray = elementsArray.concat(newExperiencia);

		console.log(newElementsArray)

		updatedForm.stages[this.state.currentStage].fields[inputIdentifier].elements = newElementsArray;

		

		this.setState({
      form: updatedForm
    });
	}
  
  render () {

		let stages = (
			this.props.formConfig.stages.map(stage => {
				return <Stage
					key={stage.id}
					title={stage.name}
					id={stage.id}
					// stageFields = { apellidos: {elementConfig: {}, elementType: '', ...}, nombres: {}, ... }
					stageFields={stage.fields}
					currentStage={this.state.currentStage}
					totalStages={this.props.formConfig.totalStages}
					handleValidation={this.handleValidation}
					handleChange={this.handleChange}
					addExperiencia={this.addExperiencia}
					addCurso={this.addCurso}
					/>
				})
		);

		let stageTitlesArray = [];
		for (let stage in this.props.formConfig.stages) {
			stageTitlesArray.push(this.props.formConfig.stages[stage].name);
		}

    return (
			<Card className="mb-4">
				<Card.Header className="px-2">
					<Stepper
							currentStage={this.state.currentStage}
							totalStages={this.props.formConfig.totalStages}
							stageTitles={stageTitlesArray}
							goto={this._goto}
						/>
				</Card.Header>
				<Card.Body>
					<form onSubmit={(event) => this.handleSubmit(event, "POST")}>
						{ stages }
						<StageControls
							totalStages={this.props.formConfig.totalStages}
							currentStage={this.state.currentStage}
							_prev={this._prev}
							_next={this._next}
						/>
					</form>
				</Card.Body>
			</Card>
    );
  }
}

export default MasterForm;