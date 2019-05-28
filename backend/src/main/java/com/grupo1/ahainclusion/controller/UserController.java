package com.grupo1.ahainclusion.controller;

import com.grupo1.ahainclusion.model.User;
import com.grupo1.ahainclusion.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;



@Controller
@RequestMapping(path="/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    // Agregar Usuario
    @RequestMapping(path="/add", method = RequestMethod.POST)
    public @ResponseBody String addNewUser (@RequestBody User usr) {

    userRepository.save(usr);

    return "Usuario Guardado";
    }

    // Obtener Usuarios
    @GetMapping(path="/all")
    public @ResponseBody Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }



}