package com.grupo1.ahainclusion.repository;

import com.grupo1.ahainclusion.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {
}