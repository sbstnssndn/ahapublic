package com.grupo1.ahainclusion.controller;


import com.grupo1.ahainclusion.model.Oferta;
import com.grupo1.ahainclusion.repository.OfertaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path="/oferta")
public class OfertaController {

    @Autowired
    private OfertaRepository ofertaRepository;

    // Agregar Oferta
    @RequestMapping(path="", method = RequestMethod.POST)
    public @ResponseBody String addNewOferta(@RequestBody Oferta oferta) {

        ofertaRepository.save(oferta);

        return "Oferta Guardada";
    }

    // Obtener Ofertas
    @RequestMapping(path="", method = RequestMethod.GET)
    public @ResponseBody Iterable<Oferta> gettAllOfertas() {
        return ofertaRepository.findAll();
    }
}