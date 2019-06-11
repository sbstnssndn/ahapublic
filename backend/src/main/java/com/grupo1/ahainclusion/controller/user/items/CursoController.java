package com.grupo1.ahainclusion.controller.user.items;

import com.grupo1.ahainclusion.auth.CurrentUser;
import com.grupo1.ahainclusion.auth.UserPrincipal;
import com.grupo1.ahainclusion.model.User;
import com.grupo1.ahainclusion.model.candidato.Curso;
import com.grupo1.ahainclusion.repository.CursoRepository;
import com.grupo1.ahainclusion.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path = "/user")
public class CursoController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CursoRepository cursoRepository;

    // Agregar un curso
    @RequestMapping(path="/curso", method = RequestMethod.POST)
    //SOLO USUARIOS CANDIDATO O AHA
    //@PreAuthorize("hasRole('ROLE_CANDIDATO') or hasRole('ROLE_AHA')")
    public @ResponseBody String addCursoToUser (@CurrentUser UserPrincipal currentUser, 
                                                @RequestBody Curso curso) {


        User user = userRepository.findById(currentUser.getId()).get();
        curso.setPerfilLaboral(user.getPerfilCandidato().getPerfilLaboral());
        cursoRepository.save(curso);

        return "Curso Guardado en usuario: " + user.getPerfilCandidato().getFirstName();
    }

    // Obtener Cursos
    @RequestMapping(path = "/curso", method = RequestMethod.GET)
    //SOLO USUARIOS CANDIDATO O AHA
    //@PreAuthorize("hasRole('ROLE_CANDIDATO') or hasRole('ROLE_AHA')")
    public @ResponseBody Iterable<Curso> getCursos(@CurrentUser UserPrincipal currentUser) {

        User user = userRepository.findById(currentUser.getId()).get();
        return user.getPerfilCandidato().getPerfilLaboral().getCursos();
    }

}