package com.grupo1.ahainclusion.controller.user.perfiles;

import java.util.Optional;

import com.grupo1.ahainclusion.auth.CurrentUser;
import com.grupo1.ahainclusion.auth.UserPrincipal;
import com.grupo1.ahainclusion.aux.payload.ApiResponse;
import com.grupo1.ahainclusion.model.PerfilEmpresa;
import com.grupo1.ahainclusion.model.User;
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
    @PreAuthorize("hasRole('ROLE_EMPRESA') or hasRole('ROLE_AHA')")
    public @ResponseBody String addNewPerfilEmpresa(@CurrentUser UserPrincipal currentUser, @PathVariable("userId") Integer userId, @RequestBody PerfilEmpresa perfilEmpresa) {

        if(!currentUser.getRole().equals("aha") && currentUser.getId()!=userId ) {
            return null;
        }

        User user = userRepository.findById(userId).get();
        perfilEmpresa.setUser(user);
        perfilEmpresa.setEmail2(perfilEmpresa.getEmail2().toLowerCase());
        perfilEmpresaRepository.save(perfilEmpresa);
        return "Perfil Empresa Guardado";
    }
    
    // Obtener Perfil Empresa
    @GetMapping(path = "/{userId}/perfilEmpresa")
    //SOLO USUARIOS EMPRESA O AHA
    @PreAuthorize("hasRole('ROLE_EMPRESA') or hasRole('ROLE_AHA')")
    public @ResponseBody PerfilEmpresa getPerfilLaboral(@CurrentUser UserPrincipal currentUser, @PathVariable("userId") Integer userId) {

        if(!currentUser.getRole().equals("aha") && currentUser.getId()!=userId ) {
            return null;
        }

        User user = userRepository.findById(userId).get();
        PerfilEmpresa pEmpresa = user.getPerfilEmpresa();

        return pEmpresa;
    
    }

    // Actualizar Perfil Empresa
    @PutMapping(path = "/{userId}/perfilEmpresa")
    //SOLO USUARIOS Empresa o AHA
    @PreAuthorize("hasRole('ROLE_AHA') or hasRole('ROLE_EMPRESA')")
    public @ResponseBody ResponseEntity<Object> update(@CurrentUser UserPrincipal currentUser, @PathVariable("userId") Integer userId, @RequestBody PerfilEmpresa pEmpresaNew) {

        if(!currentUser.getRole().equals("aha") && currentUser.getId()!=userId ) {
            return new ResponseEntity(new ApiResponse(false, "No autorizado para este perfil"), HttpStatus.UNAUTHORIZED);
        }
        
        Optional<PerfilEmpresa> pEmpresaOptional = perfilEmpresaRepository.findById(userId);

        if (!pEmpresaOptional.isPresent())
        return new ResponseEntity(new ApiResponse(false, "Perfil Empresa no encontrado"), HttpStatus.NOT_FOUND);

        PerfilEmpresa pEmpresa = pEmpresaOptional.get();

        pEmpresa.setEmail2(pEmpresaNew.getEmail2());
        pEmpresa.setNameEmpresa(pEmpresaNew.getNameEmpresa());
        //pEmpresa.setOfertas(pEmpresaNew.getOfertas());
        pEmpresa.setRutEmpresa(pEmpresaNew.getRutEmpresa());
        pEmpresa.setTelefono1(pEmpresaNew.getTelefono1());
        pEmpresa.setTelefono2(pEmpresaNew.getTelefono2());

        perfilEmpresaRepository.save(pEmpresa);

        return new ResponseEntity(new ApiResponse(true, "Perfil Empresa Actualizado"), HttpStatus.OK);
    }
    
}