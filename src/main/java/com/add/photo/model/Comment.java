package com.add.photo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
 
@Entity
@Builder

public class Comment {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long commentId;
	private Long photoId;
	private String content;
	
	@ManyToOne
	@JsonIgnore
	private Photo photo;
	
	@ManyToOne
	@JsonIgnore
	private User user;
	
	private String userName;
 
	
}
