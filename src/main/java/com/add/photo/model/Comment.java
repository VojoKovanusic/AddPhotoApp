package com.add.photo.model;

 
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
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
	
	
	
	public Comment(String content, Photo photo, User user, String userName) {
		this.content = content;
		this.photo = photo;
		this.user = user;
		this.userName = userName;
	}
	public Comment( ) {
	 
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Long getCommentId() {
		return commentId;
	}
	public void setCommentId(Long commentId) {
		this.commentId = commentId;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public Photo getPhoto() {
		return photo;
	}
	public void setPhoto(Photo photo) {
		this.photo = photo;
	}
	public Long getPhotoId() {
		return photoId;
	}
	public void setPhotoId(Long photoId) {
		this.photoId = photoId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	@Override
	public String toString() {
		return "Comment [commentId=" + commentId + ", photoId=" + photoId + ", content=" + content + ", photo=" + photo
				+ ", user=" + user + ", userName=" + userName + "]";
	}
	
	
	
}
