package com.grupo1.ahainclusion.model.candidato;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.grupo1.ahainclusion.model.PerfilCandidato;
import com.grupo1.ahainclusion.model.PerfilLaboral;

@Entity
public class Titulo {
    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;

    // Name: nombre del titulo/carrera.
    @NotNull(message = "Debe ingresar el nombre del titulo/carrera")
    private String name;
    // Institucion: nombre de institucion donde se cursó.
    @NotNull(message = "Debe ingresar el nombre de la institución")
    private String institucion;

    // Perfil Laboral padre
    @ManyToOne
    @JsonBackReference
    private PerfilLaboral perfilLaboral;

    public String getName() {
        return name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public PerfilLaboral getPerfilLaboral() {
        return perfilLaboral;
    }

    public void setPerfilLaboral(PerfilLaboral perfilLaboral) {
        this.perfilLaboral = perfilLaboral;
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