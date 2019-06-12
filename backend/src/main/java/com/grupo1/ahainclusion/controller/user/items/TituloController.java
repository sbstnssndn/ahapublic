package com.grupo1.ahainclusion.controller.user.items;

import com.grupo1.ahainclusion.auth.CurrentUser;
import com.grupo1.ahainclusion.auth.UserPrincipal;
import com.grupo1.ahainclusion.model.User;
import com.grupo1.ahainclusion.model.candidato.Titulo;
import com.grupo1.ahainclusion.repository.TituloRepository;
import com.grupo1.ahainclusion.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path = "/user")
public class TituloController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TituloRepository tituloRepository;


    // Agregar un titulo
    @RequestMapping(path="/titulo", method = RequestMethod.POST)
    //SOLO USUARIOS CANDIDATO O AHA
    //@PreAuthorize("hasRole('ROLE_CANDIDATO') or hasRole('ROLE_AHA')")
    public @ResponseBody String addTituloToUser (@CurrentUser UserPrincipal currentUser,
                                                 @RequestBody Titulo titulo) {

        User user = userRepository.findById(currentUser.getId()).get();
        titulo.setPerfilLaboral(user.getPerfilCandidato().getPerfilLaboral());
        tituloRepository.save(titulo);

        return "Titulo Guardado en usuario: " + user.getPerfilCandidato().getFirstName();
    }

    // Obtener Titulos
    @RequestMapping(path = "/titulo", method = RequestMethod.GET)
    //SOLO USUARIOS CANDIDATO O AHA
    //@PreAuthorize("hasRole('ROLE_CANDIDATO') or hasRole('ROLE_AHA')")
    public @ResponseBody Iterable<Titulo> getTitulos(@CurrentUser UserPrincipal currentUser) {

        User user = userRepository.findById(currentUser.getId()).get();
        return user.getPerfilCandidato().getPerfilLaboral().getTitulos();
    }


}