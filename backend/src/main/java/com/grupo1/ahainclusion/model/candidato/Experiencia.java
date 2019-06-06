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
public class Experiencia {
    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;

    // Tipo: Tipo de experiencia
    private String tipo;
    // Empresa: Nombre de la empresa
    private String empresa;
    // Fechas: fecha inicio y fin de la experiencia
    private Date fechaInicio;
    private Date fechaFin;

    // Perfil Candidato padre
    @ManyToOne
    @JsonBackReference
    private PerfilCandidato perfilCandidato;

    public String getTipo() {
        return tipo;
    }

    public PerfilCandidato getPerfilCandidato() {
        return perfilCandidato;
    }

    public void setPerfilCandidato(PerfilCandidato perfilCandidato) {
        this.perfilCandidato = perfilCandidato;
    }

    public Date getFechaFin() {
        return fechaFin;
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

    public String getEmpresa() {
        return empresa;
    }

    public void setEmpresa(String empresa) {
        this.empresa = empresa;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }



}