package com.grupo1.ahainclusion.controller;

import java.util.ArrayList;
import java.util.List;

import com.grupo1.ahainclusion.model.Oferta;
import com.grupo1.ahainclusion.recommendation.RecGenerator;
import com.grupo1.ahainclusion.recommendation.Recommendation;
import com.grupo1.ahainclusion.repository.OfertaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path="/recommendation")
public class RecommendationController {

    @Autowired
    private OfertaRepository ofertaRepository;

    @Autowired
    private RecGenerator recgen = new RecGenerator();

    // Obtener Recomendaciones
    @GetMapping(path="/get")
    public @ResponseBody Iterable<Recommendation> getRecommendations(@RequestBody Oferta oferta) {
        List<Recommendation> recommendations = new ArrayList<>();

        recommendations = recgen.generate(oferta, 5);

        return recommendations;
    }


}