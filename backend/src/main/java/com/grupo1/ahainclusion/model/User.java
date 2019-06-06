package com.grupo1.ahainclusion.model;

import java.util.Collection;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	private String email;
	private String password;
	private boolean enabled;

	@ManyToMany
	@JoinTable(name = "users_roles", joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "id"))
	private Collection<Role> roles;

	@OneToOne(cascade =  CascadeType.ALL )
	private PerfilCandidato perfilCandidato;

	@OneToOne(cascade = CascadeType.ALL )
	private PerfilAHA perfilAHA;

	@OneToOne(cascade = CascadeType.ALL )
	private PerfilEmpresa perfilEmpresa;

	public Integer getId() {
		return id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public PerfilEmpresa getPerfilEmpresa() {
		return perfilEmpresa;
	}

	public void setPerfilEmpresa(PerfilEmpresa perfilEmpresa) {
		this.perfilEmpresa = perfilEmpresa;
	}

	public PerfilAHA getPerfilAHA() {
		return perfilAHA;
	}

	public void setPerfilAHA(PerfilAHA perfilAHA) {
		this.perfilAHA = perfilAHA;
	}

	public PerfilCandidato getPerfilCandidato() {
		return perfilCandidato;
	}

	public void setPerfilCandidato(PerfilCandidato perfilCandidato) {
		this.perfilCandidato = perfilCandidato;
	}

	public void setId(Integer id) {
		this.id = id;
	}
  
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Collection<Role> getRoles() {
		return roles;
	}

	public void setRoles(Collection<Role> roles) {
		this.roles = roles;
	}

	public boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}



}