import { API_BASE_URL, FORM_CUENTA_USUARIO } from '../index';
//Para el cambio de email o password
export const formCuentaUsuario =
  {
    id: 0,
    title: FORM_CUENTA_USUARIO,
    belongsTo: "user",
    endpoint: API_BASE_URL+"/user",
    totalStages: 1,
    stages: [
      {
        id: 0,
        name: "Mi cuenta de usuario",
        fields: {
          email: {
            type: 'normal',
            elements: [
              {
                label: 'Correo electrónico',
                elementType: 'input',
                elementConfig: {
                  type: 'email',
                  placeholder: 'juan.perez@gmail.com',
                  name: 'email',
                  id: 'email'
                },
                subtext: '',
                value: ''
              }
            ]
          },
          password: {
            type: 'normal',
            elements: [
              {
                label: 'Contraseña actual',
                elementType: 'input',
                elementConfig: {
                  type: 'password',
                  placeholder: 'Ingrese su contraseña',
                  name: 'password',
                  id: 'password'
                },
                subtext: '',
                value: ''
              }
            ]
					},
					newPassword: {
            type: 'normal',
            elements: [
              {
                label: 'Cambiar contraseña',
                elementType: 'input',
                elementConfig: {
                  type: 'password',
                  placeholder: 'Nueva contraseña',
                  name: 'newPassword',
                  id: 'newPassword'
                },
                subtext: '',
                value: ''
              }
            ]
          }
        }
      }
    ]
  }
;