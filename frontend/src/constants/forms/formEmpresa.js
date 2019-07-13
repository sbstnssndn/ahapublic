import { API_BASE_URL, FORM_EMPRESA } from '../index';

//Datos personales del usuario empresa
export const formEmpresa = 
    {
      id: 1,
      title: FORM_EMPRESA,
      belongsTo: "empresa",
      endpoint: API_BASE_URL+"/user",
      totalStages: 1,
      stages:
      [
        { 
          id: 0,
          name: "Datos empresa",
          fields: {
            nameEmpresa: {
              type: "normal",
              elements: [
                {
                  label: "Nombre empresa",
                  elementType: "input",
                  elementConfig: {
                    type: "text",
                    placeholder: "Lider S.A",
                    name: "nameEmpresa",
                    id: "nameEmpresa"
                  },
                  subtext: '',
                  value: ""
                }
              ]
            },
            rutEmpresa: {
              type: "normal",
              elements: [
                {
                  label: "RUT empresa",
                  elementType: "input",
                  elementConfig: {
                    type: "text",
                    placeholder: "7546345-2",
                    name: "rutEmpresa",
                    id: "rutEmpresa"
                  },
                  subtext: '',
                  value: ""
                }
              ]
            },
            telefono1: {
              type: "normal",
              elements: [
                {
                  label: "Teléfono",
                  elementType: "input",
                  elementConfig: {
                    type: "text",
                    placeholder: "223546544",
                    name: "telefono1",
                    id: "telefono1"
                  },
                  subtext: '',
                  value: ""
                }
              ]
            },
            telefono2: {
              type: "normal",
              elements: [
                {
                  label: "Teléfono alternativo",
                  elementType: "input",
                  elementConfig: {
                    type: "text",
                    placeholder: "226537434",
                    name: "telefono2",
                    id: "telefono2"
                  },
                  subtext: '',
                  value: ""
                }
              ]
            },
            email2: {
              type: "normal",
              elements: [
                {
                  label: "Correo alternativo",
                  elementType: "input",
                  elementConfig: {
                    type: "text",
                    placeholder: "contacto@lider.cl",
                    name: "email2",
                    id: "email2"
                  },
                  subtext: '',
                  value: ""
                }
              ]
            },
          }
        }
      ]
    };