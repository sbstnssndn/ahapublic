package com.grupo1.ahainclusion.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class PerfilEmpresa {
    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    private String nameEmpresa;
    private String rutEmpresa;

    public String getNameEmpresa() {
        return nameEmpresa;
    }

    public String getRutEmpresa() {
        return rutEmpresa;
    }

    public void setRutEmpresa(String rutEmpresa) {
        this.rutEmpresa = rutEmpresa;
    }

    public void setNameEmpresa(String nameEmpresa) {
        this.nameEmpresa = nameEmpresa;
    }

}