package com.grupo1.ahainclusion.model.candidato;

import java.sql.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.grupo1.ahainclusion.model.PerfilLaboral;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
public class Curso {
    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    // Name: nombre del curso realizado.
    @NotNull(message = "Debe ingresar nombre del curso")
    private String name;
    // Institución: nombre de la institución donde se realizo el curso.
    @NotNull(message = "Debe ingresar nombre de institución")
    private String institucion;
    // Fechas: de inicio y termino del curso.
    @JsonFormat(pattern = "dd-MM-yyyy")
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    @NotNull(message = "Debe ingresar una fecha de inicio")
    private Date fechaInicio;
    @JsonFormat(pattern = "dd-MM-yyyy")
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    @NotNull(message = "Debe ingresar una fecha de fin")
    private Date fechaFin;

    // Perfil Laboral padre
    @ManyToOne
    @JsonBackReference
    private PerfilLaboral perfilLaboral;

    public Date getFechaFin() {
        return fechaFin;
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