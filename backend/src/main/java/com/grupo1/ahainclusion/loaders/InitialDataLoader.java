package com.grupo1.ahainclusion.loaders;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

import javax.transaction.Transactional;

import com.grupo1.ahainclusion.model.Oferta;
import com.grupo1.ahainclusion.model.PerfilAccesibilidad;
import com.grupo1.ahainclusion.model.PerfilCandidato;
import com.grupo1.ahainclusion.model.PerfilDiscapacidad;
import com.grupo1.ahainclusion.model.PerfilEmpresa;
import com.grupo1.ahainclusion.model.Privilege;
import com.grupo1.ahainclusion.model.Role;
import com.grupo1.ahainclusion.model.User;
import com.grupo1.ahainclusion.repository.OfertaRepository;
import com.grupo1.ahainclusion.repository.PerfilAccesibilidadRepository;
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
  private OfertaRepository ofertaRepository;

  @Autowired
  private PerfilAccesibilidadRepository perfilAccesibilidadRepository;

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

    // SE AGREGAN USUARIOS CANDIDATOS RANDOM
    try {
      List<User> users = getRandomUsers(candidatoRole, 20);
      userRepository.saveAll(users);
    } catch (JSONException | UnirestException | IOException e) {
      e.printStackTrace();
    }

    // SE AGREGAN USUARIOS EMPRESA + PERFILES DE ACCESIBILIDAD
    User empresa1 = new User();

    PerfilAccesibilidad perfilA1 = new PerfilAccesibilidad();
    perfilA1.setName("Perfil Líder Ñuñoa");
    perfilA1.setAccesoSilla(true);
    perfilA1.setcAuditiva(90);
    perfilA1.setcFisica(80);
    perfilA1.setcIntelectual(80);
    perfilA1.setcPsiquica(70);
    perfilA1.setcVisual(60);

    User empresa2 = new User();
    PerfilAccesibilidad perfilA2 = new PerfilAccesibilidad();
    perfilA2.setName("Perfil Ripley Santiago Centro");
    perfilA2.setAccesoSilla(false);
    perfilA2.setcAuditiva(75);
    perfilA2.setcFisica(100);
    perfilA2.setcIntelectual(75);
    perfilA2.setcPsiquica(75);
    perfilA2.setcVisual(75);

    
    PerfilEmpresa pEmpresa1 = new PerfilEmpresa();
    pEmpresa1.setNameEmpresa("Líder");
    //pEmpresa1.setRutEmpresa("");

    empresa1.setPerfilEmpresa(pEmpresa1);
    empresa1.setEmail("contacto@lider.cl");
    empresa1.setRoles(Arrays.asList(empresaRole));
    empresa1.setPerfilesAccesibilidad(Arrays.asList(perfilA1));
    empresa1.setEnabled(true);

    PerfilEmpresa pEmpresa2 = new PerfilEmpresa();
    pEmpresa2.setNameEmpresa("Ripley");
    //pEmpresa2.setRutEmpresa("");

    empresa2.setPerfilEmpresa(pEmpresa2);
    empresa2.setEmail("contacto@ripley.cl");
    empresa2.setRoles(Arrays.asList(empresaRole));
    empresa2.setPerfilesAccesibilidad(Arrays.asList(perfilA2));
    empresa2.setEnabled(true);
    

    userRepository.save(empresa1);
    userRepository.save(empresa2);

    // SE AGREGAN OFERTAS

    Oferta oferta1 = new Oferta();
    Oferta oferta2 = new Oferta();
    Oferta oferta3 = new Oferta();

    oferta1.setName("Reponedor");
    oferta1.setDescription("Reponedor de productos");
    oferta1.setUser(empresa1);
    oferta1.setPerfilAccesibilidad(perfilA1);

    oferta2.setName("Guardia");
    oferta2.setDescription("Guardia de seguridad");
    oferta2.setUser(empresa1);
    oferta2.setPerfilAccesibilidad(perfilA1);

    oferta3.setName("Vendedor");
    oferta3.setDescription("Vendedor departamento de tecnología");
    oferta3.setUser(empresa2);
    oferta3.setPerfilAccesibilidad(perfilA2);

    ofertaRepository.save(oferta1);
    ofertaRepository.save(oferta2);
    ofertaRepository.save(oferta3);


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

      PerfilCandidato pCandidato = new PerfilCandidato();
      pCandidato.setFirstName(firstName);
      pCandidato.setLastName(lastName);
      //pCandidato.setRut("");


      usr.setEmail(email);
      //usr.setPassword("");
      usr.setPerfilCandidato(pCandidato);
      usr.setRoles(Arrays.asList(role));
      usr.setEnabled(true);

      PerfilDiscapacidad pDiscapacidad = new PerfilDiscapacidad();
      pDiscapacidad.setCredencial(false);
      pDiscapacidad.setSillaDeRuedas(false);
      pDiscapacidad.setdAuditiva(50);
      pDiscapacidad.setdFisica(50);
      pDiscapacidad.setdIntelectual(50);
      pDiscapacidad.setdPsiquica(50);
      pDiscapacidad.setdVisual(50);

      usr.setPerfilDiscapacidad(pDiscapacidad);

      users.add(usr);

    }

    Unirest.shutdown();
    
    return users;
    }
}