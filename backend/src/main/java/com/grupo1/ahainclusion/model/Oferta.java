package com.grupo1.ahainclusion.model;

import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.grupo1.ahainclusion.model.oferta.ExperienciaExigida;

@Entity
@Table(name = "oferta")
public class Oferta {
    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JsonBackReference
    private PerfilEmpresa perfilEmpresa;

    private String name;
    private String description;

    

    // ---------------------
    // DATOS DE ACCESIBILIDAD
    // ---------------------

    // Importantes
    // Credencial no se guarda porque no se compara, siempre se requiere tenerla
    // private boolean credencial;
    // tienes acceso para silla de ruedas?
    private boolean sillaDeRuedas;
    // Tienes baño adaptado?
    private boolean bañoAdaptado;

    // ---------------------
    // DATOS DE EXIGENCIA FISICA
    // ---------------------

    // Datos funcionales
    // Cuanto requieres que el candidato permanezca de pie?
    private Integer permanecerPie;
    // Cuanto requieres que el candidato permanezca sentado?
    private Integer permanecerSentado;
    // Cuanto requieres que el candidato pueda desplazarse? con o sin ayuda?
    private Integer desplazoTrayectos;
    // Cuanto equieres que el candidato pueda desplazarse entre diferentes pisos?
    private Integer diferentesPisos;
    // Cuanto requieres que el candidato pueda acceder a diferentes alturas?
    private Integer diferentesAlturas;
    // Cuanto requieres que el candidato maneje objetos pequeños?
    private Integer objetosPequeños;
    // Cuanto requieres que el candidato pueda realizar actividades de agudeza
    // visual?
    private Integer actividadesVisual;
    // Cuanto requieres que el candidato pueda realizar actividades de agudeza
    // auditiva?
    private Integer actividadesAuditiva;
    // Cuanto requieres que el candidato pueda comunicarse de manera oral?
    private Integer comunicacionOral;
    // Cuanto requieres que el candidato pueda leer y escribir?
    private Integer leerEscribir;
    // Cuanto requieres que el candidato pueda acomodarse a situaciones nuevas?
    private Integer situacionesNuevas;
    // Cuanto requieres que el candidato pueda acomodarse a trabajo en equipo?
    private Integer trabajoEquipo;
    // Cuanto requieres que el candidato se adapte a situaciones de conflicto y
    // tension?
    private Integer situacionesConflicto;
    // Cuanto requieres que el candidato pueda resolver problemas?
    private Integer resolverProblemas;
    // Cuanto requieres que el candidato pueda realizar tareas estresantes?
    private Integer tareasEstresantes;

    // --------------------------
    // EXIGENCIAS LABORALES
    // --------------------------

    // LICENCIA DE CONDUCIR
    // Que clase de licencia requiere tener el candidato para el cargo?
    private String licencia;

    // EDUCACIÓN
    // Que nivel educacional mínimo debe tener el candidato?
    private Integer nivelEducacional; // 0: Ed. Especial ..... 9:Postgrado

    // Experiencias laborales
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "oferta_id")
    @JsonManagedReference
    private Collection<ExperienciaExigida> experiencias;

    public String getDescription() {
        return description;
    }

    public Integer getNivelEducacional() {
        return nivelEducacional;
    }

    public void setNivelEducacional(Integer nivelEducacional) {
        this.nivelEducacional = nivelEducacional;
    }

    public String getLicencia() {
        return licencia;
    }

    public void setLicencia(String licencia) {
        this.licencia = licencia;
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

    public boolean isBañoAdaptado() {
        return bañoAdaptado;
    }

    public void setBañoAdaptado(boolean bañoAdaptado) {
        this.bañoAdaptado = bañoAdaptado;
    }

    public boolean isSillaDeRuedas() {
        return sillaDeRuedas;
    }

    public void setSillaDeRuedas(boolean sillaDeRuedas) {
        this.sillaDeRuedas = sillaDeRuedas;
    }

    public PerfilEmpresa getPerfilEmpresa() {
        return perfilEmpresa;
    }

    public void setPerfilEmpresa(PerfilEmpresa perfilEmpresa) {
        this.perfilEmpresa = perfilEmpresa;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    
}