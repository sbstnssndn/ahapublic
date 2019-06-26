package com.grupo1.ahainclusion.recommendation;

import com.grupo1.ahainclusion.model.Oferta;
import com.grupo1.ahainclusion.model.PerfilLaboral;
import com.grupo1.ahainclusion.model.User;

import org.springframework.stereotype.Service;

@Service
public class PerCalculator {

    public Integer getPercentage(Oferta oferta, User user) {

        PerfilLaboral pLaboral = user.getPerfilCandidato().getPerfilLaboral();

        return 0;
    }


}