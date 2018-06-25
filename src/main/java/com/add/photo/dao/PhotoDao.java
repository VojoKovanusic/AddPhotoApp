package com.add.photo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.add.photo.model.Photo;
import com.add.photo.model.User;

@Repository
public interface PhotoDao  extends JpaRepository<Photo, Long> {

	List<Photo> findByUser(User user);
	Photo findByPhotoId(Long photoId);
	Photo findByPhotoName(String photoName);
	
}
