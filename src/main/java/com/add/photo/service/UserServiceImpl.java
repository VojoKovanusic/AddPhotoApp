package com.add.photo.service;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import javax.servlet.ServletException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.add.photo.dao.PhotoDao;
import com.add.photo.dao.UserDao;
import com.add.photo.model.Photo;
import com.add.photo.model.User;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserDao userDao;
	 @Autowired
	 PhotoDao photoDao;
	@Override
	public List<User> getUsers() {
		return userDao.findAll();
	}

	@Override
	public User saveUser(User user) {

		return userDao.save(user);
	}

 
	@Override
	public void deleteUser(long userId) {

		userDao.delete(userId);
	}

	@Override
	public User gtUserByID(Long userId) {
		return userDao.findOne(userId);
	}

	@Override
	public User getUserByUsername(String username) {
		return userDao.findByuserName(username);
	}

	@Override
	public boolean isUserNemeExists(String userName) {
		for (User user : userDao.findAll()) {
				if (user.getUserName().equals(userName))
				return true;
			} 

		return false; 
		 

	}

	@Override
	public boolean isMailExists(String mail) {

		for (User user : getUsers()) {
			if (user.getEmail().equals(mail))
				return true;
		}

		return false;
	}

	@Override
	public String loginUser(Map<String, String> json) throws ServletException {
		
		
		if (json.get("username") == "" && json.get("password") == "")
			throw new ServletException("Popunite polja za korisnika i sifru");

		String username = json.get("username");
		String password = json.get("password");

		User user = getUserByUsername(username);

		if (user == null)
			throw new ServletException("Ne postoji korisnik " + username);

		if (!password.equals(user.getPassword()))
			throw new ServletException(
					"Niste unjeli validnu sifru," + password + ":" + user.getPassword() + " pokusajte sa drugom!");

		return Jwts.builder().setSubject(username).claim("roles", "user").setIssuedAt(new Date())
				.signWith(SignatureAlgorithm.HS256, "secretkey").compact();
	}

	@Override
	public void updatePhotoUser(String userName, Photo photo) {
		User user= getUserByUsername(userName);
		 
		List<Photo> list= user.getPhotoList().stream()
				.filter(p->p.getPhotoId()!=photo.getPhotoId())
				.collect(Collectors.toList());
		
		
			user.setPhotoList(list);
		    user.getPhotoList().add(photo);
		    
		       saveUser(user);
		
	}

	@Override
	public void deletePhotoUser(String userName, Photo photoId) {
		User user= getUserByUsername(userName);
		 user.getPhotoList().remove(photoId);
		       saveUser(user);
		       
		       photoDao.delete(photoId);
		       
		
	}

	@Override
	public User findUserByPhotoName(String photoName) {
		User user=null;
		try {
			Photo photo=photoDao.findByPhotoName(photoName);
	 user=photo.getUser();	
		} catch (Exception e) {
			// TODO: handle exception
		}

	
		return user;
	}

	@Override
	public ArrayList<String> getAllEmails() {
		ArrayList<String> emails=new ArrayList<>();
		
		 userDao.findAll()
		 .forEach(user->
		 emails.add(user.getEmail()));
		 
		return emails;
	}

	@Override
	public void deleteUserByUsername(String userName) {
		
		User user= userDao.findByuserName(userName);
		
		userDao.delete(user);
		 
	}

	@Override
	public boolean isMailExistsUpdate(String newMail, String oldMail) {
		 
		if(newMail.equals(oldMail)) {
			return false;}
		
		for (User user : getUsers()) {
			
			if (user.getEmail().equals(newMail)){	
			return true;}
		}

		return false;
	}


	@Override
	public boolean isUserNemeExistsUpdate(String newUserName, String oldUserName) {
		if(newUserName.equals(oldUserName)) {
		return false;}
			
		
		
		for (User user : userDao.findAll()) {
			if (user.getUserName().equals(newUserName)) {
		return true;}
		} 

	return false; 
	}

}