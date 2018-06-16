package com.example.service;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.dao.CommentDao;
import com.example.dao.PhotoDao;
import com.example.dao.UserDao;
import com.example.model.Comment;
import com.example.model.ObjForComment;
import com.example.model.Photo;
import com.example.model.User;



@Transactional
@Service

public class CommentServiceImpl implements CommentService {

@Autowired
CommentDao commentDao;
@Autowired
PhotoDao photoDao;
@Autowired
UserDao userDao;
	


@Override
public void saveComment(String userName, Photo photo, String content) {
	
	 
	User user=userDao.findByuserName(userName);

	Comment comment=new Comment(content,photo,user,userName);

	commentDao.save(comment);

}



@Override
public ArrayList<Comment> getComment(Long photoId) {
	return commentDao.findByPhotoPhotoId(photoId);
	 
	
}

	 
}
