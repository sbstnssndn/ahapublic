package com.grupo1.ahainclusion.controller.oferta;

import java.util.Optional;

import com.grupo1.ahainclusion.auth.CurrentUser;
import com.grupo1.ahainclusion.auth.UserPrincipal;
import com.grupo1.ahainclusion.aux.payload.ApiResponse;
import com.grupo1.ahainclusion.model.Oferta;
import com.grupo1.ahainclusion.model.User;
import com.grupo1.ahainclusion.model.candidato.Titulo;
import com.grupo1.ahainclusion.model.oferta.ExperienciaExigida;
import com.grupo1.ahainclusion.repository.ExperienciaExigidaRepository;
import com.grupo1.ahainclusion.repository.OfertaRepository;
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
public class ExperienciaExigidaController {

    @Autowired
    private OfertaRepository ofertaRepository;

    @Autowired
    private ExperienciaExigidaRepository experienciaExigidaRepository;


    // Agregar una experiencia exigida
    @PostMapping(path="/oferta/{ofertaId}/experienciaExigida")
    //SOLO USUARIOS EMPRESA O AHA
    @PreAuthorize("hasRole('ROLE_EMPRESA') or hasRole('ROLE_AHA')")
    public @ResponseBody ResponseEntity<Object> add(@CurrentUser UserPrincipal currentUser, @PathVariable("ofertaId") Integer ofertaId, @RequestBody ExperienciaExigida expExigida) {

        Optional<Oferta> ofertaOptional = ofertaRepository.findById(ofertaId);
        if (!ofertaOptional.isPresent())
        return new ResponseEntity(new ApiResponse(false, "Oferta no encontrada"), HttpStatus.NOT_FOUND);

        Oferta oferta = ofertaOptional.get();

        if(!currentUser.getRole().equals("aha") && currentUser.getId()!=oferta.getPerfilEmpresa().getId()) {
            return new ResponseEntity(new ApiResponse(false, "No autorizado para agregar experiencias exigidas a esta oferta"), HttpStatus.UNAUTHORIZED);
        }

        expExigida.setOferta(oferta);
        experienciaExigidaRepository.save(expExigida);

        return new ResponseEntity(new ApiResponse(true, "Experiencia exigida Agregada a la oferta"), HttpStatus.OK);
    }

    // Obtener Experiencias exigidas
    @GetMapping(path = "/oferta/{ofertaId}/experienciaExigida")
    //SOLO USUARIOS CANDIDATO O AHA
    @PreAuthorize("hasRole('ROLE_EMPRESA') or hasRole('ROLE_AHA')")
    public @ResponseBody Iterable<ExperienciaExigida> getFromOferta(@CurrentUser UserPrincipal currentUser, @PathVariable("ofertaId") Integer ofertaId) {

        Oferta oferta = ofertaRepository.findById(ofertaId).get();

        if(!currentUser.getRole().equals("aha") && currentUser.getId()!=oferta.getPerfilEmpresa().getId()) {
            return null;
        }

        return experienciaExigidaRepository.findByOferta(oferta);

    }

    //Obtener Experiencia Exigida por id
    @GetMapping(value = "experienciaExigida/{id}")
    @PreAuthorize("hasRole('ROLE_EMPRESA') or hasRole('ROLE_AHA')")
    public @ResponseBody ExperienciaExigida get(@CurrentUser UserPrincipal currentUser, @PathVariable("id") Integer id) {

        Optional<ExperienciaExigida> expExOptional = experienciaExigidaRepository.findById(id);

        if (!expExOptional.isPresent())
            return null;

        ExperienciaExigida expEx = expExOptional.get();

        if(!currentUser.getRole().equals("aha") && currentUser.getId()!=expEx.getOferta().getPerfilEmpresa().getId() ) {
            return null;
        }

        return expEx;
    }
    
    //Eliminar una experiencia exigida por id
    @DeleteMapping(value = "experienciaExigida/{id}")
    @PreAuthorize("hasRole('ROLE_EMPRESA') or hasRole('ROLE_AHA')")
    public @ResponseBody ResponseEntity<Object> delete(@CurrentUser UserPrincipal currentUser, @PathVariable("id") Integer id) {
        
        Optional<ExperienciaExigida> expExigidaOptional = experienciaExigidaRepository.findById(id);

        if (!expExigidaOptional.isPresent())
        return new ResponseEntity(new ApiResponse(false, "Experiencia exigida no encontrada"), HttpStatus.NOT_FOUND);

        ExperienciaExigida expEx = expExigidaOptional.get();

        if(!currentUser.getRole().equals("aha") && currentUser.getId()!=expEx.getOferta().getPerfilEmpresa().getId() ) {
            return new ResponseEntity(new ApiResponse(false, "No autorizado a eliminar esta experiencia exigida"), HttpStatus.UNAUTHORIZED);
        }

        experienciaExigidaRepository.deleteById(id);

        return new ResponseEntity(new ApiResponse(true, "Experiencia exigida Eliminada"), HttpStatus.OK);
    } 

}