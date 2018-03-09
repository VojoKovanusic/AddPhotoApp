package com.example.service;

import java.util.ArrayList;
import java.util.List;

import com.example.model.Photo;

public interface PhotoService {

	public List<Photo> getPhotos();
	public List<Photo> getPhotoListByUserId(Long id) ;

}
