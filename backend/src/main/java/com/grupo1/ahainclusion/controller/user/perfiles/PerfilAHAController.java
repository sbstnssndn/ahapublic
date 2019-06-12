package com.grupo1.ahainclusion.controller.user.perfiles;

import com.grupo1.ahainclusion.auth.CurrentUser;
import com.grupo1.ahainclusion.auth.UserPrincipal;
import com.grupo1.ahainclusion.model.PerfilAHA;
import com.grupo1.ahainclusion.model.User;
import com.grupo1.ahainclusion.repository.PerfilAHARepository;
import com.grupo1.ahainclusion.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path = "/user")
public class PerfilAHAController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PerfilAHARepository perfilAHARepository;


    // Agregar Perfil AHA
    @RequestMapping(path = "/perfilAHA", method = RequestMethod.POST)
    //SOLO USUARIOS AHA
    //@PreAuthorize("hasRole('ROLE_AHA')")
    public @ResponseBody String addNewPerfilAHA(@CurrentUser UserPrincipal currentUser, @RequestBody PerfilAHA perfilAHA) {

        User user = userRepository.findById(currentUser.getId()).get();
        perfilAHA.setUser(user);
        perfilAHARepository.save(perfilAHA);
        return "Perfil AHA Guardado";
    }
    
    // Obtener Perfil AHA
    @RequestMapping(path = "/perfilAHA", method = RequestMethod.GET)
    //SOLO USUARIOS AHA
    //@PreAuthorize("hasRole('ROLE_AHA')")
    public @ResponseBody PerfilAHA getPerfilAHA(@CurrentUser UserPrincipal currentUser) {

        User user = userRepository.findById(currentUser.getId()).get();
        PerfilAHA pAHA = user.getPerfilAHA();

        return pAHA;
    
    }
}