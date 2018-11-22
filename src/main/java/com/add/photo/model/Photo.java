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
import javax.persistence.JoinTable;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

 

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
 
@Entity
public class Photo {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long photoId;
	private String photoName;
	private String title;
	@Lob
	private String description;
	private String imageName;
	private boolean determined;
	
	@OneToMany(cascade = CascadeType.REMOVE )
	@JsonManagedReference
	@JoinTable
	private List<Point> pointList=new ArrayList<>();
	private Date created;
	
	@ManyToOne
	@JsonBackReference
	private User user;
	
	private int likes;
	
	@OneToMany(mappedBy = "photo", fetch=FetchType.EAGER , cascade = CascadeType.REMOVE )
	private List<Comment> commentList=new ArrayList<>();;

	
	
}
