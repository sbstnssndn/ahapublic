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
        //Tienes credencial?
        private boolean credencial;
        // Usas silla de ruedas (y por tanto Requieres rampa acceso)
        private boolean sillaDeRuedas;
        //Requieres baño adaptado
        private boolean bañoAdaptado;
        //Indica si requieres otras adecuaciones
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

    public String getName() {
        return name;
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