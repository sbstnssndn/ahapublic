package com.grupo1.ahainclusion.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class PerfilDiscapacidad {

    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;

    private String name;

    // Importantes
    private boolean credencial;
    private boolean sillaDeRuedas;

    // Porcentajes de discapacidad
    private Integer dAuditiva;
    private Integer dFisica;
    private Integer dIntelectual;
    private Integer dPsiquica;
    private Integer dVisual;

    public String getName() {
        return name;
    }

    public Integer getdVisual() {
        return dVisual;
    }

    public void setdVisual(Integer dVisual) {
        this.dVisual = dVisual;
    }

    public Integer getdPsiquica() {
        return dPsiquica;
    }

    public void setdPsiquica(Integer dPsiquica) {
        this.dPsiquica = dPsiquica;
    }

    public Integer getdIntelectual() {
        return dIntelectual;
    }

    public void setdIntelectual(Integer dIntelectual) {
        this.dIntelectual = dIntelectual;
    }

    public Integer getdFisica() {
        return dFisica;
    }

    public void setdFisica(Integer dFisica) {
        this.dFisica = dFisica;
    }

    public Integer getdAuditiva() {
        return dAuditiva;
    }

    public void setdAuditiva(Integer dAuditiva) {
        this.dAuditiva = dAuditiva;
    }

    public boolean isSillaDeRuedas() {
        return sillaDeRuedas;
    }

    public void setSillaDeRuedas(boolean sillaDeRuedas) {
        this.sillaDeRuedas = sillaDeRuedas;
    }

    public boolean isCredencial() {
        return credencial;
    }

    public void setCredencial(boolean credencial) {
        this.credencial = credencial;
    }

    public void setName(String name) {
        this.name = name;
    }

}