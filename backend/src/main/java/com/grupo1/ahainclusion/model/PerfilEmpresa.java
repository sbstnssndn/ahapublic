package com.grupo1.ahainclusion.model;

import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class PerfilEmpresa {
    @Id
    private Integer id;

    @OneToOne
    @MapsId
    @JsonBackReference
    private User user;

    private String nameEmpresa;
    private String rutEmpresa;
    private String telefono1;
    private String telefono2;
    private String email2;

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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getEmail2() {
        return email2;
    }

    public void setEmail2(String email2) {
        this.email2 = email2;
    }

    public String getTelefono2() {
        return telefono2;
    }

    public void setTelefono2(String telefono2) {
        this.telefono2 = telefono2;
    }

    public String getTelefono1() {
        return telefono1;
    }

    public void setTelefono1(String telefono1) {
        this.telefono1 = telefono1;
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