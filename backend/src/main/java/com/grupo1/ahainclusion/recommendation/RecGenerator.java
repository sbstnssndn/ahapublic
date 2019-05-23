package com.grupo1.ahainclusion.recommendation;

import java.util.ArrayList;
import java.util.List;


import com.grupo1.ahainclusion.model.Oferta;
import com.grupo1.ahainclusion.model.User;
import com.grupo1.ahainclusion.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
public class RecGenerator {
    
    @Autowired
    private UserRepository userRepository;

    public List<Recommendation> generate(Oferta oferta, int n) {
        
        System.out.println("----------------------------");
        Iterable<User> users = userRepository.findAll();
        List<Recommendation> recommendations = new ArrayList<>();

        
        for(User u: users)
        {
            Recommendation rcm = new Recommendation();
            rcm.setUser(u);
            rcm.setPercentage(90);

            recommendations.add(rcm);

            System.out.println("Usuario: " +rcm.getUser().getFirstName() +" "+"Porcentaje: "+rcm.getPercentage());
        }
        System.out.println("----------------------------");
        
        return recommendations;
    }


}