package com.grupo1.ahainclusion.controller.user.items;

import java.util.Optional;

import com.grupo1.ahainclusion.auth.CurrentUser;
import com.grupo1.ahainclusion.auth.UserPrincipal;
import com.grupo1.ahainclusion.aux.payload.ApiResponse;
import com.grupo1.ahainclusion.model.PerfilLaboral;
import com.grupo1.ahainclusion.model.User;
import com.grupo1.ahainclusion.model.candidato.Curso;
import com.grupo1.ahainclusion.model.candidato.Experiencia;
import com.grupo1.ahainclusion.repository.CursoRepository;
import com.grupo1.ahainclusion.repository.ExperienciaRepository;
import com.grupo1.ahainclusion.repository.PerfilCandidatoRepository;
import com.grupo1.ahainclusion.repository.PerfilLaboralRepository;
import com.grupo1.ahainclusion.repository.TituloRepository;
import com.grupo1.ahainclusion.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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
public class ExperienciaController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ExperienciaRepository experienciaRepository;

    // Agregar una Experiencia
    @PostMapping(path="user/{userId}/experiencia")
    //SOLO USUARIOS CANDIDATO O AHA
    @PreAuthorize("hasRole('ROLE_CANDIDATO') or hasRole('ROLE_AHA')")
    public @ResponseBody ResponseEntity<Object> addExperienciaToUser (@CurrentUser UserPrincipal currentUser, @PathVariable("userId") Integer userId,
                                                      @RequestBody Experiencia experiencia) {

        if(!currentUser.getRole().equals("aha") && currentUser.getId()!=userId ) {
            return new ResponseEntity(new ApiResponse(false, "No autorizado para agregar experiencias a este usuario"), HttpStatus.UNAUTHORIZED);
        }
                                                

        Optional<User> userOptional = userRepository.findById(userId);
        if (!userOptional.isPresent())
        return new ResponseEntity(new ApiResponse(false, "Usuario no encontrado"), HttpStatus.NOT_FOUND);



        User user = userOptional.get();
        PerfilLaboral pLaboral = user.getPerfilCandidato().getPerfilLaboral();
        experiencia.setPerfilLaboral(pLaboral);
        experienciaRepository.save(experiencia);

        return new ResponseEntity(new ApiResponse(true, "Experiencia Agregada"), HttpStatus.OK);
    }

    // Obtener Experiencias del usuario
    @GetMapping(path = "user/{userId}/experiencia")
    //SOLO USUARIOS CANDIDATO O AHA
    @PreAuthorize("hasRole('ROLE_CANDIDATO') or hasRole('ROLE_AHA')")
    public @ResponseBody Iterable<Experiencia> getFromUser(@CurrentUser UserPrincipal currentUser, @PathVariable("userId") Integer userId) {

        if(!currentUser.getRole().equals("aha") && currentUser.getId()!=userId ) {
            return null;
        }

        User user = userRepository.findById(userId).get();
        return user.getPerfilCandidato().getPerfilLaboral().getExperiencias();
    }

    // Obtener experiencia por id
    @GetMapping(path = "experiencia/{id}")
    @PreAuthorize("hasRole('ROLE_CANDIDATO') or hasRole('ROLE_AHA')")
    public @ResponseBody Experiencia get(@CurrentUser UserPrincipal currentUser, @PathVariable("id") Integer id) {

        
        Optional<Experiencia> experienciaOptional = experienciaRepository.findById(id);

        if (!experienciaOptional.isPresent())
            return null;

        Experiencia exp = experienciaOptional.get();

        if(!currentUser.getRole().equals("aha") && currentUser.getId()!=exp.getPerfilLaboral().getId() ) {
            return null;
        }

        return exp;
    }

    //Eliminar una experiencia por id
    @DeleteMapping(value = "experiencia/{id}")
    @PreAuthorize("hasRole('ROLE_CANDIDATO') or hasRole('ROLE_AHA')")
    public @ResponseBody ResponseEntity<Object> delete(@CurrentUser UserPrincipal currentUser, @PathVariable("id") Integer id) {
        
        Optional<Experiencia> experienciaOptional = experienciaRepository.findById(id);

        if (!experienciaOptional.isPresent())
        return new ResponseEntity(new ApiResponse(false, "Experiencia no encontrada"), HttpStatus.NOT_FOUND);

        Experiencia exp = experienciaOptional.get();

        if(!currentUser.getRole().equals("aha") && currentUser.getId()!=exp.getPerfilLaboral().getId() ) {
            return new ResponseEntity(new ApiResponse(false, "No autorizado para esta experiencia"), HttpStatus.UNAUTHORIZED);
        }

        experienciaRepository.deleteById(id);

        return new ResponseEntity(new ApiResponse(true, "Experiencia Eliminada"), HttpStatus.OK);
    }

}