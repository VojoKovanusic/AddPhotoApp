package com.example.model;

public class ObjForComment {

	private Photo photo;
	private User user;
	private Comment comment;
	
	
	public ObjForComment() {
		
	}
	
	public Photo getPhoto() {
		return photo;
	}
	public void setPhoto(Photo photo) {
		this.photo = photo;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Comment getComment() {
		return comment;
	}
	public void setComment(Comment comment) {
		this.comment = comment;
	}

	@Override
	public String toString() {
		return "ObjForComment [photo=" + photo + ", user=" + user + ", comment=" + comment + "]";
	}
	
	
	
}
