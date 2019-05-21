package com.grupo1.ahainclusion.recommendation;

import java.util.ArrayList;
import java.util.List;

import com.grupo1.ahainclusion.model.Oferta;
import com.grupo1.ahainclusion.model.User;
import com.grupo1.ahainclusion.repository.UserRepository;

public class RecGenerator {
    
    private UserRepository userRepository;

    private List<Recommendation> generate(Oferta oferta, int n) {
        
        Iterable<User> users = userRepository.findAll();
        List<Recommendation> recommendations = new ArrayList<>();

        System.out.println("HOLAAAAAAAAAAA");
        for(User u: users)
        {
            System.out.println(u.getFirstName());
        }
        System.out.println("HOLAAAAAAAAAAA");
        
        return recommendations;
    }


}