package com.grupo1.ahainclusion.controller.user.perfiles;

import com.grupo1.ahainclusion.auth.CurrentUser;
import com.grupo1.ahainclusion.auth.UserPrincipal;
import com.grupo1.ahainclusion.model.PerfilAHA;
import com.grupo1.ahainclusion.model.User;
import com.grupo1.ahainclusion.repository.PerfilAHARepository;
import com.grupo1.ahainclusion.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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
    @PostMapping(path = "/{userId}/perfilAHA")
    //SOLO USUARIOS AHA
    //@PreAuthorize("hasRole('ROLE_AHA')")
    public @ResponseBody String addNewPerfilAHA(@PathVariable("userId") Integer userId, @RequestBody PerfilAHA perfilAHA) {

        User user = userRepository.findById(userId).get();
        perfilAHA.setUser(user);
        perfilAHARepository.save(perfilAHA);
        return "Perfil AHA Guardado";
    }
    
    // Obtener Perfil AHA
    @GetMapping(path = "/{userId}/perfilAHA")
    //SOLO USUARIOS AHA
    //@PreAuthorize("hasRole('ROLE_AHA')")
    public @ResponseBody PerfilAHA getPerfilAHA(@PathVariable("userId") Integer userId) {

        User user = userRepository.findById(userId).get();
        PerfilAHA pAHA = user.getPerfilAHA();

        return pAHA;
    
    }
}