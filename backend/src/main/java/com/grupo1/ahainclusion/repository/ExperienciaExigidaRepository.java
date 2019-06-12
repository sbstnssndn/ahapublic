package com.grupo1.ahainclusion.repository;

import com.grupo1.ahainclusion.model.Oferta;
import com.grupo1.ahainclusion.model.oferta.ExperienciaExigida;

import org.springframework.data.repository.CrudRepository;

public interface ExperienciaExigidaRepository extends CrudRepository<ExperienciaExigida, Integer> {

	Iterable<ExperienciaExigida> findByOferta(Oferta oferta);

}