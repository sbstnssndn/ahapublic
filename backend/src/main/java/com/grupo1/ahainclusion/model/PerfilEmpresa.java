package com.grupo1.ahainclusion.model;

import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class PerfilEmpresa {
    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    private String nameEmpresa;
    private String rutEmpresa;

    @OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "perfil_empresa_id")
	@JsonManagedReference
    private Collection<PerfilAccesibilidad> perfilesAccesibilidad;
    
    @OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "perfil_empresa_id")
	@JsonManagedReference
    private Collection<Oferta> ofertas;

    public String getNameEmpresa() {
        return nameEmpresa;
    }

    public Collection<Oferta> getOfertas() {
        return ofertas;
    }

    public void setOfertas(Collection<Oferta> ofertas) {
        this.ofertas = ofertas;
    }

    public Collection<PerfilAccesibilidad> getPerfilesAccesibilidad() {
        return perfilesAccesibilidad;
    }

    public void setPerfilesAccesibilidad(Collection<PerfilAccesibilidad> perfilesAccesibilidad) {
        this.perfilesAccesibilidad = perfilesAccesibilidad;
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