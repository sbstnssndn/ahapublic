package com.grupo1.ahainclusion.model.candidato;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Direccion {
    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    private String region;
    private String comuna;
    private String calle;

    public String getRegion() {
        return region;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCalle() {
        return calle;
    }

    public void setCalle(String calle) {
        this.calle = calle;
    }

    public String getComuna() {
        return comuna;
    }

    public void setComuna(String comuna) {
        this.comuna = comuna;
    }

    public void setRegion(String region) {
        this.region = region;
    }
}