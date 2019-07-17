package com.grupo1.ahainclusion.repository;

import com.grupo1.ahainclusion.model.Privilege;
import org.springframework.data.repository.CrudRepository;

public interface PrivilegeRepository extends CrudRepository<Privilege, Integer> {

	Privilege findByName(String name);

}