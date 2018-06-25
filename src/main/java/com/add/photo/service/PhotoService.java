package com.add.photo.service;

import java.util.ArrayList;
import java.util.List;

import com.add.photo.model.Photo;
import com.add.photo.model.Point;
import com.add.photo.model.User;

public interface PhotoService {

	public List<Photo> getPhotos();
	
	public Photo findByPhotoId(Long photoId);
	
 
	public List<Photo> getPhotoListByUserId(Long id) ;
	
	public Photo savePhoto(Photo photo);
	
	public List<Photo> findByUser(User user);
	
	
	public void savePhotoToUsersPhotoList(String userName,Photo photo,Point point);
	
	public List<Photo> getPhotosByUsername(String userName);

	public void deletePhoto(Long photoId);

	public boolean isGeniusAndSpeciusExists(String name);

	public List<Photo> getPhotosforDeterminate();

	


	 

}