package com.grupo1.ahainclusion.model.candidato;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.grupo1.ahainclusion.model.User;

@Entity
public class Titulo {
    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;

    // Name: nombre del titulo/carrera.
    private String name;
    // Institucion: nombre de institucion donde se cursó.
    private String institucion;

    // Usuario
    @ManyToOne
    @JsonBackReference
    private User user;

    public String getName() {
        return name;
    }

    public String getInstitucion() {
        return institucion;
    }

    public void setInstitucion(String institucion) {
        this.institucion = institucion;
    }

    public void setName(String name) {
        this.name = name;
    }

}