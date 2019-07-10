package com.grupo1.ahainclusion.controller.user.items;

import java.util.Optional;

import com.grupo1.ahainclusion.auth.CurrentUser;
import com.grupo1.ahainclusion.auth.UserPrincipal;
import com.grupo1.ahainclusion.aux.payload.ApiResponse;
import com.grupo1.ahainclusion.model.PerfilLaboral;
import com.grupo1.ahainclusion.model.User;
import com.grupo1.ahainclusion.model.candidato.Curso;
import com.grupo1.ahainclusion.repository.CursoRepository;
import com.grupo1.ahainclusion.repository.PerfilCandidatoRepository;
import com.grupo1.ahainclusion.repository.PerfilLaboralRepository;
import com.grupo1.ahainclusion.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
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
    public @ResponseBody ResponseEntity<Object> add (@PathVariable("userId") Integer userId, @RequestBody Curso curso) {



        Optional<User> userOptional = userRepository.findById(userId);
        if (!userOptional.isPresent())
        return new ResponseEntity(new ApiResponse(false, "Usuario no encontrado"), HttpStatus.NOT_FOUND);

        User user = userOptional.get();
        PerfilLaboral pLaboral = user.getPerfilCandidato().getPerfilLaboral();
        curso.setPerfilLaboral(pLaboral);
        cursoRepository.save(curso);
        return new ResponseEntity(new ApiResponse(true, "Curso Agregado"), HttpStatus.OK);
    }

    // Obtener Cursos del usuario
    @GetMapping(value = "user/{userId}/curso")
    //SOLO USUARIOS CANDIDATO O AHA
    //@PreAuthorize("hasRole('ROLE_CANDIDATO') or hasRole('ROLE_AHA')")
    public @ResponseBody Iterable<Curso> getFromUser(@PathVariable("userId") Integer userId) {

        User user = userRepository.findById(userId).get();
        return user.getPerfilCandidato().getPerfilLaboral().getCursos();
    }

    //Obtener curso por id
    @GetMapping(value = "curso/{id}")
    public @ResponseBody Curso get(@PathVariable("id") Integer id) {
        return cursoRepository.findById(id).get();
    }

    //Eliminar un curso por id
    @DeleteMapping(value = "curso/{id}")
    public @ResponseBody ResponseEntity<Object> delete(@PathVariable("id") Integer id) {
        
        Optional<Curso> cursoOptional = cursoRepository.findById(id);

        if (!cursoOptional.isPresent())
        return new ResponseEntity(new ApiResponse(false, "Curso no encontrado"), HttpStatus.NOT_FOUND);

        cursoRepository.deleteById(id);

        return new ResponseEntity(new ApiResponse(true, "Curso Eliminado"), HttpStatus.OK);
    }
}