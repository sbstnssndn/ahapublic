package com.grupo1.ahainclusion.loaders;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import javax.transaction.Transactional;

import com.grupo1.ahainclusion.model.PerfilAccesibilidad;
import com.grupo1.ahainclusion.model.Privilege;
import com.grupo1.ahainclusion.model.Role;
import com.grupo1.ahainclusion.model.User;
import com.grupo1.ahainclusion.repository.PerfilAccesibilidadRepository;
import com.grupo1.ahainclusion.repository.PerfilDiscapacidadRepository;
import com.grupo1.ahainclusion.repository.PrivilegeRepository;
import com.grupo1.ahainclusion.repository.RoleRepository;
import com.grupo1.ahainclusion.repository.UserRepository;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

@Component
public class InitialDataLoader implements ApplicationListener<ContextRefreshedEvent> {

  boolean alreadySetup = false;

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private RoleRepository roleRepository;

  @Autowired
  private PrivilegeRepository privilegeRepository;

  @Autowired
  private PerfilAccesibilidadRepository perfilAccesibilidadRepository;

  @Autowired
  private PerfilDiscapacidadRepository perfilDiscapacidadRepository;

  @Override
  @Transactional
  public void onApplicationEvent(ContextRefreshedEvent event) {

    if (alreadySetup)
      return;
    // Se crean los privilegios.
    Privilege privilege1 = createPrivilegeIfNotFound("PRIVILEGIO_1");
    Privilege privilege2 = createPrivilegeIfNotFound("PRIVILEGIO_2");
    Privilege privilege3 = createPrivilegeIfNotFound("PRIVILEGIO_3");

    // --- ASIGNACIÓN DE PRIVILEGIOS ----
    // Se asignan los privilegios de AHA
    List<Privilege> ahaPrivileges = Arrays.asList(privilege1, privilege2, privilege3);
    // Se asignan los privilegios de Candidatos
    List<Privilege> candidatoPrivileges = Arrays.asList(privilege1);
    // Se asignan los privilegios de Empresas
    List<Privilege> empresaPrivileges = Arrays.asList(privilege2);

    // Se crean los roles
    createRoleIfNotFound("ROLE_AHA", ahaPrivileges);
    createRoleIfNotFound("ROLE_CANDIDATO", candidatoPrivileges);
    createRoleIfNotFound("ROLE_EMPRESA", empresaPrivileges);

    Role candidatoRole = roleRepository.findByName("ROLE_CANDIDATO");
    Role empresaRole = roleRepository.findByName("ROLE_EMPRESA");

    try {
      List<User> users = getRandomUsers(candidatoRole, 20);
      userRepository.saveAll(users);
    } catch (JSONException | UnirestException | IOException e) {
      e.printStackTrace();
    }

    // Se agregan usuarios Empresa + perfiles de Accesibilidad
    User empresa1 = new User();

    PerfilAccesibilidad perfilA1 = new PerfilAccesibilidad();
    perfilA1.setName("Perfil Líder Ñuñoa");
    perfilAccesibilidadRepository.save(perfilA1);

    User empresa2 = new User();
    PerfilAccesibilidad perfilA2 = new PerfilAccesibilidad();
    perfilA2.setName("Perfil Ripley Santiago Centro");
    perfilAccesibilidadRepository.save(perfilA2);


    empresa1.setFirstName("Líder");
    empresa1.setLastName("");
    empresa1.setEmail("contacto@lider.cl");
    empresa1.setRoles(Arrays.asList(empresaRole));
    empresa1.setPerfilAccesibilidad(perfilAccesibilidadRepository.findById(1).get());
    empresa1.setEnabled(true);

    empresa2.setFirstName("Ripley");
    empresa2.setLastName("");
    empresa2.setEmail("contacto@ripley.cl");
    empresa2.setRoles(Arrays.asList(empresaRole));
    empresa2.setPerfilAccesibilidad(perfilAccesibilidadRepository.findById(2).get());
    empresa2.setEnabled(true);
    

    userRepository.save(empresa1);
    userRepository.save(empresa2);


    alreadySetup = true;
  }

  @Transactional
  private Privilege createPrivilegeIfNotFound(String name) {

    Privilege privilege = privilegeRepository.findByName(name);
    if (privilege == null) {
      privilege = new Privilege();
      privilege.setName(name);
      privilegeRepository.save(privilege);
    }
    return privilege;
  }

  @Transactional
  private Role createRoleIfNotFound(String name, Collection<Privilege> privileges) {

    Role role = roleRepository.findByName(name);
    if (role == null) {
      role = new Role();
      role.setName(name);
      role.setPrivileges(privileges);
      roleRepository.save(role);
    }
    return role;
  }

  @Transactional
  private List<User> getRandomUsers(Role role, Integer n) throws JSONException, UnirestException, IOException {
      
    List<User> users = new ArrayList<>();
    
    String url = "https://randomuser.me/api/?inc=gender,id,name,email&results="+n+"&nat=US";
    JSONArray results = Unirest.get(url).asJson().getBody().getObject().getJSONArray("results");

    for(int i=0;i<results.length();i++)
    {
      JSONObject result = results.getJSONObject(i);
      JSONObject names = result.getJSONObject("name");
      String email = result.get("email").toString();
      String firstName = names.get("first").toString();
      String lastName = names.get("last").toString();

      User usr = new User();

      usr.setFirstName(firstName);
      usr.setLastName(lastName);
      usr.setEmail(email);
      usr.setRoles(Arrays.asList(role));
      usr.setEnabled(true);

      users.add(usr);

    }

    Unirest.shutdown();
    
    return users;
    }
}