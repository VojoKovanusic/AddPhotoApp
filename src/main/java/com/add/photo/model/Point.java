package com.add.photo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Point {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long pointId;
	
	private double longitude;
	private double latitude ;
	
	@ManyToOne
	@JsonBackReference
	private Photo photo;
 
}
