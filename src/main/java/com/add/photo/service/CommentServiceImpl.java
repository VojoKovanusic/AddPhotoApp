package com.add.photo.service;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.add.photo.dao.CommentDao;
import com.add.photo.dao.PhotoDao;
import com.add.photo.dao.UserDao;
import com.add.photo.model.Comment;
import com.add.photo.model.Photo;
import com.add.photo.model.User;



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
