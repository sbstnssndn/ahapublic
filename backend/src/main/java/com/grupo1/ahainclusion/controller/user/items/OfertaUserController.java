package com.grupo1.ahainclusion.controller.user.items;

import com.grupo1.ahainclusion.auth.CurrentUser;
import com.grupo1.ahainclusion.auth.UserPrincipal;
import com.grupo1.ahainclusion.model.Oferta;
import com.grupo1.ahainclusion.model.PerfilEmpresa;
import com.grupo1.ahainclusion.model.User;
import com.grupo1.ahainclusion.repository.OfertaRepository;
import com.grupo1.ahainclusion.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path = "/user")
public class OfertaUserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OfertaRepository ofertaRepository;

    // Obtener Ofertas del usuario logeado
    @RequestMapping(path = "/oferta", method = RequestMethod.GET)
    //SOLO USUARIOS CANDIDATO O AHA
    //@PreAuthorize("hasRole('ROLE_EMPRESA') or hasRole('ROLE_AHA')")
    public @ResponseBody Iterable<Oferta> get(@CurrentUser UserPrincipal currentUser) {

        User user = userRepository.findById(currentUser.getId()).get();
        PerfilEmpresa pEmpresa = user.getPerfilEmpresa();
        return ofertaRepository.findByPerfilEmpresa(pEmpresa);
    }

    // Agregar una oferta para el usuario logeado
    @RequestMapping(path = "/oferta", method = RequestMethod.POST)
    //SOLO USUARIOS CANDIDATO O AHA
    //@PreAuthorize("hasRole('ROLE_EMPRESA') or hasRole('ROLE_AHA')")
    public @ResponseBody String add(@CurrentUser UserPrincipal currentUser, @RequestBody Oferta oferta) {

        User user = userRepository.findById(currentUser.getId()).get();
        PerfilEmpresa pEmpresa = user.getPerfilEmpresa();
        oferta.setPerfilEmpresa(pEmpresa);
        ofertaRepository.save(oferta);

        return "Oferta agregada";
    }

}