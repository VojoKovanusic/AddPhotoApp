package com.add.photo.dao;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.add.photo.model.Comment;
 
@Repository
public interface CommentDao extends JpaRepository<Comment, Long> {

	ArrayList<Comment> findByPhotoPhotoId(Long photoId);

}
