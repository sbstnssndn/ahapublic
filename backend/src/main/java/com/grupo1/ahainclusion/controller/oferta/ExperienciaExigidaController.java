package com.grupo1.ahainclusion.controller.oferta;

import com.grupo1.ahainclusion.auth.CurrentUser;
import com.grupo1.ahainclusion.auth.UserPrincipal;
import com.grupo1.ahainclusion.model.Oferta;
import com.grupo1.ahainclusion.model.User;
import com.grupo1.ahainclusion.model.candidato.Titulo;
import com.grupo1.ahainclusion.model.oferta.ExperienciaExigida;
import com.grupo1.ahainclusion.repository.ExperienciaExigidaRepository;
import com.grupo1.ahainclusion.repository.OfertaRepository;
import com.grupo1.ahainclusion.repository.TituloRepository;
import com.grupo1.ahainclusion.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path = "/oferta")
public class ExperienciaExigidaController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OfertaRepository ofertaRepository;

    @Autowired
    private ExperienciaExigidaRepository experienciaExigidaRepository;


    // Agregar una experiencia exigida
    @RequestMapping(path="/experiencia", method = RequestMethod.POST)
    //SOLO USUARIOS EMPRESA O AHA
    //@PreAuthorize("hasRole('ROLE_EMPRESA') or hasRole('ROLE_AHA')")
    public @ResponseBody String add (@RequestBody ExperienciaExigida expExigida) {

        experienciaExigidaRepository.save(expExigida);

        return "Experiencia agregada a la oferta";
    }

    // Obtener Experiencias exigidas
    @RequestMapping(path = "/experiencia", method = RequestMethod.GET)
    //SOLO USUARIOS CANDIDATO O AHA
    //@PreAuthorize("hasRole('ROLE_CANDIDATO') or hasRole('ROLE_AHA')")
    public @ResponseBody Iterable<ExperienciaExigida> getTitulos(@RequestBody Oferta oferta) {

        return experienciaExigidaRepository.findByOferta(oferta);

    }


}