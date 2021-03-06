package com.grupo1.ahainclusion.loaders;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Random;

import javax.transaction.Transactional;

import com.grupo1.ahainclusion.model.Oferta;
import com.grupo1.ahainclusion.model.PerfilAHA;
import com.grupo1.ahainclusion.model.PerfilCandidato;
import com.grupo1.ahainclusion.model.PerfilLaboral;
import com.grupo1.ahainclusion.model.PerfilEmpresa;
import com.grupo1.ahainclusion.model.Privilege;
import com.grupo1.ahainclusion.model.Role;
import com.grupo1.ahainclusion.model.User;
import com.grupo1.ahainclusion.model.candidato.Direccion;
import com.grupo1.ahainclusion.model.candidato.Experiencia;
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
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class InitialDataLoader implements ApplicationListener<ContextRefreshedEvent> {

  @Value("${app.initialSetup}")
  private boolean initialSetup;

  private Random rand = new Random(5);
  private String userSeed = "foobar";

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

    if (!initialSetup)
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
    Role ahaRole = roleRepository.findByName("ROLE_AHA");

    // SE AGREGAN USUARIOS CANDIDATOS RANDOM
    try {
      getRandomUsers(candidatoRole, 40);
    } catch (JSONException | UnirestException | IOException | ParseException e) {
      e.printStackTrace();
    }

    // SE AGREGAN USUARIOS AHA
    User aha1 = new User();
    aha1.setEmail("karina@ahainclusion.com");
    aha1.setPassword(passwordEncoder.encode("aha1234"));
    aha1.setEnabled(true);
    aha1.setRoles(Arrays.asList(ahaRole));
    userRepository.save(aha1);
    PerfilAHA pAHA1 = new PerfilAHA();
    pAHA1.setFirstName("Karina");
    pAHA1.setLastName("Cisterna");
    pAHA1.setRut("XX.XXX.XXX-X");
    pAHA1.setUser(aha1);
    perfilAHARepository.save(pAHA1);

    User aha2 = new User();
    aha2.setEmail("sebastian@ahainclusion.com");
    aha2.setPassword(passwordEncoder.encode("aha1234"));
    aha2.setEnabled(true);
    aha2.setRoles(Arrays.asList(ahaRole));
    userRepository.save(aha2);
    PerfilAHA pAHA2 = new PerfilAHA();
    pAHA2.setFirstName("Sebastian");
    pAHA2.setLastName("Espinoza");
    pAHA2.setRut("XX.XXX.XXX-X");
    pAHA2.setUser(aha2);
    perfilAHARepository.save(pAHA2);

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
    pEmpresa1.setRutEmpresa("7.461.223-3");
    pEmpresa1.setTelefono1("56228949874");
    pEmpresa1.setTelefono2("56229301323");
    pEmpresa1.setEmail2("contacto2@lider.cl");
    pEmpresa1.setUser(empresa1);
    perfilEmpresaRepository.save(pEmpresa1);

    PerfilEmpresa pEmpresa2 = new PerfilEmpresa();
    pEmpresa2.setNameEmpresa("Ripley");
    pEmpresa2.setRutEmpresa("5.236.112-9");
    pEmpresa2.setTelefono1("56228391012");
    pEmpresa2.setTelefono2("56229303251");
    pEmpresa2.setEmail2("contacto2@lider.cl");
    pEmpresa2.setUser(empresa2);
    perfilEmpresaRepository.save(pEmpresa2);

    // SE AGREGAN OFERTAS

    Oferta oferta1 = new Oferta();
    Oferta oferta2 = new Oferta();
    Oferta oferta3 = new Oferta();

    // Detalles ofertas

    oferta1.setName("Reponedor");
    oferta1.setDescription("Reponedor de productos");
    oferta1.setPerfilEmpresa(pEmpresa1);

    oferta1.setSillaDeRuedas(rand.nextBoolean());

    oferta1.setActividadesAuditiva(rand.nextInt(3));
    oferta1.setActividadesVisual(rand.nextInt(3));
    oferta1.setBanhoAdaptado(rand.nextBoolean());
    oferta1.setComunicacionOral(rand.nextInt(3));
    oferta1.setDesplazoTrayectos(rand.nextInt(3));
    oferta1.setDiferentesAlturas(rand.nextInt(3));
    oferta1.setDiferentesPisos(rand.nextInt(3));
    oferta1.setDisponibilidad(rand.nextInt(3));
    oferta1.setLeerEscribir(rand.nextInt(3));
    oferta1.setLicencia("Clase A");
    oferta1.setNivelEducacional(rand.nextInt(8));
    oferta1.setObjetosPequenhos(rand.nextInt(3));
    oferta1.setPermanecerPie(rand.nextInt(3));
    oferta1.setPermanecerSentado(rand.nextInt(3));
    oferta1.setResolverProblemas(rand.nextInt(3));
    oferta1.setRentaEstimada(rand.nextInt(5));
    oferta1.setSillaDeRuedas(rand.nextBoolean());
    oferta1.setSituacionesConflicto(rand.nextInt(3));
    oferta1.setSituacionesNuevas(rand.nextInt(3));
    oferta1.setTareasEstresantes(rand.nextInt(3));
    oferta1.setTrabajoEquipo(rand.nextInt(3));

    oferta2.setName("Guardia");
    oferta2.setDescription("Guardia de seguridad");
    oferta2.setPerfilEmpresa(pEmpresa1);

    oferta2.setActividadesAuditiva(rand.nextInt(3));
    oferta2.setActividadesVisual(rand.nextInt(3));
    oferta2.setBanhoAdaptado(rand.nextBoolean());
    oferta2.setComunicacionOral(rand.nextInt(3));
    oferta2.setDesplazoTrayectos(rand.nextInt(3));
    oferta2.setDiferentesAlturas(rand.nextInt(3));
    oferta2.setDiferentesPisos(rand.nextInt(3));
    oferta2.setDisponibilidad(rand.nextInt(3));
    oferta2.setLeerEscribir(rand.nextInt(3));
    oferta2.setLicencia("Clase B");
    oferta2.setNivelEducacional(rand.nextInt(8));
    oferta2.setObjetosPequenhos(rand.nextInt(3));
    oferta2.setPermanecerPie(rand.nextInt(3));
    oferta2.setPermanecerSentado(rand.nextInt(3));
    oferta2.setResolverProblemas(rand.nextInt(3));
    oferta2.setRentaEstimada(rand.nextInt(5));
    oferta2.setSillaDeRuedas(rand.nextBoolean());
    oferta2.setSituacionesConflicto(rand.nextInt(3));
    oferta2.setSituacionesNuevas(rand.nextInt(3));
    oferta2.setTareasEstresantes(rand.nextInt(3));
    oferta2.setTrabajoEquipo(rand.nextInt(3));

    oferta3.setName("Vendedor");
    oferta3.setDescription("Vendedor departamento de tecnología");
    oferta3.setPerfilEmpresa(pEmpresa2);

    oferta3.setActividadesAuditiva(rand.nextInt(3));
    oferta3.setActividadesVisual(rand.nextInt(3));
    oferta3.setBanhoAdaptado(rand.nextBoolean());
    oferta3.setComunicacionOral(rand.nextInt(3));
    oferta3.setDesplazoTrayectos(rand.nextInt(3));
    oferta3.setDiferentesAlturas(rand.nextInt(3));
    oferta3.setDiferentesPisos(rand.nextInt(3));
    oferta3.setDisponibilidad(rand.nextInt(3));
    oferta3.setLeerEscribir(rand.nextInt(3));
    oferta3.setLicencia("Clase C");
    oferta3.setNivelEducacional(rand.nextInt(8));
    oferta3.setObjetosPequenhos(rand.nextInt(3));
    oferta3.setPermanecerPie(rand.nextInt(3));
    oferta3.setPermanecerSentado(rand.nextInt(3));
    oferta3.setResolverProblemas(rand.nextInt(3));
    oferta3.setRentaEstimada(rand.nextInt(5));
    oferta3.setSillaDeRuedas(rand.nextBoolean());
    oferta3.setSituacionesConflicto(rand.nextInt(3));
    oferta3.setSituacionesNuevas(rand.nextInt(3));
    oferta3.setTareasEstresantes(rand.nextInt(3));
    oferta3.setTrabajoEquipo(rand.nextInt(3));

    ofertaRepository.save(oferta1);
    ofertaRepository.save(oferta2);
    ofertaRepository.save(oferta3);

    // Experiencias exigidas por las ofertas

    ExperienciaExigida expExigida = new ExperienciaExigida();
    expExigida.setArea(3);
    expExigida.setDuracion(2);
    expExigida.setOferta(oferta1);
    experienciaExigidaRepository.save(expExigida);

    ExperienciaExigida expExigida2 = new ExperienciaExigida();
    expExigida2.setArea(6);
    expExigida2.setDuracion(1);
    expExigida2.setOferta(oferta1);
    experienciaExigidaRepository.save(expExigida2);

    ExperienciaExigida expExigida3 = new ExperienciaExigida();
    expExigida3.setArea(2);
    expExigida3.setDuracion(2);
    expExigida3.setOferta(oferta2);
    experienciaExigidaRepository.save(expExigida3);

    ExperienciaExigida expExigida4 = new ExperienciaExigida();
    expExigida4.setArea(1);
    expExigida4.setDuracion(3);
    expExigida4.setOferta(oferta3);
    experienciaExigidaRepository.save(expExigida4);

    ExperienciaExigida expExigida5 = new ExperienciaExigida();
    expExigida5.setArea(4);
    expExigida5.setDuracion(1);
    expExigida5.setOferta(oferta3);
    experienciaExigidaRepository.save(expExigida5);

    initialSetup = false;
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
  private void getRandomUsers(Role role, Integer n)
      throws JSONException, UnirestException, IOException, ParseException {
      
   
    String url = "https://randomuser.me/api/?inc=gender,id,name,email&results="+n+"&nat=US&seed="+userSeed;
    JSONArray results = Unirest.get(url).asJson().getBody().getObject().getJSONArray("results");

    SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

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
      pCandidato.setRut("18.357.330-6");
      pCandidato.setFechaNacimiento(sdf.parse("04/06/1989"));
      pCandidato.setNacionalidad("Chile");
      pCandidato.setGenero(2);
      pCandidato.setEmail2(email+".alt");
      pCandidato.setTelefono1("56940953465");
      pCandidato.setTelefono2("56224569077");

      Direccion dir = new Direccion();
      dir.setCalle("Avda. Central 1349");
      dir.setRegion(6);
      dir.setComuna(48);

      pCandidato.setDireccion(dir);


      pCandidato.setUser(usr);
      perfilCandidatoRepository.save(pCandidato);

      PerfilLaboral pLaboral = new PerfilLaboral();

      Experiencia experiencia1 = new Experiencia();
      experiencia1.setArea(rand.nextInt(26));
      experiencia1.setCargo("Nombre del cargo");
      experiencia1.setEmpresa("Random S.A");
      experiencia1.setFechaInicio(sdf.parse("15/06/2001"));
      experiencia1.setFechaFin(sdf.parse("15/07/2002"));


      pLaboral.setSillaDeRuedas(rand.nextBoolean());
      pLaboral.setdAuditiva(rand.nextInt(4));
      pLaboral.setdFisica(rand.nextInt(4));
      pLaboral.setdIntelectual(rand.nextInt(4));
      pLaboral.setdPsiquica(rand.nextInt(4));
      pLaboral.setdVisual(rand.nextInt(4));

      pLaboral.setActividadesAuditiva(rand.nextInt(3));
      pLaboral.setActividadesVisual(rand.nextInt(3));
      pLaboral.setAdecuaciones("Necesito un interprete");
      pLaboral.setAutoPropio(rand.nextBoolean());
      pLaboral.setAyudaFormulario(rand.nextInt(3));
      pLaboral.setBanhoAdaptado(rand.nextBoolean());
      pLaboral.setComunicacionOral(rand.nextInt(3));
      pLaboral.setCredencial(true);
      // pLaboral.setCursos(cursos);
      pLaboral.setDesplazoTrayectos(rand.nextInt(3));
      pLaboral.setDiferentesAlturas(rand.nextInt(3));
      pLaboral.setDiferentesPisos(rand.nextInt(3));
      pLaboral.setDisponibilidad(rand.nextInt(3));
      pLaboral.setExpectativaSueldo(rand.nextInt(5));
      pLaboral.setLeerEscribir(rand.nextInt(3));
      pLaboral.setLicencia("Clase A");
      pLaboral.setNivelEducacional(rand.nextInt(8));
      pLaboral.setObjetosPequenhos(rand.nextInt(3));
      pLaboral.setPermanecerPie(rand.nextInt(3));
      pLaboral.setPermanecerSentado(rand.nextInt(3));
      pLaboral.setResolverProblemas(rand.nextInt(3));
      pLaboral.setSillaDeRuedas(rand.nextBoolean());
      pLaboral.setSituacionesConflicto(rand.nextInt(3));
      pLaboral.setSituacionesNuevas(rand.nextInt(3));
      pLaboral.setTareasEstresantes(rand.nextInt(3));
      // pLaboral.setTitulos(titulos);
      pLaboral.setTrabajoEquipo(rand.nextInt(3));

      pLaboral.setExperiencias(Arrays.asList(experiencia1));

      

      
      
      


      pLaboral.setPerfilCandidato(pCandidato);

      perfilLaboralRepository.save(pLaboral);

    }

    Unirest.shutdown();
    }
}