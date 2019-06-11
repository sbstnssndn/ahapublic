package com.grupo1.ahainclusion.model.oferta;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.grupo1.ahainclusion.model.Oferta;

@Entity
public class ExperienciaExigida {
    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;

    // Tipo: Tipo de experiencia
    private String tipo;

    // Duración: años de experiencia requeridos
    private Integer duracion;

    // Oferta padre
    @ManyToOne
    @JsonBackReference
    private Oferta oferta;

    public String getTipo() {
        return tipo;
    }

    public Oferta getOferta() {
        return oferta;
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
    
    public void setTipo(String tipo) {
        this.tipo = tipo;
    }



}