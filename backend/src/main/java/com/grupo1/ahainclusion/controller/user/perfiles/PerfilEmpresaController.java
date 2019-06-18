package com.grupo1.ahainclusion.controller.user.perfiles;

import com.grupo1.ahainclusion.auth.CurrentUser;
import com.grupo1.ahainclusion.auth.UserPrincipal;
import com.grupo1.ahainclusion.model.PerfilEmpresa;
import com.grupo1.ahainclusion.model.User;
import com.grupo1.ahainclusion.repository.PerfilEmpresaRepository;
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
public class PerfilEmpresaController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PerfilEmpresaRepository perfilEmpresaRepository;

    // Agregar Perfil Empresa
    @PostMapping(path = "/{userId}/perfilEmpresa")
    //SOLO USUARIOS EMPRESA O AHA
    //@PreAuthorize("hasRole('ROLE_EMPRESA') or hasRole('ROLE_AHA')")
    public @ResponseBody String addNewPerfilEmpresa(@PathVariable("userId") Integer userId, @RequestBody PerfilEmpresa perfilEmpresa) {

        User user = userRepository.findById(userId).get();
        perfilEmpresa.setUser(user);
        perfilEmpresaRepository.save(perfilEmpresa);
        return "Perfil Empresa Guardado";
    }
    
    // Obtener Perfil Empresa
    @GetMapping(path = "/{userId}/perfilEmpresa")
    //SOLO USUARIOS EMPRESA O AHA
    //@PreAuthorize("hasRole('ROLE_EMPRESA') or hasRole('ROLE_AHA')")
    public @ResponseBody PerfilEmpresa getPerfilLaboral(@PathVariable("userId") Integer userId) {

        User user = userRepository.findById(userId).get();
        PerfilEmpresa pEmpresa = user.getPerfilEmpresa();

        return pEmpresa;
    
    }
    
}