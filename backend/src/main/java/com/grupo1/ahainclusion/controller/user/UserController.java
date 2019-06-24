package com.grupo1.ahainclusion.controller.user;

import java.net.URI;
import java.util.Collections;
import java.util.Optional;

import javax.validation.Valid;

import com.grupo1.ahainclusion.auth.CurrentUser;
import com.grupo1.ahainclusion.auth.UserPrincipal;
import com.grupo1.ahainclusion.aux.payload.ApiResponse;
import com.grupo1.ahainclusion.aux.payload.SignUpRequest;
import com.grupo1.ahainclusion.aux.payload.UserSummary;
import com.grupo1.ahainclusion.model.Role;
import com.grupo1.ahainclusion.model.User;
import com.grupo1.ahainclusion.repository.CursoRepository;
import com.grupo1.ahainclusion.repository.PerfilLaboralRepository;
import com.grupo1.ahainclusion.repository.RoleRepository;
import com.grupo1.ahainclusion.repository.TituloRepository;
import com.grupo1.ahainclusion.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;


    // Obtener usuario logeado
    @GetMapping(path = "/me")
    @PreAuthorize("hasRole('ROLE_CANDIDATO') or hasRole('ROLE_EMPRESA') or hasRole('ROLE_AHA')")
    public @ResponseBody UserSummary getCurrentUser(@CurrentUser UserPrincipal currentUser) {

        UserSummary userSummary = new UserSummary(currentUser.getId(), currentUser.getName(), currentUser.getEmail(), currentUser.getAuthorities(), currentUser.getRole());

        return userSummary;
    }

    // Agregar usuario (Registrar)
    @PostMapping(path = "/add")
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
        user.setEmail(signUpRequest.getEmail().toLowerCase());
        user.setPassword(signUpRequest.getPassword());

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        user.setRoles(Collections.singleton(userRole));

        User result = userRepository.save(user);

        URI location = ServletUriComponentsBuilder.fromCurrentContextPath().path("/user/{id}")
                .buildAndExpand(result.getId()).toUri();

        return ResponseEntity.created(location).body(new ApiResponse(true, "Usuario creado correctamente."));
    }


    //Obtener usuario por id
    @GetMapping(value = "/{id}")
    public @ResponseBody User get(@PathVariable("id") Integer id) {
        return userRepository.findById(id).get();
    }

    //Eliminar un usuario por id
    @DeleteMapping(value = "/{id}")
    public @ResponseBody ResponseEntity<Object> delete(@PathVariable("id") Integer id) {
        
        Optional<User> userOptional = userRepository.findById(id);

        if (!userOptional.isPresent())
        return new ResponseEntity(new ApiResponse(false, "Usuario no encontrado"), HttpStatus.NOT_FOUND);

        userRepository.deleteById(id);

        return new ResponseEntity(new ApiResponse(true, "Usuario Eliminado"), HttpStatus.OK);
    }

    // Obtener Usuarios
    @GetMapping(path = "/all")
    //SOLO USUARIOS AHA DEBERIAN PODER VER A TODOS LOS USUARIOS DESPUES
    //@PreAuthorize("hasRole('ROLE_AHA'")
    public @ResponseBody Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }




}