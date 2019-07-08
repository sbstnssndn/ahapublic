package com.grupo1.ahainclusion.recommendation;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import com.grupo1.ahainclusion.aux.payload.UserSummary;
import com.grupo1.ahainclusion.model.Oferta;
import com.grupo1.ahainclusion.model.Role;
import com.grupo1.ahainclusion.model.User;
import com.grupo1.ahainclusion.repository.RoleRepository;
import com.grupo1.ahainclusion.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
public class RecGenerator {
    
    @Autowired
    private UserRepository userRepository;

    @Autowired 
    private RoleRepository roleRepository;

    public List<Recommendation> generate(Oferta oferta, int n) {
        
        System.out.println("----------------------------");
        Role role = roleRepository.findByName("ROLE_CANDIDATO");
        Iterable<User> users = userRepository.findByRoles(role);
        List<Recommendation> recommendations = new ArrayList<>();

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

            System.out.println("Usuario " + u.getId() + ": " +rcm.getUserSummary().getName() +" "+"Porcentaje: "+rcm.getPercentage());
        }
        System.out.println("----------------------------");


        Comparator<Recommendation> compareByPerc = (Recommendation r1, Recommendation r2) -> r1.getPercentage().compareTo(r2.getPercentage());

        Collections.sort(recommendations, compareByPerc.reversed());

        return recommendations.subList(0, n);
    }


}