import React from 'react';
import Input from './../Input/Input';
import ExperienciaLaboralForm from '../../../components/ExperienciaLaboralForm/ExperienciaLaboralForm';
import ExperienciaExigidaForm from '../../../components/ExperienciaExigidaForm/ExperienciaExigidaForm';
import CursosForm from '../../../components/CursosForm/CursosForm';
import TitulosForm from '../../../components/TitulosForm/TitulosForm';

const Stage = (props) => {
  // Si el paso actual no es el id de esta etapa, no mostrar
  if (props.currentStage !== props.id) {
    return null;
	}

	let fieldElementsArray = [];
	for (let field in props.stageFields) {
		fieldElementsArray.push({
			id: field,
			type: props.stageFields[field].type,
			elements: props.stageFields[field].elements
		})
	}

	
	let inputElementsArray = (
		fieldElementsArray.map(field => {

			if (field.type === 'normal') {
				return field.elements.map(element => (
					<Input
						key={field.id}
						type={field.type}
						label={element.label}
						elementType={element.elementType}
						elementConfig={element.elementConfig}
						value={element.value}
						subtext={element.subtext}
						handleValidation={(event) => props.handleValidation(event, field.id, element.elementConfig.id)}
						handleChange={(event) => props.handleChange(event, field.id, element.elementConfig.id, element.elementType)}
					/>
				))
			}
			else if (field.type === 'experiencias') {
				return <ExperienciaLaboralForm
						key={field.id}
						field={field.id}
						type={field.type}
						elements={field.elements}
						handleChange={props.handleChange}
						addExperiencia={props.addExperiencia}
						deleteForm={props.deleteForm}
						addSubForm={props.addSubForm}
					/>
			}
			else if (field.type === 'cursos') {
				return <CursosForm
						key={field.id}
						field={field.id}
						type={field.type}
						elements={field.elements}
						handleChange={props.handleChange}
						addCurso={props.addCurso}
						deleteForm={props.deleteForm}
						addSubForm={props.addSubForm}
					/>
			}
			else if (field.type === "titulos"){
				return <TitulosForm
						key={field.id}
						field={field.id}
						type={field.type}
						elements={field.elements}
						handleChange={props.handleChange}
						addTitulo={props.addTitulo}
						deleteForm={props.deleteForm}
						addSubForm={props.addSubForm}
				/> 
			}
			else if (field.type === 'experienciasEmpresa') {
				return <ExperienciaExigidaForm
						key={field.id}
						field={field.id}
						type={field.type}
						elements={field.elements}
						handleChange={props.handleChange}
						addExperiencia={props.addExperiencia}
						deleteForm={props.deleteForm}
						addSubForm={props.addSubForm}
					/>
			}
			else {
				return null;
			}
		})
	)

  return (
    <React.Fragment>
      { inputElementsArray }
    </React.Fragment>
  );
}

export default Stage;