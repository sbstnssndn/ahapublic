package com.grupo1.ahainclusion.controller;

import com.grupo1.ahainclusion.model.PerfilDiscapacidad;
import com.grupo1.ahainclusion.repository.PerfilDiscapacidadRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path="/perfilDiscapacidad")
public class PerfilDiscapacidadController {

    @Autowired
    private PerfilDiscapacidadRepository perfilDiscapacidadRepository;

    // Agregar Perfil Discapacidad
    @RequestMapping(path="/add", method = RequestMethod.POST)
    public @ResponseBody String addNewPerfilDiscapacidad(@RequestParam String name,
                                                         @RequestParam boolean credencial,
                                                         @RequestParam boolean sillaRuedas,
                                                         @RequestParam Integer dAuditiva,
                                                         @RequestParam Integer dFisica,
                                                         @RequestParam Integer dIntelectual,
                                                         @RequestParam Integer dPsiquica,
                                                         @RequestParam Integer dVisual) {
    
    PerfilDiscapacidad n = new PerfilDiscapacidad();

    n.setName(name);
    n.setCredencial(credencial);
    n.setSillaDeRuedas(sillaRuedas);
    n.setdAuditiva(dAuditiva);
    n.setdFisica(dFisica);
    n.setdIntelectual(dIntelectual);
    n.setdPsiquica(dPsiquica);
    n.setdVisual(dVisual);

    perfilDiscapacidadRepository.save(n);

    return "Perfil Discapacidad Guardado";
    }

    // Obtener Perfiles Discapacidad
    @GetMapping(path="/all")
    public @ResponseBody Iterable<PerfilDiscapacidad> gettAllPerfilesDiscapacidad() {
        return perfilDiscapacidadRepository.findAll();
    }
}