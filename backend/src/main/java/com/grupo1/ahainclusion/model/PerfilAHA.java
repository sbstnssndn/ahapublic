package com.grupo1.ahainclusion.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;

import org.apache.commons.text.WordUtils;


@Entity
public class PerfilAHA {
    @Id
    private Integer id;

    @OneToOne
    @MapsId
    @JsonBackReference
    private User user;

    private String firstName;
    private String lastName;
    private String rut;

    public String getFirstName() {
        return firstName;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getRut() {
        return rut;
    }

    public void setRut(String rut) {
        this.rut = rut;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        lastName = WordUtils.capitalizeFully(lastName);
        this.lastName = lastName;
    }

    public void setFirstName(String firstName) {
        firstName = WordUtils.capitalizeFully(firstName);
        this.firstName = firstName;
    }

}