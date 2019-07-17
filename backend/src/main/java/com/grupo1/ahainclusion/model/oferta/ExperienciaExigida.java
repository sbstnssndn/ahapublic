package com.grupo1.ahainclusion.model.oferta;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.grupo1.ahainclusion.model.Oferta;

@Entity
public class ExperienciaExigida {
    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;

    // Tipo: Tipo de experiencia
    @NotNull(message="Debe ingresar el area de la experiencia exigida")
    private Integer area;

    // Duración: años de experiencia requeridos
    @NotNull(message = "Debe ingresar los años de duración exigidos")
    private Integer duracion;

    // Oferta padre
    @ManyToOne
    @JsonBackReference
    private Oferta oferta;

    public Oferta getOferta() {
        return oferta;
    }

    public Integer getArea() {
        return area;
    }

    public void setArea(Integer area) {
        this.area = area;
    }

    public void setOferta(Oferta oferta) {
        this.oferta = oferta;
    }

    public Integer getDuracion() {
        return duracion;
    }

    public void setDuracion(Integer duracion) {
        this.duracion = duracion;
    }
    



}