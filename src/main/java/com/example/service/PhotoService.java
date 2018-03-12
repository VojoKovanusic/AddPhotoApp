package com.example.service;

import java.util.ArrayList;
import java.util.List;

import com.example.model.Photo;
import com.example.model.User;

public interface PhotoService {

	public List<Photo> getPhotos();
	public List<Photo> getPhotoListByUserId(Long id) ;
	public Photo save(Photo photo);
	public List<Photo> findByUser(User user);
	public Photo findByPhotoId(Long photoId);

}
