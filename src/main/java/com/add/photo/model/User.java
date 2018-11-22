package com.add.photo.model;

import java.util.ArrayList;
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

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter

@Entity
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long userId;
	private String firistName;
	private String email;
	private String userName;
	private String password;
	private Date created;
	
	@OneToMany(cascade =  CascadeType.REMOVE)
	@JsonManagedReference
	private List<Photo> photoList=new ArrayList<>();
	
	@ManyToMany
	private List<Photo> likedPhotoList;

	@OneToMany(mappedBy = "user", fetch=FetchType.EAGER,cascade = CascadeType.REMOVE )
	private List<Comment> commentList=new ArrayList<>();

	
}
