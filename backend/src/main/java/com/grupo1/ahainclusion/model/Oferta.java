package com.grupo1.ahainclusion.model;

import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Oferta {
    @Id
	@GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;

    @OneToMany
    private Collection<User> users;

    private String name;
    private String description;

    public Collection<User> getUsers() {
        return users;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setUsers(Collection<User> users) {
        this.users = users;
    }
    
}