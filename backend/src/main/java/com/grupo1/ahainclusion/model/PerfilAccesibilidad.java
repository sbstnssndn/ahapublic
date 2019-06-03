package com.grupo1.ahainclusion.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class PerfilAccesibilidad {
    
    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;

    private String name;

    // Importantes
    // private boolean credencial; Credencial es obligatoria siempre
    private boolean accesoSilla; // acceso silla de ruedas

    // Porcentajes de capacidad mínimos requeridos
    private Integer cAuditiva;
    private Integer cFisica;
    private Integer cIntelectual;
    private Integer cPsiquica;
    private Integer cVisual;

    public String getName() {
        return name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getcVisual() {
        return cVisual;
    }

    public void setcVisual(Integer cVisual) {
        this.cVisual = cVisual;
    }

    public Integer getcPsiquica() {
        return cPsiquica;
    }

    public void setcPsiquica(Integer cPsiquica) {
        this.cPsiquica = cPsiquica;
    }

    public Integer getcIntelectual() {
        return cIntelectual;
    }

    public void setcIntelectual(Integer cIntelectual) {
        this.cIntelectual = cIntelectual;
    }

    public Integer getcFisica() {
        return cFisica;
    }

    public void setcFisica(Integer cFisica) {
        this.cFisica = cFisica;
    }

    public Integer getcAuditiva() {
        return cAuditiva;
    }

    public void setcAuditiva(Integer cAuditiva) {
        this.cAuditiva = cAuditiva;
    }

    public boolean isAccesoSilla() {
        return accesoSilla;
    }

    public void setAccesoSilla(boolean accesoSilla) {
        this.accesoSilla = accesoSilla;
    }

    public void setName(String name) {
        this.name = name;
    }
}