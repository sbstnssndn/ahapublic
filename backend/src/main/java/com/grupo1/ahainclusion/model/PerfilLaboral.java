package com.grupo1.ahainclusion.model;

import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.grupo1.ahainclusion.model.candidato.Curso;
import com.grupo1.ahainclusion.model.candidato.Experiencia;
import com.grupo1.ahainclusion.model.candidato.Titulo;

@Entity
@Table(name="perfil_laboral")
public class PerfilLaboral {

    @Id
    private Integer id;

    @OneToOne
    @MapsId
    @JsonBackReference
    private PerfilCandidato perfilCandidato;

    private String name;

    // ---------------------
    // DATOS DE INCLUSIVIDAD
    // ---------------------

    // Importantes
    // Tienes credencial?
    private boolean credencial;
    // Usas silla de ruedas (y por tanto Requieres rampa acceso)
    private boolean sillaDeRuedas;
    // Requieres baño adaptado
    private boolean bañoAdaptado;
    // Indica si requieres otras adecuaciones
    private String adecuaciones;

    // Porcentajes de discapacidad
    private Integer dAuditiva;
    private Integer dFisica;
    private Integer dIntelectual;
    private Integer dPsiquica;
    private Integer dVisual;

    // Datos funcionales
    // Puedes permanecer de pie?
    private Integer permanecerPie;
    // Puedes permanecer sentado?
    private Integer permanecerSentado;
    // Puedes desplazarte en trayectos, con o sin ayuda técnica?
    private Integer desplazoTrayectos;
    // Puedes realizar actividades en diferentes pisos?
    private Integer diferentesPisos;
    // Puedes alcanzar o coger objetos en diferentes alturas?
    private Integer diferentesAlturas;
    // Puedes usar herramientas u objetos pequeños?
    private Integer objetosPequeños;
    // Puedes realizar actividades que requieren agudeza visual corta y larga
    // distancia?
    private Integer actividadesVisual;
    // Puedes realizar actividades que requieren agudeza auditiva?
    private Integer actividadesAuditiva;
    // Puedes comunicarte de manera oral y fluida?
    private Integer comunicacionOral;
    // Puedes leer y escribir?
    private Integer leerEscribir;
    // Te adaptas a situaciones de trabajo nuevas?
    private Integer situacionesNuevas;
    // Te adaptas a trabajo en equipo con varias personas?
    private Integer trabajoEquipo;
    // Te adaptas a situaciones tensiones y conflicto?
    private Integer situacionesConflicto;
    // Te adaptas para resolver problemas?
    private Integer resolverProblemas;
    // Te manejas para desarrollar tareas estresantes?
    private Integer tareasEstresantes;

    // --------------------------
    // DATOS LABORALES
    // --------------------------

    // CONDUCCIÓN
    // --------------------
    private String licencia;
    private boolean autoPropio;

    // AYUDA PARA LLENAR FORMULARIO
    // ----------------------------
    // 0: No 1: Si, parcial 2: Completamente
    private Integer ayudaFormulario;

    // EDUCACIÓN
    // -----------------
    private Integer nivelEducacional; // 0: Ed. Especial ..... 9:Postgrado

    // Titulos/carreras terminadas
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval=true)
    @JoinColumn(name = "perfil_laboral_perfil_candidato_user_id")
    @JsonManagedReference
    private Collection<Titulo> titulos;

    // Cursos realizados
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval=true)
    @JoinColumn(name = "perfil_laboral_perfil_candidato_user_id")
    @JsonManagedReference
    private Collection<Curso> cursos;

    // Experiencias laborales
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval=true)
    @JoinColumn(name = "perfil_laboral_perfil_candidato_user_id")
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

    public String getName() {
        return name;
    }

    public boolean isAutoPropio() {
        return autoPropio;
    }

    public void setAutoPropio(boolean autoPropio) {
        this.autoPropio = autoPropio;
    }

    public PerfilCandidato getPerfilCandidato() {
        return perfilCandidato;
    }

    public void setPerfilCandidato(PerfilCandidato perfilCandidato) {
        this.perfilCandidato = perfilCandidato;
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

    public Collection<Curso> getCursos() {
        return cursos;
    }

    public void setCursos(Collection<Curso> cursos) {
        this.cursos = cursos;
    }

    public Collection<Titulo> getTitulos() {
        return titulos;
    }

    public void setTitulos(Collection<Titulo> titulos) {
        this.titulos = titulos;
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

    public String getAdecuaciones() {
        return adecuaciones;
    }

    public void setAdecuaciones(String adecuaciones) {
        this.adecuaciones = adecuaciones;
    }

    public boolean isBañoAdaptado() {
        return bañoAdaptado;
    }

    public void setBañoAdaptado(boolean bañoAdaptado) {
        this.bañoAdaptado = bañoAdaptado;
    }

    public Integer getTareasEstresantes() {
        return tareasEstresantes;
    }

    public void setTareasEstresantes(Integer tareasEstresantes) {
        this.tareasEstresantes = tareasEstresantes;
    }

    public Integer getResolverProblemas() {
        return resolverProblemas;
    }

    public void setResolverProblemas(Integer resolverProblemas) {
        this.resolverProblemas = resolverProblemas;
    }

    public Integer getSituacionesConflicto() {
        return situacionesConflicto;
    }

    public void setSituacionesConflicto(Integer situacionesConflicto) {
        this.situacionesConflicto = situacionesConflicto;
    }

    public Integer getTrabajoEquipo() {
        return trabajoEquipo;
    }

    public void setTrabajoEquipo(Integer trabajoEquipo) {
        this.trabajoEquipo = trabajoEquipo;
    }

    public Integer getSituacionesNuevas() {
        return situacionesNuevas;
    }

    public void setSituacionesNuevas(Integer situacionesNuevas) {
        this.situacionesNuevas = situacionesNuevas;
    }

    public Integer getLeerEscribir() {
        return leerEscribir;
    }

    public void setLeerEscribir(Integer leerEscribir) {
        this.leerEscribir = leerEscribir;
    }

    public Integer getComunicacionOral() {
        return comunicacionOral;
    }

    public void setComunicacionOral(Integer comunicacionOral) {
        this.comunicacionOral = comunicacionOral;
    }

    public Integer getActividadesAuditiva() {
        return actividadesAuditiva;
    }

    public void setActividadesAuditiva(Integer actividadesAuditiva) {
        this.actividadesAuditiva = actividadesAuditiva;
    }

    public Integer getActividadesVisual() {
        return actividadesVisual;
    }

    public void setActividadesVisual(Integer actividadesVisual) {
        this.actividadesVisual = actividadesVisual;
    }

    public Integer getObjetosPequeños() {
        return objetosPequeños;
    }

    public void setObjetosPequeños(Integer objetosPequeños) {
        this.objetosPequeños = objetosPequeños;
    }

    public Integer getDiferentesAlturas() {
        return diferentesAlturas;
    }

    public void setDiferentesAlturas(Integer diferentesAlturas) {
        this.diferentesAlturas = diferentesAlturas;
    }

    public Integer getDiferentesPisos() {
        return diferentesPisos;
    }

    public void setDiferentesPisos(Integer diferentesPisos) {
        this.diferentesPisos = diferentesPisos;
    }

    public Integer getDesplazoTrayectos() {
        return desplazoTrayectos;
    }

    public void setDesplazoTrayectos(Integer desplazoTrayectos) {
        this.desplazoTrayectos = desplazoTrayectos;
    }

    public Integer getPermanecerSentado() {
		return permanecerSentado;
	}

	public void setPermanecerSentado(Integer permanecerSentado) {
		this.permanecerSentado = permanecerSentado;
	}

	public Integer getPermanecerPie() {
        return permanecerPie;
    }

    public void setPermanecerPie(Integer permanecerPie) {
        this.permanecerPie = permanecerPie;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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