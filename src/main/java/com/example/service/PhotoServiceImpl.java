package com.example.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.dao.PhotoDao;
import com.example.dao.UserDao;
import com.example.model.Photo;
@Transactional
@Service
public class PhotoServiceImpl implements PhotoService {
 @Autowired
 PhotoDao photoDao;
 @Autowired
 UserDao userDao;

	@Override
	public List<Photo> getPhotos() {
		return  photoDao.findAll();
		
	
		
	}

	@Override
	public List<Photo> getPhotoListByUserId(Long id) {
		
		List<Photo> listPhotoByUserId=getPhotos();
		for (Photo photo : listPhotoByUserId) {
			if(photo.getUser().getUserId()==id)
				listPhotoByUserId.add(photo);
			
		}
		
 		return listPhotoByUserId;
	}

}
