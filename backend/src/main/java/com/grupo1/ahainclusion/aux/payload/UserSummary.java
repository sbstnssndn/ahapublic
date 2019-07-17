package com.grupo1.ahainclusion.aux.payload;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;


public class UserSummary {
    private Integer id;
    private String name;
    private String email;
    private Collection<? extends GrantedAuthority> authorities;
    private String role;
    private Details details;

    public UserSummary(Integer id, String name, String email, Collection<? extends GrantedAuthority> authorities,
            String role, Details details) {
        this.setId(id);
        this.setName(name);
        this.setEmail(email);
        this.setAuthorities(authorities);
        this.setRole(role);
        this.setDetails(details);
    }

    public Details getDetails() {
        return details;
    }

    public void setDetails(Details details) {
        this.details = details;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    public void setAuthorities(Collection<? extends GrantedAuthority> authorities) {
        this.authorities = authorities;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }


}
