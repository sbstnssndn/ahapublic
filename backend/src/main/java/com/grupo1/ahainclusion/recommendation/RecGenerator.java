package com.grupo1.ahainclusion.recommendation;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Objects;

import com.grupo1.ahainclusion.aux.NullChecker;
import com.grupo1.ahainclusion.aux.payload.UserSummary;
import com.grupo1.ahainclusion.model.Oferta;
import com.grupo1.ahainclusion.model.Role;
import com.grupo1.ahainclusion.model.User;
import com.grupo1.ahainclusion.repository.RoleRepository;
import com.grupo1.ahainclusion.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import org.apache.commons.collections4.IterableUtils;

@Service
public class RecGenerator {
    
    @Autowired
    private UserRepository userRepository;

    @Autowired 
    private RoleRepository roleRepository;

    @Autowired
    private NullChecker nullChecker;

    public List<Recommendation> generate(Oferta oferta, int n) {
        
        // System.out.println("----------------------------");
        Role role = roleRepository.findByName("ROLE_CANDIDATO");
        Iterable<User> usersAux = userRepository.findByRolesAndEnabled(role, true);
        List<Recommendation> recommendations = new ArrayList<>();
        List<User> users = new ArrayList<>();

        for(User u: usersAux)
        {
            //Si hay atributos nulos en perfil candidato o laboral descartar al usuario

            List<String> nullsInPerfilCandidato = nullChecker.check(u.getPerfilCandidato());
            if(nullsInPerfilCandidato.size()!=0)
            {
                // System.out.println("usuario: "+u.getId()+"no se agrega (nulos en pC)");
                continue;
            }
            else {
                List<String> nullsInPerfilLaboral = nullChecker.check(u.getPerfilCandidato().getPerfilLaboral());
                System.out.println(nullsInPerfilLaboral);
                if(nullsInPerfilLaboral.size()!=0) {
                    // System.out.println("usuario: "+u.getId()+"no se agrega (nulos en pL)");
                    continue;
                }
                //No hay nulos
                // System.out.println("usuario: "+u.getId()+"se agrega");
                users.add(u);
            }
        }

        //Check por si n es mayor que la cantidad de candidatos del sistema
        if(IterableUtils.size(users)<=n)
            n = IterableUtils.size(users);


        for(User u: users)
        {
            Recommendation rcm = new Recommendation();
            UserSummary userSummary = new UserSummary(u.getId(), u.getPerfilCandidato().getFirstName() +" "
                                                      + u.getPerfilCandidato().getLastName(), u.getEmail(), 
                                                      null, "Candidato");
            rcm.setUserSummary(userSummary);

            PerCalculator perCalculator = new PerCalculator();
            
            Integer percentage = perCalculator.getPercentage(oferta, u);
            rcm.setPercentage(percentage);

            recommendations.add(rcm);

        }


        Comparator<Recommendation> compareByPerc = (Recommendation r1, Recommendation r2) -> r1.getPercentage().compareTo(r2.getPercentage());

        Collections.sort(recommendations, compareByPerc.reversed());

        return recommendations.subList(0, n);
    }
}