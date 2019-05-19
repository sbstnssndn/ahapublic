package com.grupo1.ahainclusion.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Oferta {
    @Id
	@GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;

    @OneToOne
    private User user;

    @OneToOne
    private PerfilAccesibilidad perfilAccesibilidad;

    private String name;
    private String description;

    public String getDescription() {
        return description;
    }

    public PerfilAccesibilidad getPerfilAccesibilidad() {
        return perfilAccesibilidad;
    }

    public void setPerfilAccesibilidad(PerfilAccesibilidad perfilAccesibilidad) {
        this.perfilAccesibilidad = perfilAccesibilidad;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
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