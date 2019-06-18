package com.grupo1.ahainclusion.controller.user.items;

import com.grupo1.ahainclusion.auth.CurrentUser;
import com.grupo1.ahainclusion.auth.UserPrincipal;
import com.grupo1.ahainclusion.model.PerfilLaboral;
import com.grupo1.ahainclusion.model.User;
import com.grupo1.ahainclusion.model.candidato.Curso;
import com.grupo1.ahainclusion.repository.CursoRepository;
import com.grupo1.ahainclusion.repository.PerfilCandidatoRepository;
import com.grupo1.ahainclusion.repository.PerfilLaboralRepository;
import com.grupo1.ahainclusion.repository.UserRepository;

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
@RequestMapping
public class CursoController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CursoRepository cursoRepository;

    // Agregar un curso
    @PostMapping("user/{userId}/curso")
    //SOLO USUARIOS CANDIDATO O AHA
    //@PreAuthorize("hasRole('ROLE_CANDIDATO') or hasRole('ROLE_AHA')")
    public @ResponseBody String add (@CurrentUser UserPrincipal currentUser, 
                                                @RequestBody Curso curso) {


        User user = userRepository.findById(currentUser.getId()).get();
        PerfilLaboral pLaboral = user.getPerfilCandidato().getPerfilLaboral();
        curso.setPerfilLaboral(pLaboral);
        cursoRepository.save(curso);
        


        return "Curso Guardado en usuario: " + user.getPerfilCandidato().getFirstName();
    }

    // Obtener Cursos
    @GetMapping(value = "user/curso/{id}")
    //SOLO USUARIOS CANDIDATO O AHA
    //@PreAuthorize("hasRole('ROLE_CANDIDATO') or hasRole('ROLE_AHA')")
    public @ResponseBody Iterable<Curso> getAll(@PathVariable("id") Integer id) {

        User user = userRepository.findById(id).get();
        return user.getPerfilCandidato().getPerfilLaboral().getCursos();
    }

    //Obtener curso por id
    @GetMapping(value = "user/curso/{id}")
    public @ResponseBody Curso get(@PathVariable("id") Integer id) {
        return cursoRepository.findById(id).get();
    }
}