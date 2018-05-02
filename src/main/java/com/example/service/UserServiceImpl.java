package com.example.service;


import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import javax.servlet.ServletException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.dao.UserDao;
import com.example.model.Photo;
import com.example.model.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserDao dao;

	@Override
	public List<User> getUsers() {
		return dao.findAll();
	}

	@Override
	public User saveUser(User user) {

		return dao.save(user);
	}

 
	@Override
	public void deleteUser(long userId) {

		dao.delete(userId);
	}

	@Override
	public User gtUserByID(Long userId) {
		return dao.findOne(userId);
	}

	@Override
	public User getUserByUsername(String username) {
		return dao.findByuserName(username);
	}

	@Override
	public boolean isUserNemeExists(String userName) {

		try {
			return (dao.findByuserName(userName).getUserName().equals(userName));
		} catch (Exception e) {
			return false;
		}

	}

	@Override
	public boolean isMailExists(String mail) {

		for (User user : getUsers()) {
			if (user.getLastName().equals(mail))
				return true;
		}

		return false;
	}

	@Override
	public String loginUser(Map<String, String> json) throws ServletException {
		String username = json.get("username");
		if (json.get("username") == "" && json.get("password") == "")
			throw new ServletException("Popunite polja za korisnika i sifru");

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

}