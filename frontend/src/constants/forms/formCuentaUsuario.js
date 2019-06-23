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
                                label: 'Contraseña',
                                elementType: 'input',
                                elementConfig: {
                                    type: 'password',
                                    placeholder: '********',
                                    name: 'password',
                                    id: 'password'
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