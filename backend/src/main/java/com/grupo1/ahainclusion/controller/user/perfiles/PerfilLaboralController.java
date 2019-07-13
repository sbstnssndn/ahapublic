package com.grupo1.ahainclusion.controller.user.perfiles;

import java.util.Optional;

import com.grupo1.ahainclusion.auth.CurrentUser;
import com.grupo1.ahainclusion.auth.UserPrincipal;
import com.grupo1.ahainclusion.aux.payload.ApiResponse;
import com.grupo1.ahainclusion.model.PerfilCandidato;
import com.grupo1.ahainclusion.model.PerfilLaboral;
import com.grupo1.ahainclusion.model.User;
import com.grupo1.ahainclusion.model.candidato.Curso;
import com.grupo1.ahainclusion.model.candidato.Experiencia;
import com.grupo1.ahainclusion.model.candidato.Titulo;
import com.grupo1.ahainclusion.repository.CursoRepository;
import com.grupo1.ahainclusion.repository.ExperienciaRepository;
import com.grupo1.ahainclusion.repository.PerfilLaboralRepository;
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
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path = "/user")
public class PerfilLaboralController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PerfilLaboralRepository perfilLaboralRepository;

    @Autowired
    private ExperienciaRepository experienciaRepository;


    // Agregar Perfil Laboral
    @PostMapping(path = "/{userId}/perfilLaboral")
    //SOLO USUARIOS CANDIDATO O AHA
    @PreAuthorize("hasRole('ROLE_CANDIDATO') or hasRole('ROLE_AHA')")
    public @ResponseBody String addNewPerfilLaboral(@PathVariable("userId") Integer userId, @RequestBody PerfilLaboral perfilLaboral) {

        User user = userRepository.findById(userId).get();
        perfilLaboral.setPerfilCandidato(user.getPerfilCandidato());
        perfilLaboralRepository.save(perfilLaboral);

        return "Perfil Laboral Guardado";
    }

    // Obtener Perfil Laboral
    @GetMapping(path = "/{userId}/perfilLaboral")
    //SOLO USUARIOS CANDIDATO O AHA
    @PreAuthorize("hasRole('ROLE_CANDIDATO') or hasRole('ROLE_AHA')")
    public @ResponseBody PerfilLaboral getPerfilLaboral(@PathVariable("userId") Integer userId) {

        User user = userRepository.findById(userId).get();
        PerfilLaboral pLaboral = user.getPerfilCandidato().getPerfilLaboral();

        return pLaboral;
    
    }

    // Actualizar Perfil Laboral
    @PutMapping(path = "/{userId}/perfilLaboral")
    //SOLO USUARIOS CANDIDATO O AHA
    @PreAuthorize("hasRole('ROLE_CANDIDATO') or hasRole('ROLE_AHA')")
    public @ResponseBody ResponseEntity<Object> updatePerfilLaboral(@PathVariable("userId") Integer userId, @RequestBody PerfilLaboral pLaboralNew) {

        
        Optional<PerfilLaboral> pLaboralOptional = perfilLaboralRepository.findById(userId);

        if (!pLaboralOptional.isPresent())
        return new ResponseEntity(new ApiResponse(false, "Perfil Laboral no encontrado"), HttpStatus.NOT_FOUND);

        PerfilLaboral pLaboral = pLaboralOptional.get();

        pLaboral.setActividadesAuditiva(pLaboralNew.getActividadesAuditiva());
        pLaboral.setActividadesVisual(pLaboralNew.getActividadesVisual());
        pLaboral.setAdecuaciones(pLaboralNew.getAdecuaciones());
        pLaboral.setAutoPropio(pLaboralNew.isAutoPropio());
        pLaboral.setAyudaFormulario(pLaboralNew.getAyudaFormulario());
        pLaboral.setBanhoAdaptado(pLaboralNew.isBanhoAdaptado());
        pLaboral.setComunicacionOral(pLaboralNew.getComunicacionOral());
        pLaboral.setCredencial(pLaboralNew.isCredencial());
        pLaboral.setDesplazoTrayectos(pLaboralNew.getDesplazoTrayectos());
        pLaboral.setDiferentesAlturas(pLaboralNew.getDiferentesAlturas());
        pLaboral.setDiferentesPisos(pLaboralNew.getDiferentesPisos());
        pLaboral.setDisponibilidad(pLaboralNew.getDisponibilidad());
        pLaboral.setExpectativaSueldo(pLaboralNew.getExpectativaSueldo());
        pLaboral.setLeerEscribir(pLaboralNew.getLeerEscribir());
        pLaboral.setLicencia(pLaboralNew.getLicencia());
        pLaboral.setNivelEducacional(pLaboralNew.getNivelEducacional());
        pLaboral.setObjetosPequenhos(pLaboralNew.getObjetosPequenhos());
        pLaboral.setPermanecerPie(pLaboralNew.getPermanecerPie());
        pLaboral.setPermanecerSentado(pLaboralNew.getPermanecerSentado());
        pLaboral.setResolverProblemas(pLaboralNew.getResolverProblemas());
        pLaboral.setSillaDeRuedas(pLaboralNew.isSillaDeRuedas());
        pLaboral.setSituacionesConflicto(pLaboralNew.getSituacionesConflicto());
        pLaboral.setSituacionesNuevas(pLaboralNew.getSituacionesNuevas());
        pLaboral.setTareasEstresantes(pLaboralNew.getTareasEstresantes());
        pLaboral.setTrabajoEquipo(pLaboralNew.getTrabajoEquipo());
        pLaboral.setdAuditiva(pLaboralNew.getdAuditiva());
        pLaboral.setdFisica(pLaboralNew.getdFisica());
        pLaboral.setdIntelectual(pLaboralNew.getdIntelectual());
        pLaboral.setdPsiquica(pLaboralNew.getdPsiquica());
        pLaboral.setdVisual(pLaboralNew.getdVisual());


        if(pLaboralNew.getCursos()!=null) {
            pLaboral.getCursos().clear();

            for(Curso c: pLaboralNew.getCursos()) {
                c.setPerfilLaboral(pLaboral);
            }

            pLaboral.getCursos().addAll(pLaboralNew.getCursos());
        }
        if(pLaboralNew.getExperiencias()!=null) {
            pLaboral.getExperiencias().clear();

            for(Experiencia e: pLaboralNew.getExperiencias()) {
                e.setPerfilLaboral(pLaboral);
            }

            pLaboral.getExperiencias().addAll(pLaboralNew.getExperiencias());
        }
        if(pLaboralNew.getTitulos()!=null) {
            pLaboral.getTitulos().clear();

            for(Titulo t: pLaboralNew.getTitulos()) {
                t.setPerfilLaboral(pLaboral);
            }

            pLaboral.getTitulos().addAll(pLaboralNew.getTitulos());
        }

        perfilLaboralRepository.save(pLaboral);

        return new ResponseEntity(new ApiResponse(true, "Perfil Laboral Actualizado"), HttpStatus.OK);
    }



}
