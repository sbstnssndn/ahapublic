package com.grupo1.ahainclusion.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class Oferta {
    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;

    private String name;
    private String description;

    @ManyToOne
    @JsonBackReference
    private PerfilEmpresa perfilEmpresa;

    @OneToOne
    private PerfilAccesibilidad perfilAccesibilidad;

    @OneToOne
    private ExigenciaLaboral exigenciaLaboral;

    public String getDescription() {
        return description;
    }

    public PerfilEmpresa getPerfilEmpresa() {
        return perfilEmpresa;
    }

    public void setPerfilEmpresa(PerfilEmpresa perfilEmpresa) {
        this.perfilEmpresa = perfilEmpresa;
    }

    public ExigenciaLaboral getExigenciaLaboral() {
        return exigenciaLaboral;
    }

    public void setExigenciaLaboral(ExigenciaLaboral exigenciaLaboral) {
        this.exigenciaLaboral = exigenciaLaboral;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public PerfilAccesibilidad getPerfilAccesibilidad() {
        return perfilAccesibilidad;
    }

    public void setPerfilAccesibilidad(PerfilAccesibilidad perfilAccesibilidad) {
        this.perfilAccesibilidad = perfilAccesibilidad;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    
}