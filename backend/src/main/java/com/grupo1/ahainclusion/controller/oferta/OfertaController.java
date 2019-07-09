package com.grupo1.ahainclusion.controller.oferta;

import java.util.Optional;

import com.grupo1.ahainclusion.aux.payload.ApiResponse;
import com.grupo1.ahainclusion.model.Oferta;
import com.grupo1.ahainclusion.model.User;
import com.grupo1.ahainclusion.repository.OfertaRepository;
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
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping
public class OfertaController {

    @Autowired
    private OfertaRepository ofertaRepository;

    @Autowired
    private UserRepository userRepository;

    // Obtener Ofertas de usuario
    @GetMapping(value = "user/{userId}/oferta")
    public @ResponseBody Iterable<Oferta> getAllFromUser(@PathVariable("userId") Integer userId) {

        User user = userRepository.findById(userId).get();
        if(user.getPerfilEmpresa()!=null) return user.getPerfilEmpresa().getOfertas();
        return null;
    }

    // Obtener todas las ofertas
    @GetMapping(value = "/oferta/all")
    public @ResponseBody Iterable<Oferta> getAll() {
        return ofertaRepository.findAll();
    }

    // Obtener usuario de una oferta
    @GetMapping(value = "oferta/{id}/user")
    public @ResponseBody User getUserFromOferta(@PathVariable("id") Integer id) {
        
        Optional<Oferta> ofertaOptional = ofertaRepository.findById(id);

        if (!ofertaOptional.isPresent())
        return null;

        Oferta oferta = ofertaOptional.get();
        Integer userId = oferta.getPerfilEmpresa().getId();

        Optional<User> userOptional = userRepository.findById(userId);

        if (!userOptional.isPresent())
        return null;

        User user = userOptional.get();

        return user;
    }


    //Obtener una oferta por id
    @GetMapping(value = "oferta/{id}")
    public @ResponseBody Oferta get(@PathVariable("id") Integer id) {
        return ofertaRepository.findById(id).get();
    }

    // Agregar Oferta
    @PostMapping(value = "user/{userId}/oferta")
    public @ResponseBody String addNewOferta(@RequestBody Oferta oferta) {

        ofertaRepository.save(oferta);

        return "Oferta Guardada";
    }

    // Actualizar Perfil Empresa
    @PutMapping(path = "oferta/{id}")
    //SOLO USUARIOS Empresa o AHA
    //@PreAuthorize("hasRole('ROLE_AHA') or hasRole('ROLE_EMPRESA')")
    public @ResponseBody ResponseEntity<Object> update(@PathVariable("id") Integer id, @RequestBody Oferta ofertaNew) {

        
        Optional<Oferta> ofertaOptional = ofertaRepository.findById(id);

        if (!ofertaOptional.isPresent())
        return new ResponseEntity(new ApiResponse(false, "Oferta no encontrada"), HttpStatus.NOT_FOUND);

        Oferta oferta = ofertaOptional.get();

        oferta.setActividadesAuditiva(ofertaNew.getActividadesAuditiva());
        oferta.setActividadesVisual(ofertaNew.getActividadesVisual());
        oferta.setBañoAdaptado(ofertaNew.isBañoAdaptado());
        oferta.setComunicacionOral(ofertaNew.getComunicacionOral());
        oferta.setDescription(ofertaNew.getDescription());
        oferta.setDesplazoTrayectos(ofertaNew.getDesplazoTrayectos());
        oferta.setDiferentesAlturas(ofertaNew.getDiferentesAlturas());
        oferta.setDiferentesPisos(ofertaNew.getDiferentesPisos());
        oferta.setLeerEscribir(ofertaNew.getLeerEscribir());
        oferta.setLicencia(ofertaNew.getLicencia());
        oferta.setName(ofertaNew.getName());
        oferta.setNivelEducacional(ofertaNew.getNivelEducacional());
        oferta.setObjetosPequeños(ofertaNew.getObjetosPequeños());
        oferta.setPermanecerPie(ofertaNew.getPermanecerPie());
        oferta.setPermanecerSentado(ofertaNew.getPermanecerSentado());
        oferta.setResolverProblemas(ofertaNew.getResolverProblemas());
        oferta.setSillaDeRuedas(ofertaNew.isSillaDeRuedas());
        oferta.setSituacionesConflicto(ofertaNew.getSituacionesConflicto());
        oferta.setSituacionesNuevas(ofertaNew.getSituacionesNuevas());
        oferta.setTareasEstresantes(ofertaNew.getTareasEstresantes());
        oferta.setTrabajoEquipo(ofertaNew.getTrabajoEquipo());

        oferta.getExperiencias().clear();
        oferta.getExperiencias().addAll(ofertaNew.getExperiencias());


        ofertaRepository.save(oferta);

        return new ResponseEntity(new ApiResponse(true, "Oferta Actualizada"), HttpStatus.OK);
    }
}