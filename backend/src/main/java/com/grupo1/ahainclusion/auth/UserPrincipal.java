package com.grupo1.ahainclusion.auth;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.grupo1.ahainclusion.aux.payload.Details;
import com.grupo1.ahainclusion.model.User;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class UserPrincipal implements UserDetails {
    private Integer id;

    private String name;

    @JsonIgnore
    private String email;

    @JsonIgnore
    private String password;

    @JsonIgnore
    private Details details;

    private Collection<? extends GrantedAuthority> authorities;

    private String role;

    public UserPrincipal(Integer id, String name, String email, String password,
            Collection<? extends GrantedAuthority> authorities, String role, Details details) {
        this.id = id;
        this.setName(name);
        this.email = email;
        this.password = password;
        this.authorities = authorities;
        this.role = role;
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public static UserPrincipal create(User user) {
        List<GrantedAuthority> authorities = user.getRoles().stream().map(role ->
                new SimpleGrantedAuthority(role.getName())
        ).collect(Collectors.toList());

        boolean isCandidato = false;
        boolean isEmpresa = false;
        boolean isAHA = false;
        String role = "none";
        Details details = new Details();

        for (GrantedAuthority grantedAuthority : authorities) {
            if ("ROLE_CANDIDATO".equals(grantedAuthority.getAuthority())) {
                isCandidato = true;
                role = "candidato";
            }
            if ("ROLE_EMPRESA".equals(grantedAuthority.getAuthority())) {
                isEmpresa = true;
                role = "empresa";
            }
            if ("ROLE_AHA".equals(grantedAuthority.getAuthority())) {
                isAHA = true;
                role = "aha";
            }
        }

        if(isCandidato && user.getPerfilCandidato()!=null) {
            details.setEmail2(user.getPerfilCandidato().getEmail2());
            details.setTelefono1(user.getPerfilCandidato().getTelefono1());
            details.setTelefono2(user.getPerfilCandidato().getTelefono2());
            return new UserPrincipal(
                user.getId(),
                user.getPerfilCandidato().getFirstName(),
                user.getEmail(),
                user.getPassword(),
                authorities,
                role,
                details
            );
        }

        if(isEmpresa && user.getPerfilEmpresa()!=null) {
            return new UserPrincipal(
                user.getId(),
                user.getPerfilEmpresa().getNameEmpresa(),
                user.getEmail(),
                user.getPassword(),
                authorities,
                role,
                details
            );
        }

        if(isAHA && user.getPerfilAHA()!=null) {
            return new UserPrincipal(
                user.getId(),
                user.getPerfilAHA().getFirstName(),
                user.getEmail(),
                user.getPassword(),
                authorities,
                role,
                details
            );
        }
        
        return new UserPrincipal(
            user.getId(),
            user.getEmail(),
            user.getEmail(),
            user.getPassword(),
            authorities,
            role,
            details
        );
    }

    public Integer getId() {
        return id;
    }

    @Override
    public String getUsername() {
        return email;
    }

    public String getEmail() {
        return email;
    }


    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserPrincipal that = (UserPrincipal) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id);
    }
}
