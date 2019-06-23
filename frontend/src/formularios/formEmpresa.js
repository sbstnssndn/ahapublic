export default 
    {
        title: "Información empresa",
        belongsTo: "empresa",
        endpoint: "",
        totalStages: 1,
        stages:
        [
            { 
                id: 0,
                name: "Datos empresa",
                fields: {
                    ubicacion: {
                        type: "normal",
                        elements: [
                            {
                                label: "Nombre Empresa",
                                elementType: "input",
                                elementConfig: {
                                    type: "text",
                                    placeholder: "Lider S.A",
                                    name: "nombre",
                                    id: "nombre"
                                },
                                value: ""
                            }
                        ]
                    },
                    rut: {
                        type: "normal",
                        elements: [
                            {
                                label: "Rut Empresa",
                                elementType: "input",
                                elementConfig: {
                                    type: "text",
                                    placeholder: "7546345-2",
                                    name: "rut",
                                    id: "rut"
                                },
                                subtext: "Rut bonito",
                                value: ""
                            }
                        ]
                    },
                    telefono1: {
                        type: "normal",
                        elements: [
                            {
                                label: "Telefono",
                                elementType: "input",
                                elementConfig: {
                                    type: "text",
                                    placeholder: "223546544",
                                    name: "telefono1",
                                    id: "telefono1"
                                },
                                value: ""
                            }
                        ]
                    },
                    telefono2: {
                        type: "normal",
                        elements: [
                            {
                                label: "Telefono Alternativo",
                                elementType: "input",
                                elementConfig: {
                                    type: "text",
                                    placeholder: "226537434",
                                    name: "telefono2",
                                    id: "telefono2"
                                },
                                value: ""
                            }
                        ]
                    },
                    correo2: {
                        type: "normal",
                        elements: [
                            {
                                label: "Correo Alternativo",
                                elementType: "input",
                                elementConfig: {
                                    type: "text",
                                    placeholder: "contacto@lider.cl",
                                    name: "correo2",
                                    id: "correo2"
                                },
                                value: ""
                            }
                        ]
                    },
                }
            }
        ]
    }
;