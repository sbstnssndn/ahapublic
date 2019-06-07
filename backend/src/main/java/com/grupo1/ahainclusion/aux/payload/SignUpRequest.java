package com.grupo1.ahainclusion.aux.payload;

import javax.validation.constraints.NotBlank;

public class SignUpRequest {
    @NotBlank
    private String email;

    @NotBlank
    private String password;

    @NotBlank
    private String role;

    public String getPassword() {
        return password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}