import React, { Component } from 'react';
import Stage from './Stage/Stage';
import Stepper from './Stepper/Stepper';
import StageControls from './StageControls/StageControls';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import { fieldFormValidation } from '../../util/ValidationUtils';
//import { rutFormat } from '../../util/FormatUtils.js';
import { generateSubForm, getComunas, copy } from '../../util/common';
import  {
	FORM_CUENTA_USUARIO,
	FORM_EMPRESA,
	FORM_NUEVA_OFERTA,
	FORM_POSTULANTE,
	FORM_POSTULANTE_LABORAL,
	USER_TYPE_AHA,
	USER_TYPE_POSTULANTE,
	USER_TYPE_EMPRESA
} from '../../constants';
import { NEW_CURSO, NEW_EXPERIENCIA_LABORAL, NEW_TITULO } from '../../constants/subforms';
import {
	get,
	updatePerfilCandidato,
	updatePerfilLaboral,
	updatePerfilEmpresa,
	createOferta,
	addExperiencia,
	addCurso,
	addTitulo,
	getDatosPostulante,
	getDatosEmpresa,
	getUser,
} from '../../util/APIUtils';
import { formPostulante } from '../../constants/forms/formPostulante';
import { formPostulanteLaboral } from '../../constants/forms/formPostulanteLaboral';
import { formEmpresa } from '../../constants/forms/formEmpresa';
import { formNuevaOferta} from '../../constants/forms/formNuevaOferta';
import { formCuentaUsuario } from '../../constants/forms/formCuentaUsuario';
//import '../../custom.css'

class MasterForm extends Component {
  
  state = {
    currentStage: 0,
    formData: null,
    missing: [],
		activeUserID: null,
		alert: { show: false, message: null, type: null },
		form: '',
		loading: true,
		datosFormulario: null,
		loadedUser: null
	}
	
	cloneStateElementsArray = (inputIdentifier) => {
		if (!inputIdentifier || this.state.loading) {
			return false;
		}
		const updatedForm = {
      ...this.state.form
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
		console.log("inputIdentifier: ", inputIdentifier)
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
		
		return { 
			updatedForm,
			updatedStages,
			updatedCurrentStage,
			updatedStageFields,
			updatedFieldElements,
			elementsArray
		}
	}

  handleDismiss = () => {
		this.setState({
      alert: { 
				show: false,
				message: null,
				type: null,
			}
    });
	}

  handleAlert = (msg, type) => {
    this.setState({
      alert: {
				show: true,
				message: msg,
				type: type,
			}
    });

    setTimeout(() => {
      this.handleDismiss()
    }, 5000)
  }

  handleValidation = (event, inputIdentifier, element) => {
    const clone = {...this.cloneStateElementsArray(inputIdentifier)}

    let missing = this.state.missing

    this.handleDismiss()

    for (let elem in clone.elementsArray) {
      //console.log(clone.elementsArray[elem].elementConfig.id)
      if(clone.elementsArray[elem].elementConfig.id === element) {

        const resp = fieldFormValidation(missing, element, event.target.value)

        missing = resp.missing
        clone.elementsArray[elem].subtext = resp.subtext
      }

      clone.updatedForm.stages[this.state.currentStage].fields[inputIdentifier].elements[elem] = clone.elementsArray[elem];
    } 

    //console.log('missing: {'+missing+'}')

    this.setState({
      form: clone.updatedForm,
      missing: missing,
    });   
  }

  // handleChange(event, firstName)
  handleChange = (event, inputIdentifier, element, elementIndentifier) => {
    const clone = {...this.cloneStateElementsArray(inputIdentifier)}

    for (let elem in clone.elementsArray) {
      //console.log(elementsArray[elem].elementConfig.id)
      if(clone.elementsArray[elem].elementConfig.id === element) {
        if (element === 'region') {
					clone.updatedForm.stages[this.state.currentStage].fields['comuna'] =  getComunas(event.target.value);
        }

        if (elementIndentifier === 'date'){
          clone.elementsArray[elem].value = event
        }
        else {
          clone.elementsArray[elem].value = event.target.value;
        }
        clone.updatedForm.stages[this.state.currentStage].fields[inputIdentifier].elements[elem] = clone.elementsArray[elem];
      }   
		}
		
    this.setState({
      form: clone.updatedForm
    });

    //console.log('form:')
    //console.log(this.state.form)
	}
	
	addExperienciasHandler = (userId, elements) => {
		if (elements.length < 5 || elements.length % 5 !== 0) {
			return;
		}
		console.log("addExperienciasHandler elements: ", elements);
		/* Para cada elemento, crear un objeto experiencia y enviarlo */
		for (let element = 0; element < elements.length; element=element+5) {
			let elementObj = {
				empresa: elements[element].value,
				fechaInicio: elements[element+1].value,
				fechaFin: elements[element+2].value,
				cargo: elements[element+3].value,
				area: elements[element+4].value
			}
			addExperiencia(userId, elementObj)
				.then(response => {
					console.log("RESPONSE addExperiencia: ", response);
				}).catch(error => {
					console.log("ERROR addExperiencia: ", error);
				});
		}
	}

	addCursosHandler = (userId, elements) => {
		if (elements.length % 4 !== 0) {
			return;
		}
		console.log("addCursosHandler elements: ", elements);
		/* Para cada elemento, crear un objeto curso y enviarlo */
		let cursosArray = [];
		for (let element = 0; element < elements.length; element=element+4) {
			let elementObj = {
				name: elements[element].value,
				institucion: elements[element+1].value,
				fechaInicio: elements[element+2].value,
				fechaFin: elements[element+3].value
			}
			cursosArray.push(elementObj);
			console.log("Agregando curso:", elementObj)
		}
		addCurso(userId, cursosArray)
			.then(response => {
				console.log("RESPONSE addCurso: ", response);
			}).catch(error => {
				console.log("ERROR addCurso: ", error);
			});
	}

	addTitulosHandler = (userId, elements) => {
		if (elements.length < 3 || elements.length % 3 !== 0) {
			return;
		}
		console.log("addCursosHandler elements: ", elements);
		/* Para cada elemento, crear un objeto curso y enviarlo */
		for (let element = 0; element < elements.length; element=element+3) {
			let elementObj = {
				name: elements[element].value,
				institucion: elements[element+1].value,
				anho: elements[element+2].value,
			}
			addTitulo(userId, elementObj)
				.then(response => {
					console.log("RESPONSE addTitulo: ", response);
				}).catch(error => {
					console.log("ERROR addTitulo: ", error);
				});
		}
	}

  handleSubmit = (event) => {
		event.preventDefault();
		console.log("loadedUser desde handleSubmit: ", this.state.loadedUser)
		let loadedUser = this.state.loadedUser;
    // Si el array missing esta vacio, significa que no hay campos incorrectos
    // En ese caso, "!this.state.missing.length" devuelve true
    if (this.state.missing.length === 0) {

			/* submit de todos los elementos del formulario */
			const updatedForm = {
				...this.state.form
			}
			const updatedStages = {
				...updatedForm.stages
			}

			let datos = {};
			let direccion = {};
			let experienciasEmpresa = [];
			
			for (let stage in updatedStages) {
				const updatedStageFields = {...updatedStages[stage].fields};
				
				for (let field in updatedStageFields) {
					//console.log("FIELD: ", field)
					const fieldObj = {...updatedStageFields[field]};
					const elements = [...fieldObj.elements];
					//console.log("ELEMS: ", elements)
					if (fieldObj.type === "experiencias") {
						this.addExperienciasHandler(loadedUser.id, elements);
					} else if (fieldObj.type === "cursos") {
						console.log("cursos elements: ", elements);
						this.addCursosHandler(loadedUser.id, elements)
					} else if (fieldObj.type === "titulos") {
						this.addTitulosHandler(loadedUser.id, elements)
					} else if (fieldObj.type === "experienciasEmpresa") {
						if (elements.length < 2 || elements.length % 2 !== 0) {
							continue;
						}
						console.log("experienciasEmpresa elements: ", elements);
						/* Para cada elemento, crear una experiencia exigida */
						for (let element = 0; element < elements.length; element=element+2) {
							let elementObj = {
								area: elements[element].value,
								duracion: elements[element+1].value
							}
							experienciasEmpresa.push(elementObj);
						}
						continue;
						//console.log("experienciasEmpresa: ", experienciasEmpresa)
					}

					for (let element in elements) {
						//console.log(elements[element])
						let id = elements[element].elementConfig.id;
						let value = elements[element].value;
						if (id === "calle" || id === "comuna" || id === "region") {
							direccion[ `${[id]}` ] = value;
							continue;
						}
						//console.log(id, typeof(elements[element].value))
						datos[`${[id]}`] = value;
					}
				}
			}
			
			if (Object.keys(direccion).length > 0) {
				datos["direccion"] = {...direccion};
			}
			

			/* TODO: enviar los datos al endpoint correcto */
			//console.log("USER: ", currentUser)
			switch (this.state.form.title) {
				case FORM_CUENTA_USUARIO:
					//console.log("ENDPOINT CUENTA USUARIO");
					//console.log(this.props.match)
					break;
				case FORM_POSTULANTE:
					updatePerfilCandidato(loadedUser.id, datos)
					.then(response => {
						//console.log("RESPONSE updatePerfilCandidato: ", response);
            this.handleAlert('Datos personales guardados.','success');
					}).catch(error => {
						this.handleAlert('Error al guardar los datos.','danger');
						//console.log("ERROR updatePerfilCandidato: ", error);
					});
					break;
				case FORM_POSTULANTE_LABORAL:
					//console.log(datos)
					//console.log("ID: ", this.state.activeUserID)
					updatePerfilLaboral(loadedUser.id, datos)
					.then(response => {
						//console.log("RESPONSE updatePerfilLaboral: ", response);
            this.handleAlert('Datos laborales guardados.','success');
					}).catch(error => {
						this.handleAlert('Error al guardar los datos.','danger');
						//console.log("ERROR updatePerfilLaboral: ", error);
					});
					break;
				case FORM_EMPRESA:
					updatePerfilEmpresa(loadedUser.id, datos)
					.then(response => {
						//console.log("RESPONSE updatePerfilEmpresa: ", response);
            this.handleAlert('Datos de empresa guardados.','success');
					}).catch(error => {
						this.handleAlert('Error al guardar los datos.','danger')
						//console.log("ERROR updatePerfilEmpresa: ", error);
					});
					break;
				case FORM_NUEVA_OFERTA:
					datos["experiencias"] = experienciasEmpresa;
					console.log("DATOS FORM_NUEVA_OFERTA: ", datos)
					createOferta(loadedUser.id, datos)
					.then(response => {
						console.log("RESPONSE createOferta: ", response);
            this.handleAlert('Oferta guardada','success')
						window.location.reload();
					}).catch(error => {
						console.log("ERROR createOferta: ", error);
					});
					break;
				default:
					break;
			}
     
    } else {
      console.log('Submit denegado');
      this.handleAlert("Hay campos con errores, no se ha guardado", "danger")
		}
  }
  
  _goto = (stage) => {
    this.setState({
      currentStage: stage
    });
  }

  _next = () => {
    let currentStage = this.state.currentStage;
    let lastStage = this.state.form.totalStages - 1;

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

	addSubForm = (inputIdentifier, subForm) => {
		//console.log(subForm);
		const clone = {...this.cloneStateElementsArray(inputIdentifier)}
		const subFormSize = subForm.length;
		const stateFormSize = clone.updatedForm.stages[this.state.currentStage].fields[inputIdentifier].elements.length;
		const newElementId = stateFormSize/subFormSize;
		
		let updatedSubForm = generateSubForm(newElementId, subForm);
		//console.log(updatedSubForm);
		
    const newElementsArray = clone.elementsArray.concat(updatedSubForm);
		clone.updatedForm.stages[this.state.currentStage].fields[inputIdentifier].elements = newElementsArray;
		console.log(clone.updatedForm.stages[this.state.currentStage].fields[inputIdentifier].elements);

    this.setState({
      form: clone.updatedForm
    });
	}
  
  deleteForm = (inputIdentifier, idForm, NumberOfFieldsToDelete) => {
		const clone = {...this.cloneStateElementsArray(inputIdentifier)}
		// eliminar los elements del form que corresponden
    // desde el id de la experiencia, trabajo o curso, 
    // eliminar NumberOfFieldsToDelete número de campos
		clone.elementsArray.splice(idForm, NumberOfFieldsToDelete);

    let contadorId = -1;
    for (let element=0; element < clone.elementsArray.length; element++) {
      if (element % NumberOfFieldsToDelete === 0) {
				contadorId++;
			}
			
			let id = clone.elementsArray[element].elementConfig.id;
			let newId = id.replace(/\d+/g, '');
			let name = clone.elementsArray[element].elementConfig.name;
			let newName = name.replace(/\d+/g, '');

			clone.elementsArray[element].elementConfig.id = newId + contadorId;
			clone.elementsArray[element].elementConfig.name = newName + contadorId;
		}
		
    clone.updatedForm.stages[this.state.currentStage].fields[inputIdentifier].elements = clone.elementsArray;

    this.setState({
      form: clone.updatedForm
    });
	}

  fetchData = async (endpoint) => {
    let formData = null;

  	await get(endpoint)
  	.then(response => {
  		formData = response;
  		console.log("RESPONSE get: ", response);
  	}).catch(error => {
  		console.log("ERROR get: ", error);
  	});

    for (let i=0; i<this.state.form.totalStages; i++)
      this.formatData(formData, i)
  }
	
	formatData = (formData, currentStage) => {
    const updatedForm = {
      ...this.state.form
    }
    const updatedStages = {
      ...updatedForm.stages
    }
    const updatedCurrentStage = {
      ...updatedStages[currentStage]
    }
    const updatedStageFields = {
      ...updatedCurrentStage.fields
    }

		let formDataDireccion = undefined;
		if (updatedForm.id === 3) {
			formDataDireccion = {
				...formData['direccion']
			}
		}

		let formDataCursos = undefined;
		if (updatedForm.id === 4) {
			formDataCursos = {
				...formData['cursos']
			}
		}
/*
    const formDataExp = {
      ...formData['experiencias']
    }
*/
/*
    const formDataTitulos = {
      ...formData['titulos']
    }
*/
    for (let field in updatedStageFields) {
      let currentField = {...updatedStageFields[field]};
      let currentFieldElements = {...currentField.elements}
      for (let element in currentFieldElements) {
        if (formData[field]) {
          if (field.substring(0,5) === 'fecha')
            currentFieldElements[element].value = new Date(formData[field]);

          else
            currentFieldElements[element].value = formData[field];
        }

        else if (formDataDireccion[field]) {
          if (field === 'comuna')
            updatedForm.stages[currentStage].fields['comuna'] =  getComunas(formDataDireccion['region'].toString())

          currentFieldElements[element].value = formDataDireccion[field];
        }

        else if (formDataCursos) {
          this.addSubForm('cursos', NEW_CURSO)
        }

        /*else if (formDataExp) {
          asdas
        }

        /*else if (formDataTitulos) {
          asdas
        }*/
      }
    }
    this.setState({
      form: updatedForm
    })
	}
	
	fillFormData = (data, role) => {
		console.log("llenando datos de formulario...");
		console.log("GET data: ", data);
		//console.log("this.state.datosFormulario: ", this.state.datosFormulario)
		/* cargar lo que haya en datosFormulario a this.state.form */
		// clonar this.state.form
		// llenar sus campos dependiendo del tipo de usuario
		// actualizar estado de form
		const updatedForm = {
      ...this.state.form
    }
    const updatedStages = [
      ...updatedForm.stages
		]

		for (let stage in updatedStages) {
			const updatedCurrentStage = {
				...updatedStages[stage]
			};
			const updatedStageFields = {
				...updatedCurrentStage.fields
			};
			// para todos los fields, obtener todos sus elementos
			for (let field in updatedStageFields) {
				const updatedFieldElements = [ ...updatedStageFields[field].elements ]
				//console.log("updatedFieldElements", updatedFieldElements)

				let fieldType = updatedStageFields[field].type;
				if (fieldType === 'cursos') {
					// el elemento updatedFieldElements[element] es UN curso
					// se debe recorrer los atributos del elemento (name, institucion, fechaInicio, fechaFin)
					// y crear el objeto newCurso
					// agregarlo a un array de newCursosArray
					// hacer updatedForm.stages[stage].fields[field].elements = newCursosArray;
					let cursosArray = [];
					let getCursos = data.perfilCandidato.perfilLaboral.cursos;
					
					for (let curso in getCursos) {
						let newCursoClone = copy(NEW_CURSO);
						newCursoClone[0].value = getCursos[curso].name;
						newCursoClone[1].value = getCursos[curso].institucion;
						newCursoClone[2].value = new Date(getCursos[curso].fechaInicio);
						newCursoClone[3].value = new Date(getCursos[curso].fechaFin);
						cursosArray = cursosArray.concat(newCursoClone);
						console.log("cursosArray", cursosArray)
					}
					updatedForm.stages[stage].fields[field].elements = cursosArray;
					this.setState({
						form: updatedForm
					})
					//updatedForm.stages[stage].fields[field].elements = cursosArray;
					break;
				} else if (fieldType === 'experiencias') {
					let experienciasArray = [];
					let getExperiencias = data.perfilCandidato.perfilLaboral.experiencias;
					
					for (let experiencia in getExperiencias) {
						let newExperienciaClone = copy(NEW_EXPERIENCIA_LABORAL);
						newExperienciaClone[0].value = getExperiencias[experiencia].empresa;
						newExperienciaClone[1].value = new Date(getExperiencias[experiencia].fechaInicio);
						newExperienciaClone[2].value = new Date(getExperiencias[experiencia].fechaFin);
						newExperienciaClone[3].value = getExperiencias[experiencia].cargo;
						newExperienciaClone[4].value = getExperiencias[experiencia].area;
						experienciasArray = experienciasArray.concat(newExperienciaClone);
						console.log("experienciasArray", experienciasArray)
					}
					updatedForm.stages[stage].fields[field].elements = experienciasArray;
					this.setState({
						form: updatedForm
					})
					break;
				} else if (fieldType === 'titulos') {
					let titulosArray = [];
					let getTitulos = data.perfilCandidato.perfilLaboral.titulos;
					
					for (let titulo in getTitulos) {
						let newTituloClone = copy(NEW_TITULO);
						newTituloClone[0].value = getTitulos[titulo].name;
						newTituloClone[1].value = getTitulos[titulo].institucion;
						newTituloClone[2].value = getTitulos[titulo].anho;
						titulosArray = titulosArray.concat(newTituloClone);
						console.log("titulosArray", titulosArray)
					}
					updatedForm.stages[stage].fields[field].elements = titulosArray;
					this.setState({
						form: updatedForm
					})
					break;
				}


				for (let element in updatedFieldElements) {
					//console.log("updatedFieldElements[element]", updatedFieldElements[element])
					let elementId = updatedFieldElements[element].elementConfig.id;
					let elementType = updatedFieldElements[element].elementType;
					let newElementValue = null;

					if ( role === USER_TYPE_POSTULANTE ) {

						if(data.perfilCandidato === undefined) {
							continue;
						} else {
							if (data.perfilCandidato.perfilLaboral[elementId] !== undefined) {

								if (data.perfilCandidato.perfilLaboral[elementId] === null) {
									newElementValue = '';
								} else {
									newElementValue = data.perfilCandidato.perfilLaboral[elementId];
								}
							} else {
								if (data.perfilCandidato[elementId] === null) {
									newElementValue = '';
								} else {
									newElementValue = data.perfilCandidato[elementId];
								}
							}
	
							if (elementType === 'date') {
								newElementValue = new Date(data.perfilCandidato[elementId]);
							}
							if (elementId === 'calle' || elementId === 'comuna' || elementId === 'region') {
								if (data.perfilCandidato.direccion != null) {
									if (data.perfilCandidato.direccion[elementId] === null) {
										newElementValue = '';
									} else {
										newElementValue = data.perfilCandidato.direccion[elementId];
									}
								}
								//console.log(`newElementValue[${elementId}]: `, newElementValue)
							}
						}

					} else if ( role === USER_TYPE_EMPRESA ) {
						newElementValue = data[elementId];
					} else {
						newElementValue = data[elementId];
					}
				
					if (newElementValue === undefined) {
						//console.log(`${elementId} is unset, value: ${newElementValue}`)
						continue;
					}
					let elementsArray = [];
					elementsArray.push({
						...updatedFieldElements[element],
						value: newElementValue
					})
					updatedForm.stages[stage].fields[field].elements = elementsArray;
				}
			}
		}

		this.setState({
			form: updatedForm
		})
	}

	loadForm = (user) => {
		let userRole = null;
		if (user.role === undefined) {
			for (let role in user.roles) {
				let rol = user.roles[role].name;
				if (rol === "ROLE_CANDIDATO") {
					userRole = "candidato"
				}
				if (rol === "ROLE_EMPRESA") {
					userRole = "empresa"
				}
				if (rol === "ROLE_AHA") {
					userRole = "aha"
				}
			}
		} else {
			userRole = user.role;
		}

		switch (this.props.formTitle) {
			case FORM_POSTULANTE_LABORAL:
				getDatosPostulante(user.id)
					.then(response => {
						this.setState({
							form: formPostulanteLaboral,
							datosFormulario: response,
							loading: false
						})
						return response;
					}).then(response => {
						this.fillFormData(response, userRole);
						//console.log("ahora llenar datos", this.state.datosFormulario)
						//console.log("this.state.datosFormulario: ", this.state.datosFormulario)
					})
				break;
			case FORM_POSTULANTE:
				getDatosPostulante(user.id)
					.then(response => {
						this.setState({
							form: formPostulante,
							datosFormulario: response,
							loading: false
						})
						return response;
					}).then(response => {
						console.log("FORM_POSTULANTE getDatosPostulante: ", response);
						this.fillFormData(response, userRole);
						//console.log("ahora llenar datos", this.state.datosFormulario)
						//console.log("this.state.datosFormulario: ", this.state.datosFormulario)
					})
				break;
			case FORM_CUENTA_USUARIO:
				getUser(user.id)
					.then(response => {
						let datos = { email: response.email, password: '' };
						this.setState({
							form: formCuentaUsuario,
							datosFormulario: datos,
							loading: false
						})
						return response;
					}).then(response => {
						this.fillFormData(response, userRole);
					})
				break;
			case FORM_EMPRESA:
				getDatosEmpresa(user.id)
					.then(response => {
						this.setState({
							form: formEmpresa,
							datosFormulario: response,
							loading: false
						})
						return response;
					}).then(response => {
						this.fillFormData(response, userRole);
						//console.log("ahora llenar datos", this.state.datosFormulario)
						//console.log("this.state.datosFormulario: ", this.state.datosFormulario)
					})
				break;
			case FORM_NUEVA_OFERTA:
				this.setState({
					form: formNuevaOferta,
					loading: false
				})
				break;
			default:
				console.log("props.formTitle: ", this.props.formTitle)
		}
	}

	componentDidMount() {
		let currentUserRole = this.props.currentUser.role;
		let isAHA = currentUserRole === USER_TYPE_AHA ? true : false;

		if (isAHA && this.props.match.path !== '/aha/cuenta') {
			getUser(this.props.match.params.id)
				.then(response => {
					let user = response;
					this.setState({
						loadedUser: user
					})
					this.loadForm(user)
				}).catch(error => {
					console.log(error);
				})
		} else {
			this.setState({
				loadedUser: this.props.currentUser
			})
			this.loadForm(this.props.currentUser);
		}
		/*
		if (!this.state.loading) {
			console.log("this.state.loading: ", this.state.loading)
			let activeUserID = null
			if (this.props.currentUser.role === USER_TYPE_AHA && this.props.match.path !== '/aha/cuenta')
				activeUserID = this.props.match.params.id
			else
				activeUserID = this.props.currentUser.id

			if(this.state.form != null) {
				let currentEndpoint = this.state.form.endpoint+('/')+activeUserID+('/');
				console.log("currentEndpoint: ", currentEndpoint)
				switch(this.state.form.id) {
					//case(0): //formCuentaUsuario
					//  break;
					case(1): //formEmpresa
						currentEndpoint = currentEndpoint + 'perfilEmpresa'
						break;
					case(2): //formNuevaOferta
						currentEndpoint = currentEndpoint + 'oferta'
						break;
					case(3): //formPostulante
						currentEndpoint = currentEndpoint + 'perfilCandidato'
						break;
					case(4): //formPostulanteLaboral
						currentEndpoint = currentEndpoint + 'perfilLaboral'
						break;
					default:
						break;
				}

				//this.fetchData(currentEndpoint);

				this.setState({
					activeUserID: activeUserID
				})
			}
		}*/
  }

  render () {
		let stages = "Cargando...";
		let stageTitlesArray = [];
		if (!this.state.loading) {
			console.log(this.state.form)
			//console.log("MasterForm props: ", this.props)
			stages = (
				this.state.form.stages.map(stage => {
					//console.log("STAGE:",stage.name, " FIELDS:", stage.fields);
					return <Stage
						key={stage.id}
						title={stage.name}
						id={stage.id}
						// stageFields = { apellidos: {elementConfig: {}, elementType: '', ...}, nombres: {}, ... }
						stageFields={stage.fields}
						currentStage={this.state.currentStage}
						totalStages={this.state.form.totalStages}
						handleValidation={this.handleValidation}
						handleChange={this.handleChange}
						addSubForm={this.addSubForm}
						deleteForm={this.deleteForm}
						/>
					})
			);

			for (let stage in this.state.form.stages) {
				stageTitlesArray.push(this.state.form.stages[stage].name);
			}
		}
	
    return (
      <Card className="mb-4">
				<Card.Header className="px-2">
					<Alert
						className="mb-2 mt-2"
						variant={this.state.alert.type}
						show={this.state.alert.show}
						onClose={this.handleDismiss}
						dismissible>
						{this.state.alert.message}
					</Alert>
					<Stepper
						currentStage={this.state.currentStage}
						totalStages={this.state.form.totalStages}
						stageTitles={stageTitlesArray}
						goto={this._goto}
					/>
				</Card.Header>
				<Card.Body>
					<form onSubmit={(event) => this.handleSubmit(event)}>
						{ stages }
						<StageControls
							totalStages={this.state.form.totalStages}
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