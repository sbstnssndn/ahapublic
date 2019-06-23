package com.grupo1.ahainclusion.model.candidato;

import java.sql.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.grupo1.ahainclusion.model.PerfilLaboral;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
public class Experiencia {
    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;

    // Tipo: Tipo de experiencia
    private String tipo;
    // Cargo: nombre del cargo
    private String cargo;
    // Empresa: Nombre de la empresa
    private String empresa;
    // Fechas: fecha inicio y fin de la experiencia
    @JsonFormat(pattern="dd-MM-yyyy")
    @DateTimeFormat(pattern="dd-MM-yyyy")
    private Date fechaInicio;
    @JsonFormat(pattern="dd-MM-yyyy")
    @DateTimeFormat(pattern="dd-MM-yyyy")
    private Date fechaFin;

    // Perfil Laboral padre
    @ManyToOne
    @JsonBackReference
    private PerfilLaboral perfilLaboral;

    public String getTipo() {
        return tipo;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    public PerfilLaboral getPerfilLaboral() {
        return perfilLaboral;
    }

    public void setPerfilLaboral(PerfilLaboral perfilLaboral) {
        this.perfilLaboral = perfilLaboral;
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