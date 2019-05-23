package com.grupo1.ahainclusion.controller;

import com.grupo1.ahainclusion.model.PerfilAccesibilidad;
import com.grupo1.ahainclusion.repository.PerfilAccesibilidadRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path="/perfilAccesibilidad")
public class PerfilAccesibilidadController {

    @Autowired
    private PerfilAccesibilidadRepository perfilAccesibilidadRepository;

    // Agregar Perfil Accesibilidad
    @RequestMapping(path="/add", method = RequestMethod.POST)
    public @ResponseBody String addNewPerfilAccesibilidad(@RequestParam String name) {
    
    PerfilAccesibilidad n = new PerfilAccesibilidad();
    n.setName(name);

    perfilAccesibilidadRepository.save(n);

    return "Perfil Accesibilidad Guardado";
    }

    // Obtener Perfiles Accesibilidad
    @GetMapping(path="/all")
    public @ResponseBody Iterable<PerfilAccesibilidad> gettAllPerfilesAccesibilidad() {
        return perfilAccesibilidadRepository.findAll();
    }
}