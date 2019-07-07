package com.grupo1.ahainclusion.recommendation;

import com.grupo1.ahainclusion.model.Oferta;
import com.grupo1.ahainclusion.model.PerfilLaboral;
import com.grupo1.ahainclusion.model.User;

import org.springframework.stereotype.Service;

@Service
public class PerCalculator {

    public Integer getPercentage(Oferta oferta, User user) {

        PerfilLaboral pLaboral = user.getPerfilCandidato().getPerfilLaboral();

        Double score = 0.0;

        if(pLaboral.getActividadesAuditiva() >= oferta.getActividadesAuditiva())
            score = score + 1;
        if(pLaboral.getActividadesVisual() >= oferta.getActividadesVisual())
            score = score + 1;
        if(pLaboral.getComunicacionOral() >= oferta.getComunicacionOral())
            score = score + 1;
        if(pLaboral.getDesplazoTrayectos() >= oferta.getDesplazoTrayectos())
            score = score + 1;
        if(pLaboral.getDiferentesAlturas() >= oferta.getDiferentesAlturas())
            score = score + 1;
        if(pLaboral.getDiferentesPisos() >= oferta.getDiferentesPisos())
            score = score + 1;
        if(pLaboral.getDisponibilidad() >= oferta.getDisponibilidad())
            score = score + 1;
        if(pLaboral.getExpectativaSueldo() >= oferta.getRentaEstimada())
            score = score + 1;
        if(pLaboral.getLeerEscribir() >= oferta.getLeerEscribir())
            score = score + 1;
        if(pLaboral.getLicencia().equals(oferta.getLicencia()))
            score = score + 1;
        if(pLaboral.getNivelEducacional() >= oferta.getNivelEducacional())
            score = score + 1;
        if(pLaboral.getObjetosPequeños() >= oferta.getObjetosPequeños())
            score = score + 1;
        if(pLaboral.getPermanecerPie() >= oferta.getPermanecerPie())
            score = score + 1;
        if(pLaboral.getPermanecerSentado() >= oferta.getPermanecerSentado())
            score = score + 1;
        if(pLaboral.getResolverProblemas() >= oferta.getResolverProblemas())
            score = score + 1;
        if(pLaboral.getSituacionesConflicto() >= oferta.getSituacionesConflicto())
            score = score + 1;
        if(pLaboral.getSituacionesNuevas() >= oferta.getSituacionesNuevas())
            score = score + 1;
        if(pLaboral.getTareasEstresantes() >= oferta.getTareasEstresantes())
            score = score + 1;
        if(pLaboral.getTrabajoEquipo() >= oferta.getTrabajoEquipo())
            score = score + 1;

        // System.out.println(score);
        Double percentage = (score/9)*100;
        Integer out = (int) (Math.round(percentage));
        // System.out.println(percentage);
        // System.out.println(out);
        return out;
    }


}