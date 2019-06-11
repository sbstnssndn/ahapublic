package com.grupo1.ahainclusion.controller.user.perfiles;

import com.grupo1.ahainclusion.auth.CurrentUser;
import com.grupo1.ahainclusion.auth.UserPrincipal;
import com.grupo1.ahainclusion.model.PerfilCandidato;
import com.grupo1.ahainclusion.model.PerfilLaboral;
import com.grupo1.ahainclusion.model.User;
import com.grupo1.ahainclusion.repository.PerfilLaboralRepository;
import com.grupo1.ahainclusion.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
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


    // Agregar Perfil Laboral
    @RequestMapping(path = "/perfilLaboral", method = RequestMethod.POST)
    //SOLO USUARIOS CANDIDATO O AHA
    //@PreAuthorize("hasRole('ROLE_CANDIDATO') or hasRole('ROLE_AHA')")
    public @ResponseBody String addNewPerfilLaboral(@CurrentUser UserPrincipal currentUser, @RequestBody PerfilLaboral perfilLaboral) {

        User user = userRepository.findById(currentUser.getId()).get();
        perfilLaboral.setPerfilCandidato(user.getPerfilCandidato());
        perfilLaboralRepository.save(perfilLaboral);

        return "Perfil Laboral Guardado";
    }

    // Obtener Perfil Laboral
    @RequestMapping(path = "/perfilLaboral", method = RequestMethod.GET)
    //SOLO USUARIOS CANDIDATO O AHA
    //@PreAuthorize("hasRole('ROLE_CANDIDATO') or hasRole('ROLE_AHA')")
    public @ResponseBody PerfilLaboral getPerfilLaboral(@CurrentUser UserPrincipal currentUser) {

        User user = userRepository.findById(currentUser.getId()).get();
        PerfilLaboral pLaboral = user.getPerfilCandidato().getPerfilLaboral();

        return pLaboral;
    
    }

    // Actualizar Perfil Laboral
    @RequestMapping(path = "/perfilLaboral", method = RequestMethod.PUT)
    //SOLO USUARIOS CANDIDATO O AHA
    //@PreAuthorize("hasRole('ROLE_CANDIDATO') or hasRole('ROLE_AHA')")
    public @ResponseBody String updatePerfilLaboral(@CurrentUser UserPrincipal currentUser, @RequestBody PerfilLaboral pLaboralNew) {

        User user = userRepository.findById(currentUser.getId()).get();
        PerfilLaboral pLaboral = user.getPerfilCandidato().getPerfilLaboral();
        pLaboral.setActividadesAuditiva(pLaboralNew.getActividadesAuditiva());
        pLaboral.setActividadesVisual(pLaboralNew.getActividadesAuditiva());
        pLaboral.setAdecuaciones(pLaboralNew.getAdecuaciones());
        pLaboral.setAyudaFormulario(pLaboralNew.getAyudaFormulario());
        pLaboral.setBañoAdaptado(pLaboralNew.isBañoAdaptado());
        pLaboral.setComunicacionOral(pLaboralNew.getComunicacionOral());
        pLaboral.setCredencial(pLaboralNew.isCredencial());
        pLaboral.setCursos(pLaboralNew.getCursos());
        pLaboral.setDesplazoTrayectos(pLaboralNew.getDesplazoTrayectos());
        pLaboral.setDiferentesAlturas(pLaboralNew.getDiferentesAlturas());
        pLaboral.setDiferentesPisos(pLaboralNew.getDiferentesPisos());
        pLaboral.setDisponibilidad(pLaboralNew.getDisponibilidad());
        pLaboral.setExpectativaSueldo(pLaboralNew.getExpectativaSueldo());
        pLaboral.setLeerEscribir(pLaboralNew.getLeerEscribir());
        pLaboral.setLicencia(pLaboralNew.getLicencia());
        pLaboral.setName(pLaboralNew.getName());
        pLaboral.setNivelEducacional(pLaboralNew.getNivelEducacional());
        pLaboral.setObjetosPequeños(pLaboralNew.getObjetosPequeños());

        perfilLaboralRepository.save(pLaboral);
        return "Perfil Laboral Actualizado";
    }



}