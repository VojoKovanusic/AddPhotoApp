package com.example.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

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
public class PhotoServiceImpl implements PhotoService {
 @Autowired
 PhotoDao photoDao;
 @Autowired
 UserDao userDao;
 @Autowired
 PointDao pointDao;
	@Override
	public List<Photo> getPhotos() {
		List<Photo> photos= photoDao.findAll();
		if(photos.size()>1)
		photos.sort((p1,p2)->p1.getPhotoName().compareTo(p2.getPhotoName()));
		return  photos;
		
	}



	@Override
	public Photo savePhoto(Photo photo) {
	
		return photoDao.save(photo);
		
	}

	@Override
	public List<Photo> findByUser(User user) {
		return photoDao.findByUser(user);
	}

	@Override
	public Photo findByPhotoId(Long photoId) {
		return photoDao.findByPhotoId(photoId);
	}





	@Override
	public void savePhotoToUsersPhotoList(String userName, Photo photo,Point point) {

		User user=userDao.findByuserName(userName);
		
		user.getPhotoList().add(photo);
		
		photo.getPointList().add(point);
		point.setPhoto(photo);
		
		photo.setUser(user);
		
		pointDao.save(point);
		photoDao.save(photo);
		userDao.save(user);
	}



	@Override
	public  List<Photo> getPhotosByUsername(String userName) {
		User user=userDao.findByuserName(userName);
	
		return user.getPhotoList().stream().collect(Collectors.toList());
	}


	//bez funkcije za sada
	@Override
	public List<Photo> getPhotoListByUserId(Long id) {
List<Photo> listPhotoByUserId=new ArrayList<>();
		

//getPhotos().stream().filter(p->p.getUser().getUserId()==id).findAny();


		for (Photo photo : getPhotos()) {
			if(photo.getUser().getUserId()==id)
				listPhotoByUserId.add(photo);
			
		}
		
 		return listPhotoByUserId;

}



	@Override
	public void deletePhoto(Long photoId) {
		
		photoDao.delete(photoId);
	}



 
}