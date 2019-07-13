package com.grupo1.ahainclusion.controller.oferta;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import com.grupo1.ahainclusion.auth.CurrentUser;
import com.grupo1.ahainclusion.auth.UserPrincipal;
import com.grupo1.ahainclusion.aux.payload.ApiResponse;
import com.grupo1.ahainclusion.model.Oferta;
import com.grupo1.ahainclusion.model.PerfilEmpresa;
import com.grupo1.ahainclusion.model.User;
import com.grupo1.ahainclusion.model.oferta.ExperienciaExigida;
import com.grupo1.ahainclusion.repository.ExperienciaExigidaRepository;
import com.grupo1.ahainclusion.repository.OfertaRepository;
import com.grupo1.ahainclusion.repository.PerfilEmpresaRepository;
import com.grupo1.ahainclusion.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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

    @Autowired
    private PerfilEmpresaRepository perfilEmpresaRepository;

    @Autowired
    private ExperienciaExigidaRepository experienciaExigidaRepository;

    // Obtener Ofertas de usuario
    @GetMapping(value = "user/{userId}/oferta")
    @PreAuthorize("hasRole('ROLE_EMPRESA') or hasRole('ROLE_AHA')")
    public @ResponseBody Iterable<Oferta> getAllFromUser(@CurrentUser UserPrincipal currentUser, @PathVariable("userId") Integer userId) {

        

        User user = userRepository.findById(userId).get();
        if(user.getPerfilEmpresa()!=null) return user.getPerfilEmpresa().getOfertas();
        return null;
    }

    // Obtener todas las ofertas
    @GetMapping(value = "/oferta/all")
    @PreAuthorize("hasRole('ROLE_AHA')")
    public @ResponseBody Iterable<Oferta> getAll() {
        return ofertaRepository.findAll();
    }

    // Obtener usuario de una oferta
    @GetMapping(value = "oferta/{id}/user")
    @PreAuthorize("hasRole('ROLE_AHA')")
    public @ResponseBody User getUserFromOferta(@CurrentUser UserPrincipal currentUser, @PathVariable("id") Integer id) {
        
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
    @PreAuthorize("hasRole('ROLE_EMPRESA') or hasRole('ROLE_AHA')")
    public @ResponseBody Oferta get(@CurrentUser UserPrincipal currentUser, @PathVariable("id") Integer id) {

        Optional<Oferta> ofertaOptional = ofertaRepository.findById(id);

        if (!ofertaOptional.isPresent())
            return null;

        Oferta oferta = ofertaOptional.get();

        if(!currentUser.getRole().equals("aha") && currentUser.getId()!=oferta.getPerfilEmpresa().getId() ) {
            return null;
        }

        return oferta;
    }

    // Agregar Oferta
    @PostMapping(value = "user/{userId}/oferta")
    @PreAuthorize("hasRole('ROLE_EMPRESA') or hasRole('ROLE_AHA')")
    public @ResponseBody ResponseEntity<Object> addNewOferta(@CurrentUser UserPrincipal currentUser, @PathVariable("userId") Integer userId, @RequestBody Oferta oferta) {

        if(!currentUser.getRole().equals("aha") && currentUser.getId()!=userId ) {
            return new ResponseEntity(new ApiResponse(false, "No autorizado para agregar ofertas a este usuario"), HttpStatus.UNAUTHORIZED);
        }

        Optional<PerfilEmpresa> pEmpresaOptional = perfilEmpresaRepository.findById(userId);

        if (!pEmpresaOptional.isPresent())
        return new ResponseEntity(new ApiResponse(false, "Usuario Empresa no encontrado"), HttpStatus.NOT_FOUND);

        PerfilEmpresa pEmpresa = pEmpresaOptional.get();
        oferta.setPerfilEmpresa(pEmpresa);
        if(oferta.getExperiencias()!=null) {
            Collection<ExperienciaExigida> expExigidas = oferta.getExperiencias();
            oferta.setExperiencias(null);

            ofertaRepository.save(oferta);
            
            for (ExperienciaExigida expExigida : expExigidas) {
                expExigida.setOferta(oferta);
            }

            experienciaExigidaRepository.saveAll(expExigidas);

            return new ResponseEntity(new ApiResponse(true, "Oferta Guardada"), HttpStatus.OK);

        }
        
        
        ofertaRepository.save(oferta);

        return new ResponseEntity(new ApiResponse(true, "Oferta Guardada"), HttpStatus.OK);
    }

    // Actualizar oferta
    @PutMapping(path = "oferta/{id}")
    //SOLO USUARIOS Empresa o AHA
    @PreAuthorize("hasRole('ROLE_EMPRESA') or hasRole('ROLE_AHA')")
    public @ResponseBody ResponseEntity<Object> update(@CurrentUser UserPrincipal currentUser, @PathVariable("id") Integer id, @RequestBody Oferta ofertaNew) {

        
        Optional<Oferta> ofertaOptional = ofertaRepository.findById(id);

        if (!ofertaOptional.isPresent())
        return new ResponseEntity(new ApiResponse(false, "Oferta no encontrada"), HttpStatus.NOT_FOUND);

        Oferta oferta = ofertaOptional.get();

        if(!currentUser.getRole().equals("aha") && currentUser.getId()!=oferta.getPerfilEmpresa().getId() ) {
            return new ResponseEntity(new ApiResponse(false, "No autorizado para actualizar esta oferta"), HttpStatus.UNAUTHORIZED);
        }

        oferta.setActividadesAuditiva(ofertaNew.getActividadesAuditiva());
        oferta.setActividadesVisual(ofertaNew.getActividadesVisual());
        oferta.setBanhoAdaptado(ofertaNew.isBanhoAdaptado());
        oferta.setComunicacionOral(ofertaNew.getComunicacionOral());
        oferta.setDescription(ofertaNew.getDescription());
        oferta.setDesplazoTrayectos(ofertaNew.getDesplazoTrayectos());
        oferta.setDiferentesAlturas(ofertaNew.getDiferentesAlturas());
        oferta.setDiferentesPisos(ofertaNew.getDiferentesPisos());
        oferta.setLeerEscribir(ofertaNew.getLeerEscribir());
        oferta.setLicencia(ofertaNew.getLicencia());
        oferta.setName(ofertaNew.getName());
        oferta.setNivelEducacional(ofertaNew.getNivelEducacional());
        oferta.setObjetosPequenhos(ofertaNew.getObjetosPequenhos());
        oferta.setPermanecerPie(ofertaNew.getPermanecerPie());
        oferta.setPermanecerSentado(ofertaNew.getPermanecerSentado());
        oferta.setResolverProblemas(ofertaNew.getResolverProblemas());
        oferta.setSillaDeRuedas(ofertaNew.isSillaDeRuedas());
        oferta.setSituacionesConflicto(ofertaNew.getSituacionesConflicto());
        oferta.setSituacionesNuevas(ofertaNew.getSituacionesNuevas());
        oferta.setTareasEstresantes(ofertaNew.getTareasEstresantes());
        oferta.setTrabajoEquipo(ofertaNew.getTrabajoEquipo());

        if(ofertaNew.getExperiencias()!=null) {
            oferta.getExperiencias().clear();

            for(ExperienciaExigida expEx: ofertaNew.getExperiencias()) {
                expEx.setOferta(oferta);
            }

            oferta.getExperiencias().addAll(ofertaNew.getExperiencias());
        }


        ofertaRepository.save(oferta);

        return new ResponseEntity(new ApiResponse(true, "Oferta Actualizada"), HttpStatus.OK);
    }
}