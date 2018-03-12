package com.example.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Photo;
import com.example.model.User;

@Repository

public interface PhotoDao  extends JpaRepository<Photo, Long> {

	List<Photo> findByUser(User user);
	Photo findByPhotoId(Long photoId);
	 
}
