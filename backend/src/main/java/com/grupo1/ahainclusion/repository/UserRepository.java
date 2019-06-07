package com.grupo1.ahainclusion.repository;

import java.util.Optional;

import com.grupo1.ahainclusion.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {

	Optional<User> findByEmail(String email);

}