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
    private Integer region;
    private Integer comuna;
    private String calle;

    public Integer getId() {
        return id;
    }

    public Integer getComuna() {
        return comuna;
    }

    public void setComuna(Integer comuna) {
        this.comuna = comuna;
    }

    public Integer getRegion() {
        return region;
    }

    public void setRegion(Integer region) {
        this.region = region;
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
}