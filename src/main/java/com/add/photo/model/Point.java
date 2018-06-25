package com.add.photo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import com.fasterxml.jackson.annotation.JsonBackReference;


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
	
		public Point() {
		 
	}
	public Photo getPhoto() {
		return photo;
	}

	public void setPhoto(Photo photo) {
		this.photo = photo;
	}



	public double getLongitude() {
		return longitude;
	}

	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}

	public double getLatitude() {
		return latitude;
	}

	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}

}
