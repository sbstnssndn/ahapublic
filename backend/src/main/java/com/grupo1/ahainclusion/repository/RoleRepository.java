package com.grupo1.ahainclusion.repository;

import com.grupo1.ahainclusion.model.Role;
import org.springframework.data.repository.CrudRepository;

public interface RoleRepository extends CrudRepository<Role, Integer> {

	Role findByName(String string);

}