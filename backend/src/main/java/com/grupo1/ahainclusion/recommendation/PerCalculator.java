package com.grupo1.ahainclusion.recommendation;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;

import com.grupo1.ahainclusion.model.Oferta;
import com.grupo1.ahainclusion.model.PerfilLaboral;
import com.grupo1.ahainclusion.model.User;
import com.grupo1.ahainclusion.model.candidato.Experiencia;
import com.grupo1.ahainclusion.model.oferta.ExperienciaExigida;

import org.joda.time.DateTime;
import org.joda.time.Days;
import org.springframework.stereotype.Service;

@Service
public class PerCalculator {

    public Integer getPercentage(Oferta oferta, User user) {

        PerfilLaboral pLaboral = user.getPerfilCandidato().getPerfilLaboral();

        Integer score = 0;

        // Si no tiene credencial se descarta el candidato
        if(pLaboral.isCredencial()==false) {
            return 0;
        }

        Integer actividadesAuditiva = 1;
        Integer actividadesVisual = 1;
        Integer comunicacionOral = 1;
        Integer desplazoTrayectos = 1;
        Integer diferentesAlturas = 1;
        Integer diferentesPisos = 1;
        Integer disponibilidad = 1;
        Integer expectativaSueldo = 1;
        Integer leerEscribir = 1;
        Integer licencia = 1;
        Integer nivelEducacional = 1;
        Integer objetosPequenhos = 1;
        Integer permanecerPie = 1;
        Integer permanecerSentado = 1;
        Integer resolverProblemas = 1;
        Integer situacionesConflicto = 1;
        Integer situacionesNuevas = 1;
        Integer tareasEstresantes = 1;
        Integer trabajoEquipo = 1;

        Integer experiencia = 5;

        Integer maxScore =  actividadesAuditiva +
                            actividadesVisual +
                            comunicacionOral +
                            desplazoTrayectos +
                            diferentesAlturas +
                            diferentesPisos +
                            disponibilidad +
                            expectativaSueldo +
                            leerEscribir +
                            licencia +
                            nivelEducacional +
                            objetosPequenhos +
                            permanecerPie +
                            permanecerSentado +
                            resolverProblemas +
                            situacionesConflicto +
                            situacionesNuevas +
                            tareasEstresantes +
                            trabajoEquipo +
                            experiencia;

        if(pLaboral.getActividadesAuditiva() >= oferta.getActividadesAuditiva())
            score = score + actividadesAuditiva;
        if(pLaboral.getActividadesVisual() >= oferta.getActividadesVisual())
            score = score + actividadesVisual;
        if(pLaboral.getComunicacionOral() >= oferta.getComunicacionOral())
            score = score + comunicacionOral;
        if(pLaboral.getDesplazoTrayectos() >= oferta.getDesplazoTrayectos())
            score = score + desplazoTrayectos;
        if(pLaboral.getDiferentesAlturas() >= oferta.getDiferentesAlturas())
            score = score + diferentesAlturas;
        if(pLaboral.getDiferentesPisos() >= oferta.getDiferentesPisos())
            score = score + diferentesPisos;
        if(pLaboral.getDisponibilidad() >= oferta.getDisponibilidad())
            score = score + disponibilidad;
        if(pLaboral.getExpectativaSueldo() >= oferta.getRentaEstimada())
            score = score + expectativaSueldo;
        if(pLaboral.getLeerEscribir() >= oferta.getLeerEscribir())
            score = score + leerEscribir;
        if(pLaboral.getLicencia().equals(oferta.getLicencia()))
            score = score + licencia;
        if(pLaboral.getNivelEducacional() >= oferta.getNivelEducacional())
            score = score + nivelEducacional;
        if(pLaboral.getObjetosPequenhos() >= oferta.getObjetosPequenhos())
            score = score + objetosPequenhos;
        if(pLaboral.getPermanecerPie() >= oferta.getPermanecerPie())
            score = score + permanecerPie;
        if(pLaboral.getPermanecerSentado() >= oferta.getPermanecerSentado())
            score = score + permanecerSentado;
        if(pLaboral.getResolverProblemas() >= oferta.getResolverProblemas())
            score = score + resolverProblemas;
        if(pLaboral.getSituacionesConflicto() >= oferta.getSituacionesConflicto())
            score = score + situacionesConflicto;
        if(pLaboral.getSituacionesNuevas() >= oferta.getSituacionesNuevas())
            score = score + situacionesNuevas;
        if(pLaboral.getTareasEstresantes() >= oferta.getTareasEstresantes())
            score = score + tareasEstresantes;
        if(pLaboral.getTrabajoEquipo() >= oferta.getTrabajoEquipo())
            score = score + trabajoEquipo;

        if(check(pLaboral.getExperiencias(), oferta.getExperiencias())==true)
            score = score + experiencia;

        double percentage = ((score*1.0)/maxScore)*100;
        Integer out = (int) (Math.round(percentage));
        return out;
    }

    public Integer getYears(Experiencia exp) {

        Date date1 = exp.getFechaInicio();
        Date date2 = exp.getFechaFin();

        DateTime dateTime1 = new DateTime(date1);
        DateTime dateTime2 = new DateTime(date2);

        Integer days = Days.daysBetween(dateTime1, dateTime2).getDays();

        Integer years = days/360;

        return years;
    }

    public Boolean check(Collection<Experiencia> experiencias, Collection<ExperienciaExigida> experienciasExigidas) {

        ArrayList<Boolean> checks = new ArrayList<Boolean>();

        for (ExperienciaExigida expEx : experienciasExigidas) {
            for(Experiencia exp : experiencias) {
                if(exp.getArea()==expEx.getArea()) {

                    Integer years = getYears(exp);
                    if (years >= expEx.getDuracion()) {
                        checks.add(true);
                    }
                    else {
                        checks.add(false);
                    }
                }
                else {
                    checks.add(false);
                }
            }
        }

        Boolean out = true;
        for(Boolean check : checks) {
            out = out & check;
        }
        return false;
    }

}