package com.grupo1.ahainclusion.controller;

import com.grupo1.ahainclusion.model.PerfilLaboral;
import com.grupo1.ahainclusion.repository.PerfilLaboralRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path="/perfilDiscapacidad")
public class PerfilLaboralController {

    @Autowired
    private PerfilLaboralRepository perfilDiscapacidadRepository;

    // Objeto "en blanco" para un nuevo perfil de discapacidad
    @RequestMapping(path="/new", method = RequestMethod.GET)
    public @ResponseBody PerfilLaboral NewPerfilDiscapacidad(){

        PerfilLaboral p = new PerfilLaboral();

        return p;
    }

    // Agregar Perfil Discapacidad
    @RequestMapping(path="/add", method = RequestMethod.POST)
    public @ResponseBody String addNewPerfilDiscapacidad(@RequestBody PerfilLaboral perfilDiscapacidad) {
    
        perfilDiscapacidadRepository.save(perfilDiscapacidad);

        return "Perfil Discapacidad Guardado";
    }

    // Obtener Perfiles Discapacidad
    @GetMapping(path="/all")
    public @ResponseBody Iterable<PerfilLaboral> gettAllPerfilesDiscapacidad() {
        return perfilDiscapacidadRepository.findAll();
    }
}