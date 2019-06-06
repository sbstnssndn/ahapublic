package com.grupo1.ahainclusion.controller;

import com.grupo1.ahainclusion.model.User;
import com.grupo1.ahainclusion.model.candidato.Curso;
import com.grupo1.ahainclusion.model.candidato.Titulo;
import com.grupo1.ahainclusion.repository.CursoRepository;
import com.grupo1.ahainclusion.repository.PerfilLaboralRepository;
import com.grupo1.ahainclusion.repository.TituloRepository;
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

    @Autowired
    private CursoRepository cursoRepository;

    @Autowired
    private TituloRepository tituloRepository;

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

    // Agregar un curso a usuario
    @RequestMapping(path="/addCurso", method = RequestMethod.POST)
    public @ResponseBody String addCursoToUser (@RequestBody Curso curso) {

    cursoRepository.save(curso);

    return "Curso Guardado en usuario: " + curso.getPerfilCandidato().getId();
    }

    // Agregar un curso a usuario
    @RequestMapping(path="/addTitulo", method = RequestMethod.POST)
    public @ResponseBody String addTituloToUser (@RequestBody Titulo titulo) {

    tituloRepository.save(titulo);

    return "Titulo Guardado en usuario: " + titulo.getPerfilCandidato().getId();
    }



}