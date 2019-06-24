package com.grupo1.ahainclusion.recommendation;

import com.grupo1.ahainclusion.aux.payload.UserSummary;
import com.grupo1.ahainclusion.model.User;

public class Recommendation {

    private UserSummary userSummary;
    private Integer percentage;

    public Integer getPercentage() {
        return percentage;
    }

    public UserSummary getUserSummary() {
        return userSummary;
    }

    public void setUserSummary(UserSummary userSummary) {
        this.userSummary = userSummary;
    }

    public void setPercentage(Integer percentage) {
        this.percentage = percentage;
    }


}