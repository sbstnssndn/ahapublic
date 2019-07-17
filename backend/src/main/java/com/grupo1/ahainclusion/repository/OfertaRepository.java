package com.grupo1.ahainclusion.repository;

import com.grupo1.ahainclusion.model.Oferta;
import com.grupo1.ahainclusion.model.PerfilEmpresa;
import com.grupo1.ahainclusion.model.User;

import org.springframework.data.repository.CrudRepository;

public interface OfertaRepository extends CrudRepository<Oferta, Integer> {

	Iterable<Oferta> findByPerfilEmpresa(PerfilEmpresa pEmpresa);


}