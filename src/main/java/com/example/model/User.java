package com.example.model;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

 

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long userId;
	private String firistName;
	private String lastName;
	private String userName;
	private String password;
	private Date created;
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JsonManagedReference
	private List<Photo> photoList;
	
	@ManyToMany
	private List<Photo> likedPhotoList;

	public User() {
		
	}
	
	
	public String getFiristName() {
		return firistName;
	}


	public void setFiristName(String firistName) {
		this.firistName = firistName;
	}


	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}


	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Date getCreated() {
		return created;
	}

	public void setCreated(Date created) {
		this.created = created;
	}

	public List<Photo> getPhotoList() {
		return photoList;
	}

	public void setPhotoList(List<Photo> photoList) {
		this.photoList = photoList;
	}

	public List<Photo> getLikedPhotoList() {
		return likedPhotoList;
	}

	public void setLikedPhotoList(List<Photo> likedPhotoList) {
		this.likedPhotoList = likedPhotoList;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", firistName=" + firistName + ", lastName=" + lastName + ", userName="
				+ userName + ", password=" + password + ", created=" + created + ", photoList=" + photoList
				+ ", likedPhotoList=" + likedPhotoList + "]";
	}

	
	
	
}