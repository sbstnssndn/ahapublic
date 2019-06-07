package com.grupo1.ahainclusion.auth;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import com.fasterxml.jackson.annotation.JsonIgnore;
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

    private Collection<? extends GrantedAuthority> authorities;

    public UserPrincipal(Integer id, String name, String email, String password,
            Collection<? extends GrantedAuthority> authorities) {
        this.id = id;
        this.setName(name);
        this.email = email;
        this.password = password;
        this.authorities = authorities;
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

        for (GrantedAuthority grantedAuthority : authorities) {
            if ("ROLE_CANDIDATO".equals(grantedAuthority.getAuthority())) {
                isCandidato = true;
            }
            if ("ROLE_EMPRESA".equals(grantedAuthority.getAuthority())) {
                isEmpresa = true;
            }
            if ("ROLE_AHA".equals(grantedAuthority.getAuthority())) {
                isAHA = true;
            }
        }

        if(isCandidato) {
            return new UserPrincipal(
                user.getId(),
                user.getPerfilCandidato().getFirstName(),
                user.getEmail(),
                user.getPassword(),
                authorities
            );
        }

        if(isEmpresa) {
            return new UserPrincipal(
                user.getId(),
                user.getPerfilEmpresa().getNameEmpresa(),
                user.getEmail(),
                user.getPassword(),
                authorities
            );
        }

        if(isAHA) {
            return new UserPrincipal(
                user.getId(),
                user.getPerfilAHA().getFirstName(),
                user.getEmail(),
                user.getPassword(),
                authorities
            );
        }
        
        return null;
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
