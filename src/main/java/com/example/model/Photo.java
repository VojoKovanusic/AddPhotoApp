package com.example.model;

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
	
	@OneToMany(mappedBy = "photo", fetch=FetchType.EAGER)
	private List<Comment> commentList=new ArrayList<>();;

	public Long getPhotoId() {
		return photoId;
	}

 

	 
	 
	public List<Point> getPointList() {
		return pointList;
	}





	public void setPointList(List<Point> pointList) {
		this.pointList = pointList;
	}





	public void setPhotoId(Long photoId) {
		this.photoId = photoId;
	}

	public String getPhotoName() {
		return photoName;
	}

	public void setPhotoName(String photoName) {
		this.photoName = photoName;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImageName() {
		return imageName;
	}

	public void setImageName(String imageName) {
		this.imageName = imageName;
	}

	public Date getCreated() {
		return created;
	}

	public void setCreated(Date created) {
		this.created = created;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public int getLikes() {
		return likes;
	}

	public void setLikes(int likes) {
		this.likes = likes;
	}

	public List<Comment> getCommentList() {
		return commentList;
	}

	public void setCommentList(List<Comment> commentList) {
		this.commentList = commentList;
	}





	public boolean isDetermined() {
		return determined;
	}





	public void setDetermined(boolean determined) {
		this.determined = determined;
	}





	@Override
	public String toString() {
		return "Photo [photoId=" + photoId + ", photoName=" + photoName + ", title=" + title + ", description="
				+ description + ", imageName=" + imageName + ", determined=" + determined + ", pointList=" + pointList
				+ ", created=" + created + ", user=" + user + ", likes=" + likes + ", commentList=" + commentList + "]";
	}

	 
	
	
	
}
