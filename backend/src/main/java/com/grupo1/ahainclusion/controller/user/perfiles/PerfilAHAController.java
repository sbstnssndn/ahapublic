package com.grupo1.ahainclusion.controller.user.perfiles;

import java.util.Optional;

import com.grupo1.ahainclusion.auth.CurrentUser;
import com.grupo1.ahainclusion.auth.UserPrincipal;
import com.grupo1.ahainclusion.aux.payload.ApiResponse;
import com.grupo1.ahainclusion.model.PerfilAHA;
import com.grupo1.ahainclusion.model.User;
import com.grupo1.ahainclusion.repository.PerfilAHARepository;
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
public class PerfilAHAController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PerfilAHARepository perfilAHARepository;


    // Agregar Perfil AHA
    @PostMapping(path = "/{userId}/perfilAHA")
    //SOLO USUARIOS AHA
    @PreAuthorize("hasRole('ROLE_AHA')")
    public @ResponseBody String addNewPerfilAHA(@PathVariable("userId") Integer userId, @RequestBody PerfilAHA perfilAHA) {

        User user = userRepository.findById(userId).get();
        perfilAHA.setUser(user);
        perfilAHARepository.save(perfilAHA);
        return "Perfil AHA Guardado";
    }
    
    // Obtener Perfil AHA
    @GetMapping(path = "/{userId}/perfilAHA")
    //SOLO USUARIOS AHA
    @PreAuthorize("hasRole('ROLE_AHA')")
    public @ResponseBody PerfilAHA getPerfilAHA(@PathVariable("userId") Integer userId) {

        User user = userRepository.findById(userId).get();
        PerfilAHA pAHA = user.getPerfilAHA();

        return pAHA;
    
    }

    // Actualizar Perfil AHA
    @PutMapping(path = "/{userId}/perfilAHA")
    //SOLO USUARIOS AHA
    @PreAuthorize("hasRole('ROLE_AHA')")
    public @ResponseBody ResponseEntity<Object> update(@PathVariable("userId") Integer userId, @RequestBody PerfilAHA pAHANew) {

        
        Optional<PerfilAHA> pAHAOptional = perfilAHARepository.findById(userId);

        if (!pAHAOptional.isPresent())
        return new ResponseEntity(new ApiResponse(false, "Perfil AHA no encontrado"), HttpStatus.NOT_FOUND);

        PerfilAHA pAHA = pAHAOptional.get();

        pAHA.setFirstName(pAHANew.getFirstName());
        pAHA.setLastName(pAHANew.getLastName());
        pAHA.setRut(pAHANew.getRut());

        perfilAHARepository.save(pAHA);

        return new ResponseEntity(new ApiResponse(true, "Perfil AHA Actualizado"), HttpStatus.OK);
    }
    
}