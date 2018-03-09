package com.example.model;

import javax.persistence.*;




@Entity
public class Role {
    @Id
    @GeneratedValue
    private int roleId;

    private String name;


    public Role() {

    }

    public Role(String string) {
	name=string;
	}

	public int getRoleId() {
        return roleId;
    }

    public void setRoleId(int roleId) {
        this.roleId = roleId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

 


}
