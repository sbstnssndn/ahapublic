package com.grupo1.ahainclusion.controller.oferta;

import com.grupo1.ahainclusion.model.Oferta;
import com.grupo1.ahainclusion.model.User;
import com.grupo1.ahainclusion.repository.OfertaRepository;
import com.grupo1.ahainclusion.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping
public class OfertaController {

    @Autowired
    private OfertaRepository ofertaRepository;

    @Autowired
    private UserRepository userRepository;

    // Obtener Ofertas de usuario
    @GetMapping(value = "user/{userId}/oferta")
    public @ResponseBody Iterable<Oferta> getAll(@PathVariable("userId") Integer userId) {

        User user = userRepository.findById(userId).get();    
        return user.getPerfilEmpresa().getOfertas();
    }

    //Obtener una oferta por id
    @GetMapping(value = "oferta/{id}")
    public @ResponseBody Oferta get(@PathVariable("id") Integer id) {
        return ofertaRepository.findById(id).get();
    }

    // Agregar Oferta
    @PostMapping(value = "user/{userId}/oferta")
    public @ResponseBody String addNewOferta(@RequestBody Oferta oferta) {

        ofertaRepository.save(oferta);

        return "Oferta Guardada";
    }
}