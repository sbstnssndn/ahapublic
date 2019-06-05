package com.grupo1.ahainclusion.model;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.grupo1.ahainclusion.model.candidato.Direccion;


@Entity
public class PerfilCandidato {
    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;

    // INFORMACIÓN PERSONAL
    // --------------------
    private String firstName;
    private String lastName;
    private String rut;
    private String genero;
    private Date fechaNacimiento;
    private String nacionalidad;
    @OneToOne(cascade = CascadeType.ALL )
    private Direccion direccion;

    // LICENCIA DE CONDUCIR
    // --------------------
    private String licencia;

    // AYUDA PARA LLENAR FORMULARIO
    // ----------------------------
    // 0: No 1: Si, parcial 2: Completamente
    private Integer ayudaFormulario;

    // EDUCACIÓN
    // -----------------
    private Integer nivelEducacional; // 0: Ed. Especial ..... 9:Postgrado


    public String getFirstName() {
        return firstName;
    }

    public Integer getNivelEducacional() {
        return nivelEducacional;
    }

    public void setNivelEducacional(Integer nivelEducacional) {
        this.nivelEducacional = nivelEducacional;
    }

    public Integer getAyudaFormulario() {
        return ayudaFormulario;
    }

    public void setAyudaFormulario(Integer ayudaFormulario) {
        this.ayudaFormulario = ayudaFormulario;
    }

    public String getLicencia() {
        return licencia;
    }

    public void setLicencia(String licencia) {
        this.licencia = licencia;
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

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
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