package com.example.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.dao.PhotoDao;
import com.example.dao.PointDao;
import com.example.dao.UserDao;
import com.example.model.Photo;
import com.example.model.Point;
import com.example.model.User;
@Transactional
@Service
public class PointServiceImpl implements PointService {
@Autowired
PointDao pointDao;

@Autowired
PhotoDao photoDao;
@Autowired
UserDao userDao;
	@Override
	public void savePoint(String userName,String photoName,Point point) {
		
	    Photo photo=photoDao.findByPhotoName(photoName);
		photo.getPointList().add(point);
		point.setPhoto(photo);
		
		User user=userDao.findByuserName(userName);
		user.getPhotoList().add(photo);
	
		photoDao.save(photo);
		userDao.save(user);
		pointDao.save(point);
		
	}
	@Override
	public List<Point> findPointByPhotoId(Long photoId) {
		// TODO Auto-generated method stub
		return pointDao.findByPhotoPhotoId(photoId);
	}
	@Override
	public void addGpsCoordinate(Photo photo, Point point) {

			photo.getPointList().add(point);
			
			point.setPhoto(photo);
			 
			//photoDao.save(photo);
			pointDao.save(point);
		
	}
	@Override
	public boolean isGeniusAndSpeciusExists(String name) {
		 for (Photo photo   : photoDao.findAll()) {
			 if(photo.getPhotoName().equals(name))
				 return true;
			
		}
		return false;
	}
 


	

}
