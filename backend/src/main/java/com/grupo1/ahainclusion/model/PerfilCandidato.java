package com.grupo1.ahainclusion.model;

import java.util.Collection;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.grupo1.ahainclusion.model.candidato.Curso;
import com.grupo1.ahainclusion.model.candidato.Direccion;
import com.grupo1.ahainclusion.model.candidato.Experiencia;
import com.grupo1.ahainclusion.model.candidato.Titulo;


@Entity
@Table(name="perfil_candidato")
public class PerfilCandidato {
    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;

    // INFORMACIÓN PERSONAL
    // --------------------
    private String firstName;
    private String lastName;
    private String rut;
    private Integer genero;
    private Date fechaNacimiento;
    private String nacionalidad;
    @OneToOne(cascade = CascadeType.ALL)
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

    // Titulos/carreras terminadas
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "perfil_candidato_id")
    @JsonManagedReference
    private Collection<Titulo> titulos;

    // Cursos realizados
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "perfil_candidato_id")
    @JsonManagedReference
    private Collection<Curso> cursos;

    // Experiencias laborales
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "perfil_candidato_id")
    @JsonManagedReference
    private Collection<Experiencia> experiencias;

    // DISPONIBILIDAD
    // --------------
    // Disponibilidad: 0:Lunes a Viernes
    // 1: Sábados, Domingos y festivos
    // 2: Cualquier día
    private Integer disponibilidad;

    // EXPECTATIVAS DE SUELDO
    // ExpectativaSueldo: 0: Hasta 301.000
    // 1: 301.0001 a 400.000
    // 2: 400.001 a 550.000
    // 3: 550.001 a 650.000
    // 4: 650.001 a 800.000
    // 5: 800.001 a 1.000.000
    // 6: 1.000.000 o más
    private Integer expectativaSueldo;

    public String getFirstName() {
        return firstName;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getExpectativaSueldo() {
        return expectativaSueldo;
    }

    public void setExpectativaSueldo(Integer expectativaSueldo) {
        this.expectativaSueldo = expectativaSueldo;
    }

    public Integer getDisponibilidad() {
        return disponibilidad;
    }

    public void setDisponibilidad(Integer disponibilidad) {
        this.disponibilidad = disponibilidad;
    }

    public Collection<Experiencia> getExperiencias() {
        return experiencias;
    }

    public void setExperiencias(Collection<Experiencia> experiencias) {
        this.experiencias = experiencias;
    }

    public Collection<Titulo> getTitulos() {
        return titulos;
    }

    public void setTitulos(Collection<Titulo> titulos) {
        this.titulos = titulos;
    }

    public Collection<Curso> getCursos() {
        return cursos;
    }

    public void setCursos(Collection<Curso> cursos) {
        this.cursos = cursos;
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