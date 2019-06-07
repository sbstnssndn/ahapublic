package com.grupo1.ahainclusion.controller;

import java.net.URI;
import java.util.Collections;
import java.util.Optional;

import javax.validation.Valid;

import com.grupo1.ahainclusion.aux.payload.ApiResponse;
import com.grupo1.ahainclusion.aux.payload.SignUpRequest;
import com.grupo1.ahainclusion.model.PerfilAccesibilidad;
import com.grupo1.ahainclusion.model.PerfilLaboral;
import com.grupo1.ahainclusion.model.Role;
import com.grupo1.ahainclusion.model.User;
import com.grupo1.ahainclusion.model.candidato.Curso;
import com.grupo1.ahainclusion.model.candidato.Titulo;
import com.grupo1.ahainclusion.repository.CursoRepository;
import com.grupo1.ahainclusion.repository.PerfilAccesibilidadRepository;
import com.grupo1.ahainclusion.repository.PerfilLaboralRepository;
import com.grupo1.ahainclusion.repository.RoleRepository;
import com.grupo1.ahainclusion.repository.TituloRepository;
import com.grupo1.ahainclusion.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@Controller
@RequestMapping(path = "/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CursoRepository cursoRepository;

    @Autowired
    private TituloRepository tituloRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private PerfilAccesibilidadRepository perfilAccesibilidadRepository;
    
    @Autowired
    private PerfilLaboralRepository perfilLaboralRepository;

    // Agregar usuario (Registrar)
    @RequestMapping(path = "/add", method = RequestMethod.POST)
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequest signUpRequest) {

        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return new ResponseEntity(new ApiResponse(false, "Email ya en uso!"), HttpStatus.BAD_REQUEST);
        }

        Role userRole = null;
        boolean isCandidato = signUpRequest.getRole().equalsIgnoreCase("CANDIDATO");
        boolean isEmpresa = signUpRequest.getRole().equalsIgnoreCase("EMPRESA");
        boolean isAHA = signUpRequest.getRole().equalsIgnoreCase("AHA");

        if ((isCandidato || isEmpresa || isAHA) == false) {
            return new ResponseEntity(new ApiResponse(false, "Rol invalido"), HttpStatus.BAD_REQUEST);
        }

        if (isCandidato)
            userRole = roleRepository.findByName("ROLE_CANDIDATO");
        if (isEmpresa)
            userRole = roleRepository.findByName("ROLE_EMPRESA");
        if (isAHA)
            userRole = roleRepository.findByName("ROLE_AHA");

        User user = new User();
        user.setEmail(signUpRequest.getEmail());
        user.setPassword(signUpRequest.getPassword());

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        user.setRoles(Collections.singleton(userRole));

        User result = userRepository.save(user);

        URI location = ServletUriComponentsBuilder.fromCurrentContextPath().path("/user/{id}")
                .buildAndExpand(result.getId()).toUri();

        return ResponseEntity.created(location).body(new ApiResponse(true, "Usuario creado correctamente."));
    }

    // Obtener Usuarios
    @GetMapping(path = "/all")
    public @ResponseBody Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Agregar Perfil Accesibilidad
    @RequestMapping(path = "/perfilAccesibilidad", method = RequestMethod.POST)
    public @ResponseBody String addNewPerfilAccesibilidad(@RequestBody PerfilAccesibilidad perfilAccesibilidad) {

        perfilAccesibilidadRepository.save(perfilAccesibilidad);

        return "Perfil Accesibilidad Guardado";
    }

    // Obtener Perfiles Accesibilidad
    @RequestMapping(path = "/perfilAccesibilidad", method = RequestMethod.GET)
    public @ResponseBody Iterable<PerfilAccesibilidad> getPerfilAccesibilidadByUser(@RequestBody User user) {

        Optional<User> usr = userRepository.findById(user.getId());
        return usr.get().getPerfilEmpresa().getPerfilesAccesibilidad();
    }

    // Agregar Perfil Laboral
    @RequestMapping(path = "/perfilLaboral", method = RequestMethod.POST)
    public @ResponseBody String addNewPerfilLaboral(@RequestBody PerfilLaboral perfilLaboral) {

        perfilLaboralRepository.save(perfilLaboral);

        return "Perfil Laboral Guardado";
    }

    // Obtener Perfil Laboral
    @RequestMapping(path = "/perfilLaboral", method = RequestMethod.GET)
    public @ResponseBody PerfilLaboral getPerfilLaboral(@RequestBody User user) {

        Optional<User> usr = userRepository.findById(user.getId());
        return usr.get().getPerfilCandidato().getPerfilLaboral();
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