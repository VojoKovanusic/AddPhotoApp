package com.add.photo.service;

import java.util.ArrayList;

import com.add.photo.model.Comment;
import com.add.photo.model.Photo;


public interface  CommentService {

	void saveComment(String usrName,  Photo photo, String comment);

	ArrayList<Comment> getComment(Long photoId);

	

}
