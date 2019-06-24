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
    @PostMapping(path="(/oferta/{ofertaId}/experiencia")
    //SOLO USUARIOS EMPRESA O AHA
    //@PreAuthorize("hasRole('ROLE_EMPRESA') or hasRole('ROLE_AHA')")
    public @ResponseBody String add(@PathVariable("ofertaId") Integer ofertaId, @RequestBody ExperienciaExigida expExigida) {

        Oferta oferta = ofertaRepository.findById(ofertaId).get();
        expExigida.setOferta(oferta);
        experienciaExigidaRepository.save(expExigida);

        return "Experiencia agregada a la oferta";
    }

    // Obtener Experiencias exigidas
    @GetMapping(path = "/oferta/{ofertaId}/experiencia")
    //SOLO USUARIOS CANDIDATO O AHA
    //@PreAuthorize("hasRole('ROLE_CANDIDATO') or hasRole('ROLE_AHA')")
    public @ResponseBody Iterable<ExperienciaExigida> getFromOferta(@PathVariable("ofertaId") Integer ofertaId) {

        Oferta oferta = ofertaRepository.findById(ofertaId).get();
        return experienciaExigidaRepository.findByOferta(oferta);

    }

    //Obtener Experiencia Exigida por id
    @GetMapping(value = "experienciaExigida/{id}")
    public @ResponseBody ExperienciaExigida get(@PathVariable("id") Integer id) {
        return experienciaExigidaRepository.findById(id).get();
    }
    
    //Eliminar una experiencia exigida por id
    @DeleteMapping(value = "experienciaExigida/{id}")
    public @ResponseBody ResponseEntity<Object> delete(@PathVariable("id") Integer id) {
        
        Optional<ExperienciaExigida> expExigidaOptional = experienciaExigidaRepository.findById(id);

        if (!expExigidaOptional.isPresent())
        return new ResponseEntity(new ApiResponse(false, "Experiencia exigida no encontrada"), HttpStatus.NOT_FOUND);

        experienciaExigidaRepository.deleteById(id);

        return new ResponseEntity(new ApiResponse(true, "Experiencia exigida Eliminada"), HttpStatus.OK);
    } 

}