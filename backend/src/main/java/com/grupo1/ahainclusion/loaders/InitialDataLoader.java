package com.grupo1.ahainclusion.loaders;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import javax.transaction.Transactional;

import com.grupo1.ahainclusion.model.Privilege;
import com.grupo1.ahainclusion.model.Role;
import com.grupo1.ahainclusion.model.User;
import com.grupo1.ahainclusion.repository.PrivilegeRepository;
import com.grupo1.ahainclusion.repository.RoleRepository;
import com.grupo1.ahainclusion.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

@Component
public class InitialDataLoader implements
  ApplicationListener<ContextRefreshedEvent> {
 
    boolean alreadySetup = false;
 
    @Autowired
    private UserRepository userRepository;
  
    @Autowired
    private RoleRepository roleRepository;
  
    @Autowired
    private PrivilegeRepository privilegeRepository;
  
    @Override
    @Transactional
    public void onApplicationEvent(ContextRefreshedEvent event) {
  
        if (alreadySetup)
            return;
        // Se crean los privilegios.
        Privilege privilege1
          = createPrivilegeIfNotFound("PRIVILEGIO_1");
        Privilege privilege2
          = createPrivilegeIfNotFound("PRIVILEGIO_2");
        Privilege privilege3
          = createPrivilegeIfNotFound("PRIVILEGIO_3");
        
        //--- ASIGNACIÓN DE PRIVILEGIOS ----
        // Se asignan los privilegios de AHA
        List<Privilege> ahaPrivileges = Arrays.asList(
          privilege1, privilege2, privilege3);
        // Se asignan los privilegios de Candidatos
        List<Privilege> candidatoPrivileges = Arrays.asList(
          privilege1);
        // Se asignan los privilegios de Empresas
        List<Privilege> empresaPrivileges = Arrays.asList(
          privilege2); 

        // Se crean los roles
        createRoleIfNotFound("ROLE_AHA", ahaPrivileges);
        createRoleIfNotFound("ROLE_USER", Arrays.asList(privilege1));
        createRoleIfNotFound("ROLE_EMPRESA", Arrays.asList(privilege2));

 
        Role adminRole = roleRepository.findByName("ROLE_ADMIN");
        User user = new User();
        user.setFirstName("John");
        user.setLastName("Jones");
        user.setEmail("John@test.com");
        user.setRoles(Arrays.asList(adminRole));
        user.setEnabled(true);
        userRepository.save(user);
 
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
    private Role createRoleIfNotFound(
      String name, Collection<Privilege> privileges) {
  
        Role role = roleRepository.findByName(name);
        if (role == null) {
            role = new Role();
            role.setName(name);
            role.setPrivileges(privileges);
            roleRepository.save(role);
        }
        return role;
    }
}