package com.grupo1.ahainclusion.recommendation;

import com.grupo1.ahainclusion.model.User;

public class Recommendation {
    private User user;
    private Integer percentage;

    public User getUser() {
        return user;
    }

    public Integer getPercentage() {
        return percentage;
    }

    public void setPercentage(Integer percentage) {
        this.percentage = percentage;
    }

    public void setUser(User user) {
        this.user = user;
    }

}