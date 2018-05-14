package com.example.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Comment;
 
@Repository
public interface CommentDao extends JpaRepository<Comment, Long> {

}
