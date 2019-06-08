package com.grupo1.ahainclusion.aux.payload;

public class UserSummary {
    private Integer id;
    private String name;
    private String email;

    public UserSummary(Integer id, String name, String email) {
        this.setId(id);
        this.setName(name);
        this.setEmail(email);
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
