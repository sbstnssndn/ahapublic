package com.grupo1.ahainclusion.controller;

import com.grupo1.ahainclusion.model.User;
import com.grupo1.ahainclusion.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path="/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    // Agregar Usuario
    @GetMapping(path="/add")
    public @ResponseBody String addNewUser (@RequestParam String rut,
                                            @RequestParam String firstName,
                                            @RequestParam String lastName,
                                            @RequestParam String email) {
    
    User n = new User();
    n.setRut(rut);
    n.setFirstName(firstName);
    n.setLastName(lastName);
    n.setEmail(email);

    userRepository.save(n);

    return "Usuario Guardado";
    }

    // Obtener Usuarios
    @GetMapping(path="/all")
    public @ResponseBody Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }



}