package com.grupo1.ahainclusion.controller.user.items;

import com.grupo1.ahainclusion.auth.CurrentUser;
import com.grupo1.ahainclusion.auth.UserPrincipal;
import com.grupo1.ahainclusion.model.PerfilLaboral;
import com.grupo1.ahainclusion.model.User;
import com.grupo1.ahainclusion.model.candidato.Curso;
import com.grupo1.ahainclusion.model.candidato.Experiencia;
import com.grupo1.ahainclusion.repository.CursoRepository;
import com.grupo1.ahainclusion.repository.ExperienciaRepository;
import com.grupo1.ahainclusion.repository.PerfilCandidatoRepository;
import com.grupo1.ahainclusion.repository.PerfilLaboralRepository;
import com.grupo1.ahainclusion.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path = "/user")
public class ExperienciaController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ExperienciaRepository experienciaRepository;

    // Agregar una Experiencia
    @RequestMapping(path="/experiencia", method = RequestMethod.POST)
    //SOLO USUARIOS CANDIDATO O AHA
    //@PreAuthorize("hasRole('ROLE_CANDIDATO') or hasRole('ROLE_AHA')")
    public @ResponseBody String addExperienciaToUser (@CurrentUser UserPrincipal currentUser, 
                                                      @RequestBody Experiencia experiencia) {


        User user = userRepository.findById(currentUser.getId()).get();
        PerfilLaboral pLaboral = user.getPerfilCandidato().getPerfilLaboral();
        experiencia.setPerfilLaboral(pLaboral);
        experienciaRepository.save(experiencia);
        


        return "Experiencia Guardado en usuario: " + user.getPerfilCandidato().getFirstName();
    }

    // Obtener Experiencia
    @RequestMapping(path = "/experiencia", method = RequestMethod.GET)
    //SOLO USUARIOS CANDIDATO O AHA
    //@PreAuthorize("hasRole('ROLE_CANDIDATO') or hasRole('ROLE_AHA')")
    public @ResponseBody Iterable<Experiencia> getExperiencias(@CurrentUser UserPrincipal currentUser) {

        User user = userRepository.findById(currentUser.getId()).get();
        return user.getPerfilCandidato().getPerfilLaboral().getExperiencias();
    }

}