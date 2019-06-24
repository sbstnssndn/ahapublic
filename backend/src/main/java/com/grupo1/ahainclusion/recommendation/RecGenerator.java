package com.grupo1.ahainclusion.recommendation;

import java.util.ArrayList;
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

    @Autowired RoleRepository roleRepository;

    public List<Recommendation> generate(Oferta oferta, int n) {
        
        System.out.println("----------------------------");
        Role role = roleRepository.findByName("ROLE_CANDIDATO");
        Iterable<User> users = userRepository.findByRoles(role);
        List<Recommendation> recommendations = new ArrayList<>();

        Integer perc = 85;
        for(User u: users)
        {
            Recommendation rcm = new Recommendation();
            UserSummary userSummary = new UserSummary(u.getId(), u.getPerfilCandidato().getFirstName() +" "+ u.getPerfilCandidato().getLastName(), u.getEmail(), null, "Candidato");
            rcm.setUserSummary(userSummary);
            perc = perc - 3;
            rcm.setPercentage(perc);

            recommendations.add(rcm);

            System.out.println("Usuario: " +rcm.getUserSummary().getName() +" "+"Porcentaje: "+rcm.getPercentage());
        }
        System.out.println("----------------------------");
        
        return recommendations.subList(0, n);
    }


}