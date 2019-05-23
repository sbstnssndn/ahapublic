import React from 'react';
import './App.css';
import MasterForm from './containers/MasterForm/MasterForm';
import Layout from './components/Layout/Layout';
import Toolbar from './components/Toolbar/Toolbar';
import Footer from './components/Footer/Footer';
import SideMenu from './components/SideMenu/SideMenu';
import  { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home/Home';

// import preguntasPostulante from './assets/js/preguntas-postulante.js

function App() {

  const stagesPostulante =
  [
    {
      id: 0,
      title: 'Datos de usuario',
      inputs: {
        rut: {
          label: 'RUT',
          inputStyle: 'input',
          inputConfig: {
            type: 'text',
            placeholder: '12345678-0',
            name: 'rut',
            id: 'rut'
          },
          value: ''
        },
        firstName: {
          label: 'Primer nombre',
          inputStyle: 'input',
          inputConfig: {
            type: 'text',
            placeholder: 'Juan',
            name: 'firstName',
            id: 'firstName'
          },
          value: ''
        },
        lastName: {
          label: 'Apellido',
          inputStyle: 'input',
          inputConfig: {
            type: 'text',
            placeholder: 'Pérez',
            name: 'lastName',
            id: 'lastName'
          },
          value: ''
        },
        location: {
          label: 'Dirección',
          inputStyle: 'input',
          inputConfig: {
            type: 'text',
            placeholder: 'Av. Pajaritos 754, casa 64',
            name: 'location',
            id: 'location'
          },
          value: ''
        },
        email: {
          label: 'Correo electrónico',
          inputStyle: 'input',
          inputConfig: {
            type: 'email',
            placeholder: 'juan.perez@gmail.com',
            name: 'email',
            id: 'email'
          },
          value: ''
        }
      }
    },
    {
      id: 1,
      title: 'Datos de discapacidad',
      inputs: {
        credencial: {
          label: '¿Tiene credencial de discapacidad?',
          inputStyle: 'select',
          inputConfig: {
            name: 'credencial',
            id: 'credencial',
            options: [
              { value: '', displayValue: 'Seleccione...', disabled: true },
              { value: 'si', displayValue: 'Si' },
              { value: 'no', displayValue: 'No' }
            ]
          },
          value: ''
        },
        sillaRuedas: {
          label: '¿Utiliza silla de ruedas?',
          inputStyle: 'select',
          inputConfig: {
            name: 'sillaRuedas',
            id: 'sillaRuedas',
            options: [
              { value: '', displayValue: 'Seleccione...', disabled: true },
              { value: 'si', displayValue: 'Si' },
              { value: 'no', displayValue: 'No' }
            ]
          },
          value: ''
        },
        dAuditiva: {
          label: 'Grado de discapacidad auditiva',
          inputStyle: 'select',
          inputConfig: {
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
          inputStyle: 'select',
          inputConfig: {
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
          inputStyle: 'select',
          inputConfig: {
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
          label: 'Grado de discapacidad psíquica',
          inputStyle: 'select',
          inputConfig: {
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
          inputStyle: 'select',
          inputConfig: {
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
        nivelEducacional: {
          label: 'Nivel educacional',
          inputStyle: 'select',
          inputConfig: {
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
        firstName: {
          label: 'Primer nombre',
          inputStyle: 'input',
          inputConfig: {
            type: 'text',
            placeholder: 'Juan',
            name: 'firstName',
            id: 'firstName'
          },
          value: ''
        },
        lastName: {
          label: 'Apellido',
          inputStyle: 'input',
          inputConfig: {
            type: 'text',
            placeholder: 'Pérez',
            name: 'lastName',
            id: 'lastName'
          },
          value: ''
        },
        location: {
          label: 'Dirección',
          inputStyle: 'input',
          inputConfig: {
            type: 'text',
            placeholder: 'Av. Pajaritos 754, casa 64',
            name: 'location',
            id: 'location'
          },
          value: ''
        },
        email: {
          label: 'Correo electrónico',
          inputStyle: 'input',
          inputConfig: {
            type: 'email',
            placeholder: 'juan.perez@gmail.com',
            name: 'email',
            id: 'email'
          },
          value: ''
        }
      }
    }
  ]

  const stagesEmpresa =
  [
    {
      id: 0,
      title: 'Datos de accesibilidad',
      inputs: {
        sillaRuedas: {
          label: '¿Tiene acceso para silla de ruedas?',
          inputStyle: 'select',
          inputConfig: {
            name: 'sillaRuedas',
            id: 'sillaRuedas',
            options: [
              { value: '', displayValue: 'Seleccione...', disabled: true },
              { value: 'si', displayValue: 'Si' },
              { value: 'no', displayValue: 'No' }
            ]
          },
          value: ''
        },
        dAuditiva: {
          label: 'Capacidad auditiva requerida',
          inputStyle: 'select',
          inputConfig: {
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
          inputStyle: 'select',
          inputConfig: {
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
          inputStyle: 'select',
          inputConfig: {
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
          inputStyle: 'select',
          inputConfig: {
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
          inputStyle: 'select',
          inputConfig: {
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
      id: 1,
      title: 'Experiencia laboral',
      inputs: {
        location: {
          label: 'Lugar de trabajo',
          inputStyle: 'input',
          inputConfig: {
            type: 'text',
            placeholder: 'Av. Tobalaba 417, piso 2',
            name: 'location',
            id: 'location'
          },
          value: ''
        },
        nivelEducacional: {
          label: 'Nivel educacional',
          inputStyle: 'select',
          inputConfig: {
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
          inputStyle: 'select',
          inputConfig: {
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
          label: 'Experiencia laboral',
          inputStyle: 'select',
          inputConfig: {
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
          label: 'Experiencia laboral',
          inputStyle: 'select',
          inputConfig: {
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
        },
        email: {
          label: 'Correo electrónico',
          inputStyle: 'input',
          inputConfig: {
            type: 'email',
            placeholder: 'juan.perez@gmail.com',
            name: 'email',
            id: 'email'
          },
          value: ''
        }
      }
    }
  ]

  return (
    <BrowserRouter>
      
      <Layout>
        <Toolbar />
        <div className="container pt-2">
          <div className="row">
            <SideMenu />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/postulantes" exact component={() => (
                <MasterForm stages={stagesPostulante} type={"postulante"} />
              )}/>
              <Route path="/empresas" exact component={() => (
                <MasterForm stages={stagesEmpresa} type={"empresa"} />
              )}/>
            </Switch>
          </div>
        </div>
       <Footer />
      </Layout>
    </BrowserRouter>
  );
}

export default App;