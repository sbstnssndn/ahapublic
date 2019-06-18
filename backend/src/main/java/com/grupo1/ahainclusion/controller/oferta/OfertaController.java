package com.grupo1.ahainclusion.controller.oferta;

import com.grupo1.ahainclusion.model.Oferta;
import com.grupo1.ahainclusion.repository.OfertaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path="/oferta")
public class OfertaController {

    @Autowired
    private OfertaRepository ofertaRepository;

    // Obtener Ofertas
    @GetMapping
    public @ResponseBody Iterable<Oferta> getAll() {
        return ofertaRepository.findAll();
    }

    //Obtener una oferta por id
    @GetMapping(value = "/{id}")
    public @ResponseBody Oferta get(@PathVariable("id") Integer id) {
        return ofertaRepository.findById(id).get();
    }

    // Agregar Oferta
    @PostMapping
    public @ResponseBody String addNewOferta(@RequestBody Oferta oferta) {

        ofertaRepository.save(oferta);

        return "Oferta Guardada";
    }
}