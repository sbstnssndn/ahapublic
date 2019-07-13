package com.grupo1.ahainclusion.controller.user.items;

import java.util.Optional;

import com.grupo1.ahainclusion.auth.CurrentUser;
import com.grupo1.ahainclusion.auth.UserPrincipal;
import com.grupo1.ahainclusion.aux.payload.ApiResponse;
import com.grupo1.ahainclusion.model.User;
import com.grupo1.ahainclusion.model.candidato.Titulo;
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
public class TituloController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TituloRepository tituloRepository;


    // Agregar un titulo
    @PostMapping("user/{userId}/titulo")
    //SOLO USUARIOS CANDIDATO O AHA
    @PreAuthorize("hasRole('ROLE_CANDIDATO') or hasRole('ROLE_AHA')")
    public @ResponseBody ResponseEntity<Object> addTituloToUser (@CurrentUser UserPrincipal currentUser, @PathVariable("userId") Integer userId,
                                                 @RequestBody Titulo titulo) {

        if(!currentUser.getRole().equals("aha") && currentUser.getId()!=userId ) {
            return new ResponseEntity(new ApiResponse(false, "No autorizado para agregar titulos a este usuario"), HttpStatus.UNAUTHORIZED);
        }

        Optional<User> userOptional = userRepository.findById(userId);
        if (!userOptional.isPresent())
        return new ResponseEntity(new ApiResponse(false, "Usuario no encontrado"), HttpStatus.NOT_FOUND);

        User user = userOptional.get();
        titulo.setPerfilLaboral(user.getPerfilCandidato().getPerfilLaboral());
        tituloRepository.save(titulo);

        return new ResponseEntity(new ApiResponse(true, "Titulo Agregado"), HttpStatus.OK);
    }

    // Obtener Titulos
    @GetMapping(path = "user/{userId}/titulo")
    //SOLO USUARIOS CANDIDATO O AHA
    @PreAuthorize("hasRole('ROLE_CANDIDATO') or hasRole('ROLE_AHA')")
    public @ResponseBody Iterable<Titulo> getFromUser(@CurrentUser UserPrincipal currentUser, @PathVariable("userId") Integer userId) {

        if(!currentUser.getRole().equals("aha") && currentUser.getId()!=userId ) {
            return null;
        }

        User user = userRepository.findById(userId).get();
        return user.getPerfilCandidato().getPerfilLaboral().getTitulos();
    }

    //Obtener titulo por id
    @GetMapping(value = "titulo/{id}")
    @PreAuthorize("hasRole('ROLE_CANDIDATO') or hasRole('ROLE_AHA')")
    public @ResponseBody Titulo get(@CurrentUser UserPrincipal currentUser, @PathVariable("id") Integer id) {
        Optional<Titulo> tituloOptional = tituloRepository.findById(id);

        if (!tituloOptional.isPresent())
            return null;

        Titulo titulo = tituloOptional.get();

        if(!currentUser.getRole().equals("aha") && currentUser.getId()!=titulo.getPerfilLaboral().getId() ) {
            return null;
        }

        return titulo;
    }

    //Eliminar un curso por id
    @DeleteMapping(value = "titulo/{id}")
    @PreAuthorize("hasRole('ROLE_CANDIDATO') or hasRole('ROLE_AHA')")
    public @ResponseBody ResponseEntity<Object> delete(@CurrentUser UserPrincipal currentUser, @PathVariable("id") Integer id) {
        
        Optional<Titulo> tituloOptional = tituloRepository.findById(id);

        if (!tituloOptional.isPresent())
        return new ResponseEntity(new ApiResponse(false, "Título no encontrado"), HttpStatus.NOT_FOUND);

        Titulo titulo = tituloOptional.get();

        if(!currentUser.getRole().equals("aha") && currentUser.getId()!=titulo.getPerfilLaboral().getId() ) {
            return new ResponseEntity(new ApiResponse(false, "No autorizado para este titulo"), HttpStatus.UNAUTHORIZED);
        }


        tituloRepository.deleteById(id);

        return new ResponseEntity(new ApiResponse(true, "Título Eliminado"), HttpStatus.OK);
    }


}