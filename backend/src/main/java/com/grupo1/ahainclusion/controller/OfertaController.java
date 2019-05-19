package com.grupo1.ahainclusion.controller;

import com.grupo1.ahainclusion.model.Oferta;
import com.grupo1.ahainclusion.model.PerfilAccesibilidad;
import com.grupo1.ahainclusion.model.User;
import com.grupo1.ahainclusion.repository.OfertaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path="/oferta")
public class OfertaController {

    @Autowired
    private OfertaRepository ofertaRepository;

    // Agregar Oferta
    @GetMapping(path="/add")
    public @ResponseBody String addNewOferta(@RequestParam String name,
                                             @RequestParam String description,
                                             @RequestParam User user,
                                             @RequestParam PerfilAccesibilidad perfilAccesibilidad) {
    
    Oferta n = new Oferta();
    n.setName(name);
    n.setDescription(description);
    n.setUser(user);
    n.setPerfilAccesibilidad(perfilAccesibilidad);

    ofertaRepository.save(n);

    return "Oferta Guardada";
    }

    // Obtener Ofertas
    @GetMapping(path="/all")
    public @ResponseBody Iterable<Oferta> gettAllOfertas() {
        return ofertaRepository.findAll();
    }
}