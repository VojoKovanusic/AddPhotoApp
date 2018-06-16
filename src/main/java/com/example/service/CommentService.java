package com.example.service;

import java.util.ArrayList;

import com.example.model.Comment;
import com.example.model.ObjForComment;
import com.example.model.Photo;


public interface  CommentService {

	void saveComment(String usrName,  Photo photo, String comment);

	ArrayList<Comment> getComment(Long photoId);

	

}
