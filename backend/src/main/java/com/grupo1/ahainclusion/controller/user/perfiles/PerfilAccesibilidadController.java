package com.grupo1.ahainclusion.controller.user.perfiles;

import com.grupo1.ahainclusion.auth.CurrentUser;
import com.grupo1.ahainclusion.auth.UserPrincipal;
import com.grupo1.ahainclusion.model.PerfilAccesibilidad;
import com.grupo1.ahainclusion.model.User;
import com.grupo1.ahainclusion.repository.PerfilAccesibilidadRepository;
import com.grupo1.ahainclusion.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path = "/user")
public class PerfilAccesibilidadController {

    @Autowired
    private PerfilAccesibilidadRepository perfilAccesibilidadRepository;

    @Autowired
    private UserRepository userRepository;

    // Agregar Perfil Accesibilidad
    @RequestMapping(path = "/perfilAccesibilidad", method = RequestMethod.POST)
    //SOLO USUARIOS EMPRESA O AHA
    //@PreAuthorize("hasRole('ROLE_EMPRESA') or hasRole('ROLE_AHA')")
    public @ResponseBody String addNewPerfilAccesibilidad(@RequestBody PerfilAccesibilidad perfilAccesibilidad) {

        perfilAccesibilidadRepository.save(perfilAccesibilidad);

        return "Perfil Accesibilidad Guardado";
    }

    // Obtener Perfiles Accesibilidad
    @RequestMapping(path = "/perfilAccesibilidad", method = RequestMethod.GET)
    //SOLO USUARIOS EMPRESA O AHA
    //@PreAuthorize("hasRole('ROLE_EMPRESA') or hasRole('ROLE_AHA')")
    public @ResponseBody Iterable<PerfilAccesibilidad> getPerfilAccesibilidadByUser(@CurrentUser UserPrincipal currentUser) {

        User user = userRepository.findById(currentUser.getId()).get();
        return user.getPerfilEmpresa().getPerfilesAccesibilidad();
    }
    
}