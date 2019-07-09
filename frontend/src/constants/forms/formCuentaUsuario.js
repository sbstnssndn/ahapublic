//Para el cambio de email o password
export const formCuentaUsuario =
  {
    title: "Información cuenta de usuario",
    belongsTo: "user",
    endpoint: "http://localhost:8080/api/user",
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