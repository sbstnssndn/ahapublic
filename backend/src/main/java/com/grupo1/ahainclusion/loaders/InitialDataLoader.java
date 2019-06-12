package com.grupo1.ahainclusion.loaders;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

import javax.transaction.Transactional;

import com.grupo1.ahainclusion.model.Oferta;
import com.grupo1.ahainclusion.model.PerfilCandidato;
import com.grupo1.ahainclusion.model.PerfilLaboral;
import com.grupo1.ahainclusion.model.PerfilEmpresa;
import com.grupo1.ahainclusion.model.Privilege;
import com.grupo1.ahainclusion.model.Role;
import com.grupo1.ahainclusion.model.User;
import com.grupo1.ahainclusion.model.oferta.ExperienciaExigida;
import com.grupo1.ahainclusion.repository.ExperienciaExigidaRepository;
import com.grupo1.ahainclusion.repository.OfertaRepository;
import com.grupo1.ahainclusion.repository.PerfilAHARepository;
import com.grupo1.ahainclusion.repository.PerfilCandidatoRepository;
import com.grupo1.ahainclusion.repository.PerfilEmpresaRepository;
import com.grupo1.ahainclusion.repository.PerfilLaboralRepository;
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
import org.springframework.security.crypto.password.PasswordEncoder;
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
  PasswordEncoder passwordEncoder;

  @Autowired
  private PerfilLaboralRepository perfilLaboralRepository;

  @Autowired
  private PerfilCandidatoRepository perfilCandidatoRepository;

  @Autowired
  private PerfilEmpresaRepository perfilEmpresaRepository;

  @Autowired
  private PerfilAHARepository perfilAHARepository;

  @Autowired
  private ExperienciaExigidaRepository experienciaExigidaRepository;
  
  

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
      getRandomUsers(candidatoRole, 20);
    } catch (JSONException | UnirestException | IOException e) {
      e.printStackTrace();
    }

    // SE AGREGAN USUARIOS EMPRESA + PERFILES DE ACCESIBILIDAD
    User empresa1 = new User();
    empresa1.setEmail("contacto@lider.cl");
    empresa1.setPassword("lider1234");
    empresa1.setPassword(passwordEncoder.encode(empresa1.getPassword()));
    empresa1.setRoles(Arrays.asList(empresaRole));
    empresa1.setEnabled(true);
    userRepository.save(empresa1);

    User empresa2 = new User();
    empresa2.setEmail("contacto@ripley.cl");
    empresa2.setPassword("ripley1234");
    empresa2.setPassword(passwordEncoder.encode(empresa2.getPassword()));
    empresa2.setRoles(Arrays.asList(empresaRole));
    empresa2.setEnabled(true);
    userRepository.save(empresa2);


    PerfilEmpresa pEmpresa1 = new PerfilEmpresa();
    pEmpresa1.setNameEmpresa("Líder");
    //pEmpresa1.setRutEmpresa("");
    pEmpresa1.setUser(empresa1);
    perfilEmpresaRepository.save(pEmpresa1);
  

    PerfilEmpresa pEmpresa2 = new PerfilEmpresa();
    pEmpresa2.setNameEmpresa("Ripley");
    //pEmpresa2.setRutEmpresa("");
    pEmpresa2.setUser(empresa2);
    perfilEmpresaRepository.save(pEmpresa2);


    // SE AGREGAN OFERTAS

    Oferta oferta1 = new Oferta();
    Oferta oferta2 = new Oferta();
    Oferta oferta3 = new Oferta();

    //Detalles ofertas   

    oferta1.setName("Reponedor");
    oferta1.setDescription("Reponedor de productos");
    oferta1.setPerfilEmpresa(pEmpresa1);

    oferta2.setName("Guardia");
    oferta2.setDescription("Guardia de seguridad");
    oferta2.setPerfilEmpresa(pEmpresa1);

    oferta3.setName("Vendedor");
    oferta3.setDescription("Vendedor departamento de tecnología");
    oferta3.setPerfilEmpresa(pEmpresa2);

    ofertaRepository.save(oferta1);
    ofertaRepository.save(oferta2);
    ofertaRepository.save(oferta3);

    //Experiencias exigidas por las ofertas

    ExperienciaExigida expExigida = new ExperienciaExigida();
    expExigida.setTipo("Finanzas");
    expExigida.setDuracion(2);
    expExigida.setOferta(oferta1);
    experienciaExigidaRepository.save(expExigida);

    ExperienciaExigida expExigida2 = new ExperienciaExigida();
    expExigida2.setTipo("Informática");
    expExigida2.setDuracion(1);
    expExigida2.setOferta(oferta1);
    experienciaExigidaRepository.save(expExigida2);

    ExperienciaExigida expExigida3 = new ExperienciaExigida();
    expExigida3.setTipo("Gastronomía");
    expExigida3.setDuracion(2);
    expExigida3.setOferta(oferta2);
    experienciaExigidaRepository.save(expExigida3);

    ExperienciaExigida expExigida4 = new ExperienciaExigida();
    expExigida4.setTipo("Docencia");
    expExigida4.setDuracion(3);
    expExigida4.setOferta(oferta3);
    experienciaExigidaRepository.save(expExigida4);

    ExperienciaExigida expExigida5 = new ExperienciaExigida();
    expExigida5.setTipo("Obras Civiles");
    expExigida5.setDuracion(1);
    expExigida5.setOferta(oferta3);
    experienciaExigidaRepository.save(expExigida5);


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
  private void getRandomUsers(Role role, Integer n) throws JSONException, UnirestException, IOException {
      
   
    String url = "https://randomuser.me/api/?inc=gender,id,name,email&results="+n+"&nat=US&seed=foobar";
    JSONArray results = Unirest.get(url).asJson().getBody().getObject().getJSONArray("results");

    for(int i=0;i<results.length();i++)
    {
      JSONObject result = results.getJSONObject(i);
      JSONObject names = result.getJSONObject("name");
      String email = result.get("email").toString();
      String firstName = names.get("first").toString();
      String lastName = names.get("last").toString();

      User usr = new User();
      usr.setEmail(email);
      usr.setPassword("hola123");
      usr.setPassword(passwordEncoder.encode(usr.getPassword()));
      usr.setRoles(Arrays.asList(role));
      usr.setEnabled(true);
      userRepository.save(usr);

      PerfilCandidato pCandidato = new PerfilCandidato();
      pCandidato.setFirstName(firstName);
      pCandidato.setLastName(lastName);
      //pCandidato.setRut("");
      pCandidato.setUser(usr);
      perfilCandidatoRepository.save(pCandidato);

      PerfilLaboral pLaboral = new PerfilLaboral();
      pLaboral.setCredencial(false);
      pLaboral.setSillaDeRuedas(false);
      pLaboral.setdAuditiva(50);
      pLaboral.setdFisica(50);
      pLaboral.setdIntelectual(50);
      pLaboral.setdPsiquica(50);
      pLaboral.setdVisual(50);      
      pLaboral.setPerfilCandidato(pCandidato);

      perfilLaboralRepository.save(pLaboral);

    }

    Unirest.shutdown();
    }
}