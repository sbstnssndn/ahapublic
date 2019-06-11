package com.grupo1.ahainclusion.controller.user.perfiles;

import com.grupo1.ahainclusion.model.PerfilCandidato;
import com.grupo1.ahainclusion.repository.PerfilCandidatoRepository;
import com.grupo1.ahainclusion.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path = "/user")
public class PerfilCandidatoController {

    @Autowired
    private UserRepository UserRepository;

    @Autowired
    private PerfilCandidatoRepository perfilCandidatoRepository;


    // Agregar Perfil Candidato
    @RequestMapping(path = "/perfilCandidato", method = RequestMethod.POST)
    //SOLO USUARIOS CANDIDATO O AHA
    //@PreAuthorize("hasRole('ROLE_CANDIDATO') or hasRole('ROLE_AHA')")
    public @ResponseBody String addNewPerfilCandidato(@RequestBody PerfilCandidato perfilCandidato) {

        perfilCandidatoRepository.save(perfilCandidato);
        return "Perfil Laboral Guardado";
    }
    
}