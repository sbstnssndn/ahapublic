package com.grupo1.ahainclusion.model.candidato;

import java.sql.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.grupo1.ahainclusion.model.PerfilCandidato;

@Entity
public class Curso {
    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    // Name: nombre del curso realizado.
    private String name;
    // Institución: nombre de la institución donde se realizo el curso.
    private String institucion;
    // Fechas: de inicio y termino del curso.
    private Date fechaInicio;
    private Date fechaFin;
    
    // Perfil Candidato padre
    @ManyToOne
    @JsonBackReference
    private PerfilCandidato perfilCandidato;

    public Date getFechaFin() {
        return fechaFin;
    }

    public PerfilCandidato getPerfilCandidato() {
        return perfilCandidato;
    }

    public void setPerfilCandidato(PerfilCandidato perfilCandidato) {
        this.perfilCandidato = perfilCandidato;
    }

    public void setFechaFin(Date fechaFin) {
        this.fechaFin = fechaFin;
    }

    public Date getFechaInicio() {
        return fechaInicio;
    }

    public void setFechaInicio(Date fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    public String getInstitucion() {
        return institucion;
    }

    public void setInstitucion(String institucion) {
        this.institucion = institucion;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}