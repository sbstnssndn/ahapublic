package com.grupo1.ahainclusion.model;

import java.util.Date;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.grupo1.ahainclusion.model.candidato.Direccion;


@Entity
@Table(name="perfil_candidato")
public class PerfilCandidato {
    @Id
    private Integer id;

    @OneToOne
    @MapsId
    @JsonBackReference
    private User user;

    // INFORMACIÓN PERSONAL
    // --------------------
    private String firstName;
    private String lastName;
    private String rut;
    private Integer genero;
    private Date fechaNacimiento;
    private String nacionalidad;
    private String telefono1;
    private String telefono2;
    private String email2;
    @OneToOne(cascade = CascadeType.ALL)
    private Direccion direccion;

    @JsonManagedReference
    @OneToOne(mappedBy = "perfilCandidato", cascade = CascadeType.ALL)
    private PerfilLaboral perfilLaboral;

    public String getFirstName() {
        return firstName;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public PerfilLaboral getPerfilLaboral() {
        return perfilLaboral;
    }

    public void setPerfilLaboral(PerfilLaboral perfilLaboral) {
        this.perfilLaboral = perfilLaboral;
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

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNacionalidad() {
        return nacionalidad;
    }

    public void setNacionalidad(String nacionalidad) {
        this.nacionalidad = nacionalidad;
    }

    public Date getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(Date fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public Integer getGenero() {
        return genero;
    }

    public void setGenero(Integer genero) {
        this.genero = genero;
    }

    public Direccion getDireccion() {
        return direccion;
    }

    public void setDireccion(Direccion direccion) {
        this.direccion = direccion;
    }

    public String getRut() {
        return rut;
    }

    public void setRut(String rut) {
        this.rut = rut;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

}