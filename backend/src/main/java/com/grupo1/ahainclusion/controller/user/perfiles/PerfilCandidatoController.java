package com.grupo1.ahainclusion.controller.user.perfiles;

import java.util.Optional;

import com.grupo1.ahainclusion.auth.CurrentUser;
import com.grupo1.ahainclusion.auth.UserPrincipal;
import com.grupo1.ahainclusion.aux.payload.ApiResponse;
import com.grupo1.ahainclusion.model.PerfilCandidato;
import com.grupo1.ahainclusion.model.User;
import com.grupo1.ahainclusion.repository.PerfilCandidatoRepository;
import com.grupo1.ahainclusion.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path = "/user")
public class PerfilCandidatoController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PerfilCandidatoRepository perfilCandidatoRepository;


    // Agregar Perfil Candidato
    @PostMapping(path = "/{userId}/perfilCandidato")
    //SOLO USUARIOS CANDIDATO O AHA
    //@PreAuthorize("hasRole('ROLE_CANDIDATO') or hasRole('ROLE_AHA')")
    public @ResponseBody String addNewPerfilCandidato(@PathVariable("userId") Integer userId, @RequestBody PerfilCandidato perfilCandidato) {

        User user = userRepository.findById(userId).get();
        perfilCandidato.setEmail2(perfilCandidato.getEmail2().toLowerCase());
        perfilCandidato.setUser(user);
        perfilCandidatoRepository.save(perfilCandidato);
        return "Perfil Candidato Guardado";
    }
    
    // Obtener Perfil Candidato
    @GetMapping(path = "/{userId}/perfilCandidato")
    //SOLO USUARIOS CANDIDATO O AHA
    //@PreAuthorize("hasRole('ROLE_CANDIDATO') or hasRole('ROLE_AHA')")
    public @ResponseBody PerfilCandidato getPerfilCandidato(@PathVariable("userId") Integer userId) {

        User user = userRepository.findById(userId).get();
        PerfilCandidato pCandidato = user.getPerfilCandidato();

        return pCandidato;
    
    }

    // Actualizar Perfil Candidato
    @PutMapping(path = "/{userId}/perfilCandidato")
    //SOLO USUARIOS CANDIDATO O AHA
    //@PreAuthorize("hasRole('ROLE_AHA') or hasRole('ROLE_CANDIDATO')")
    public @ResponseBody ResponseEntity<Object> update(@PathVariable("userId") Integer userId, @RequestBody PerfilCandidato pCandidatoNew) {

        
        Optional<PerfilCandidato> pCandidatoOptional = perfilCandidatoRepository.findById(userId);

        if (!pCandidatoOptional.isPresent())
        return new ResponseEntity(new ApiResponse(false, "Perfil Candidato no encontrado"), HttpStatus.NOT_FOUND);

        PerfilCandidato pCandidato = pCandidatoOptional.get();

        pCandidato.setFirstName(pCandidatoNew.getFirstName());
        pCandidato.setLastName(pCandidatoNew.getLastName());
        pCandidato.setRut(pCandidatoNew.getRut());
        pCandidato.setDireccion(pCandidatoNew.getDireccion());
        pCandidato.setEmail2(pCandidatoNew.getEmail2().toLowerCase());
        pCandidato.setFechaNacimiento(pCandidatoNew.getFechaNacimiento());
        pCandidato.setGenero(pCandidatoNew.getGenero());
        pCandidato.setNacionalidad(pCandidatoNew.getNacionalidad());
        pCandidato.setTelefono1(pCandidatoNew.getTelefono1());
        pCandidato.setTelefono2(pCandidatoNew.getTelefono2());

        perfilCandidatoRepository.save(pCandidato);

        return new ResponseEntity(new ApiResponse(true, "Perfil Candidato Actualizado"), HttpStatus.OK);
    }
}