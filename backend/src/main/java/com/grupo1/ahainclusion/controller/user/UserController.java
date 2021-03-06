package com.grupo1.ahainclusion.controller.user;

import java.net.URI;
import java.util.Collections;
import java.util.Optional;

import javax.validation.Valid;

import com.grupo1.ahainclusion.auth.CurrentUser;
import com.grupo1.ahainclusion.auth.UserPrincipal;
import com.grupo1.ahainclusion.aux.payload.ApiResponse;
import com.grupo1.ahainclusion.aux.payload.PasswordUpdate;
import com.grupo1.ahainclusion.aux.payload.SignUpRequest;
import com.grupo1.ahainclusion.aux.payload.UserSummary;
import com.grupo1.ahainclusion.model.PerfilAHA;
import com.grupo1.ahainclusion.model.PerfilCandidato;
import com.grupo1.ahainclusion.model.PerfilEmpresa;
import com.grupo1.ahainclusion.model.PerfilLaboral;
import com.grupo1.ahainclusion.model.Role;
import com.grupo1.ahainclusion.model.User;
import com.grupo1.ahainclusion.repository.CursoRepository;
import com.grupo1.ahainclusion.repository.PerfilAHARepository;
import com.grupo1.ahainclusion.repository.PerfilCandidatoRepository;
import com.grupo1.ahainclusion.repository.PerfilEmpresaRepository;
import com.grupo1.ahainclusion.repository.PerfilLaboralRepository;
import com.grupo1.ahainclusion.repository.RoleRepository;
import com.grupo1.ahainclusion.repository.TituloRepository;
import com.grupo1.ahainclusion.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
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

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    private PerfilCandidatoRepository perfilCandidatoRepository;

    @Autowired
    private PerfilLaboralRepository perfilLaboralRepository;

    @Autowired
    private PerfilEmpresaRepository perfilEmpresaRepository;

    @Autowired
    private PerfilAHARepository perfilAHARepository;


    // Obtener usuario logeado
    @GetMapping(path = "/me")
    @PreAuthorize("hasRole('ROLE_CANDIDATO') or hasRole('ROLE_EMPRESA') or hasRole('ROLE_AHA')")
    public @ResponseBody UserSummary getCurrentUser(@CurrentUser UserPrincipal currentUser) {

        UserSummary userSummary = new UserSummary(currentUser.getId(), currentUser.getName(), currentUser.getEmail(), currentUser.getAuthorities(), currentUser.getRole(), currentUser.getDetails());

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

        if(isCandidato)
            user.setEnabled(true);
        if(isAHA)
            user.setEnabled(true);


        User result = userRepository.save(user);

        if (isCandidato) {
            PerfilCandidato pCandidato = new PerfilCandidato();
            pCandidato.setUser(user);
            perfilCandidatoRepository.save(pCandidato);
            PerfilLaboral pLaboral = new PerfilLaboral();
            pLaboral.setPerfilCandidato(pCandidato);
            perfilLaboralRepository.save(pLaboral);
        }
        if (isEmpresa) {
            PerfilEmpresa pEmpresa = new PerfilEmpresa();
            pEmpresa.setUser(user);
            perfilEmpresaRepository.save(pEmpresa);
        }
        if (isAHA) {
            PerfilAHA pAHA = new PerfilAHA();
            pAHA.setUser(user);
            perfilAHARepository.save(pAHA);

        }

        URI location = ServletUriComponentsBuilder.fromCurrentContextPath().path("/user/{id}")
                .buildAndExpand(result.getId()).toUri();

        return ResponseEntity.created(location).body(new ApiResponse(true, "Usuario creado correctamente."));
    }


    //Obtener usuario por id
    @GetMapping(value = "/{id}")
    @PreAuthorize("hasRole('ROLE_CANDIDATO') or hasRole('ROLE_EMPRESA') or hasRole('ROLE_AHA')")
    public @ResponseBody User get(@CurrentUser UserPrincipal currentUser, @PathVariable("id") Integer id) {

        if(!currentUser.getRole().equals("aha") && currentUser.getId()!=id ) {
            return null;
        }

        return userRepository.findById(id).get();
    }

    //Eliminar un usuario por id
    @DeleteMapping(value = "/{id}")
    @PreAuthorize("hasRole('ROLE_AHA')")
    public @ResponseBody ResponseEntity<Object> delete(@CurrentUser UserPrincipal currentUser, @PathVariable("id") Integer id) {
        
        if(!currentUser.getRole().equals("aha") && currentUser.getId()!=id ) {
            return new ResponseEntity(new ApiResponse(false, "No autorizado para ver a este usuario"), HttpStatus.NOT_FOUND);
        }

        Optional<User> userOptional = userRepository.findById(id);

        if (!userOptional.isPresent())
        return new ResponseEntity(new ApiResponse(false, "Usuario no encontrado"), HttpStatus.NOT_FOUND);

        userRepository.deleteById(id);

        return new ResponseEntity(new ApiResponse(true, "Usuario Eliminado"), HttpStatus.OK);
    }

    @PutMapping(path="/{id}/changePassword")
    @PreAuthorize("hasRole('ROLE_CANDIDATO') or hasRole('ROLE_EMPRESA') or hasRole('ROLE_AHA')")
    public ResponseEntity<?> changePassword(@CurrentUser UserPrincipal currentUser, @PathVariable("id") Integer id, @Valid @RequestBody PasswordUpdate pUpdate) {

        if(!currentUser.getRole().equals("aha") && currentUser.getId()!=id ) {
            return new ResponseEntity(new ApiResponse(false, "No autorizado para ver cambiar esta contraseña"), HttpStatus.NOT_FOUND);
        }

        
        Optional<User> userOptional = userRepository.findById(id);

        if (!userOptional.isPresent())
        return new ResponseEntity(new ApiResponse(false, "Usuario no encontrado"), HttpStatus.NOT_FOUND);

        User user = userOptional.get();

        boolean matches = passwordEncoder.matches(pUpdate.getOldPassword(), user.getPassword());

        if(matches)
        {
            user.setPassword(passwordEncoder.encode(pUpdate.getNewPassword()));
            userRepository.save(user);
            return new ResponseEntity(new ApiResponse(true, "Contraseña actualizada"), HttpStatus.OK);
        }

        return new ResponseEntity(new ApiResponse(false, "Contraseña anterior inválida"), HttpStatus.FORBIDDEN);
    }

    // Obtener todos los Usuarios
    @GetMapping(value = "/all")
    //SOLO USUARIOS AHA DEBERIAN PODER VER A TODOS LOS USUARIOS DESPUES
    @PreAuthorize("hasRole('ROLE_AHA')")
    public @ResponseBody Iterable<User> getAllUsers() {
        
        return userRepository.findAll();
    }

    // Obtener Usuarios por rol
    @GetMapping(value = "/{role}/all")
    //SOLO USUARIOS AHA DEBERIAN PODER VER A TODOS LOS USUARIOS DESPUES
    @PreAuthorize("hasRole('ROLE_AHA')")
    public @ResponseBody Iterable<User> getAllUsers(@PathVariable("role") String role) {
        role = role.toLowerCase();
        if(role.equals("candidato"))
        {
            Role roleCandidato = roleRepository.findByName("ROLE_CANDIDATO");
            return userRepository.findByRoles(roleCandidato);
        }

        if(role.equals("empresa"))
        {
            Role roleEmpresa = roleRepository.findByName("ROLE_EMPRESA");
            return userRepository.findByRoles(roleEmpresa);
        }

        if(role.equals("aha"))
        {
            Role roleAHA = roleRepository.findByName("ROLE_AHA");
            return userRepository.findByRoles(roleAHA);
        }

        return null;
    }



}