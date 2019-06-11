package com.grupo1.ahainclusion.controller.user.perfiles;

import com.grupo1.ahainclusion.auth.CurrentUser;
import com.grupo1.ahainclusion.auth.UserPrincipal;
import com.grupo1.ahainclusion.model.PerfilAccesibilidad;
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
        perfilLaboral.setUser(user);
        perfilLaboralRepository.save(perfilLaboral);

        return "Perfil Laboral Guardado";
    }

    // Obtener Perfil Laboral
    @RequestMapping(path = "/perfilLaboral", method = RequestMethod.GET)
    //SOLO USUARIOS CANDIDATO O AHA
    //@PreAuthorize("hasRole('ROLE_CANDIDATO') or hasRole('ROLE_AHA')")
    public @ResponseBody PerfilLaboral getPerfilLaboral(@CurrentUser UserPrincipal currentUser) {

        User user = userRepository.findById(currentUser.getId()).get();
        return user.getPerfilCandidato().getPerfilLaboral();
    }



}