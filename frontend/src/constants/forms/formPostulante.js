//Datos personales del usuario postulante
export const formPostulante = 
  {
    id: 3,
    title: "Información postulante",
    belongsTo: "postulante",
    endpoint: "http://localhost:8080/api/user",
    totalStages: 4,
    stages: [
      {
        id: 0,
        name: "Identificación",
        fields: {       
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
                subtext: '',
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
                subtext: '',
                value: ''
              }
            ]
          },
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
                subtext: '',
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
                subtext: '',
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
                subtext: '',
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
          telefono1: {
            type: 'normal',
            elements: [
              {
                label: 'Teléfono',
                elementType: 'input',
                elementConfig: {
                  type: 'text',
                  placeholder: '+56912345678',
                  name: 'telefono1',
                  id: 'telefono1'
                },
                subtext: '',
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
                subtext: '',
                value: ''
              }
            ]
          },
          email2: {
            type: 'normal',
            elements: [
              {
                label: 'Correo electrónico de contacto',
                elementType: 'input',
                elementConfig: {
                  type: 'email2',
                  placeholder: 'juan.perez@gmail.com',
                  name: 'email2',
                  id: 'email2'
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
                subtext: '',
                value: ''
              }
            ]
          },
          region: {
            type: 'normal',
            elements: [
              {
                label: 'Región',
                elementType: 'select',
                elementConfig: {
                  name: 'region',
                  id: 'region',
                  options: [
                    { value: '', displayValue: ''},
                    { value: 0, displayValue: 'Arica y Parinacota' },
                    { value: 1, displayValue: 'Tarapacá' },
                    { value: 2, displayValue: 'Antofagasta' },
                    { value: 3, displayValue: 'Atacama' },
                    { value: 4, displayValue: 'Coquimbo' },
                    { value: 5, displayValue: 'Valparaíso' },
                    { value: 6, displayValue: 'Metropolitana de Santiago' },
                    { value: 7, displayValue: 'Libertador Gral. Bernardo O’Higgins' },
                    { value: 8, displayValue: 'Maule' },
                    { value: 9, displayValue: 'Ñuble' },
                    { value: 10, displayValue: 'Biobío' },
                    { value: 11, displayValue: 'Araucanía' },
                    { value: 12, displayValue: 'Los Ríos' },
                    { value: 13, displayValue: 'Los Lagos' },
                    { value: 14, displayValue: 'Aysén del Gral. Carlos Ibáñez del Campo' },
                    { value: 15, displayValue: 'Magallanes y de la Antártica Chilena' },
                  ]
                },
                subtext: '',
                value: '',
              }
            ]
          },
          comuna: {
            type: 'normal',
            elements: [
              {
                label: 'Comuna',
                elementType: 'select',
                elementConfig: {
                  name: 'comuna',
                  id: 'comuna',
                  options: [{ value: '', displayValue: ''}]
                },
                subtext: '',
                value: '',
              }
            ]
          },
        }
      }
    ]
  }
;