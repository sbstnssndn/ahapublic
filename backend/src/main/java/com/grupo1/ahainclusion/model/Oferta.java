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

    public String getDescription() {
        return description;
    }

    public PerfilEmpresa getPerfilEmpresa() {
        return perfilEmpresa;
    }

    public void setPerfilEmpresa(PerfilEmpresa perfilEmpresa) {
        this.perfilEmpresa = perfilEmpresa;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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