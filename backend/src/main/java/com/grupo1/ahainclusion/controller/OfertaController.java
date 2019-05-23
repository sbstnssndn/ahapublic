package com.grupo1.ahainclusion.controller;

import java.util.Optional;

import com.grupo1.ahainclusion.model.Oferta;
import com.grupo1.ahainclusion.model.PerfilAccesibilidad;
import com.grupo1.ahainclusion.model.User;
import com.grupo1.ahainclusion.repository.OfertaRepository;
import com.grupo1.ahainclusion.repository.PerfilAccesibilidadRepository;
import com.grupo1.ahainclusion.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path="/oferta")
public class OfertaController {

    @Autowired
    private OfertaRepository ofertaRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PerfilAccesibilidadRepository perfilAccesibilidadRepository;

    // Agregar Oferta
    @RequestMapping(path="/add", method = RequestMethod.POST)
    public @ResponseBody String addNewOferta(@RequestParam String name,
                                             @RequestParam String description,
                                             @RequestParam Integer idUser,
                                             @RequestParam Integer idPerfilA) {
    
        Oferta n = new Oferta();
        User usr = new User();
        Optional<User> checkUser = userRepository.findById(idUser);
        PerfilAccesibilidad perfilA = new PerfilAccesibilidad();
        Optional<PerfilAccesibilidad> CheckPerfilA = perfilAccesibilidadRepository.findById(idPerfilA);

        if (checkUser==null)
        {
            return "Usuario no encontrado";
        }
        else
        {
            usr = checkUser.get();
            System.out.println("Usuario encontrado: "+usr.getFirstName());
        }

        if (CheckPerfilA==null)
        {
            System.out.println("PerfilA no encontrado");
            return "Perfil de Accesibilidad no encontrado";
        }
        else
        {
            perfilA = CheckPerfilA.get();
        }



        n.setName(name);
        n.setDescription(description);
        n.setUser(usr);
        n.setPerfilAccesibilidad(perfilA);

        ofertaRepository.save(n);

        return "Oferta Guardada";
    }

    // Obtener Ofertas
    @GetMapping(path="/all")
    public @ResponseBody Iterable<Oferta> gettAllOfertas() {
        return ofertaRepository.findAll();
    }
}