package com.example.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.service.EmailService;

import com.example.service.UserService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import com.example.model.Photo;
import com.example.model.User;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class UserController {

	@Autowired
	UserService userService;

	@Autowired
	private EmailService emailService;

	@PostMapping(value = "/register")
	public User registerUser(@RequestBody User user) {
		
		userService.saveUser(user);
		emailService.sendSimpleMessage(user);
		
		return user;
	}
	
	@PostMapping(value = "/login")
	String login(@RequestBody Map<String, String> json) throws ServletException {
		
		return userService.loginUser(json);

	}

	

	@GetMapping(value = "/user/{userId}")
	public User getUser(@PathVariable Long userId) {

		return userService.gtUserByID(userId);
	}

	@GetMapping(value = "/user/username/{userName:.+}")
	public User getByUsername(@PathVariable String userName) {

		return userService.getUserByUsername(userName);
	}

	@GetMapping(value = "/users")
	public List<User> getUsers() {

		return userService.getUsers();
	}

	@DeleteMapping(value = "/user/{userId}")
	public void deleteUser(@PathVariable long userId) {

		userService.deleteUser(userId);
	}
 
	@PutMapping(value = "/user/update/userAndPhoto/{userName:.+}")
	public void updateUsersPhoto(@PathVariable String userName,@RequestBody Photo photo ) {
		
		 userService.updatePhotoUser(userName, photo);
	}
	@DeleteMapping(value = "/user/delete/userPhoto/{userName:.+}/{photoId}")
	public void deleteUsersPhoto(@PathVariable String userName,@PathVariable Photo photoId ) {
		
		 userService.deletePhotoUser(userName, photoId);
	}
 
	@GetMapping(value="isUserNemeExists/{userName:.}")
	public boolean isUserNemeExists(@PathVariable String userName) {
		
		return userService.isUserNemeExists(userName);
	}
	
	//NAKNADNO MORAM REFAKTORISATI LASTNAME U EMAIL
	@GetMapping(value="isMailExist/{mail:.+}")
	public boolean isMailExists(@PathVariable String mail) {
		
		return userService.isMailExists(mail);
	}
	
	@GetMapping(value="user/byPhotoName/{photoName:.+}")
	public User getUserByPhotoName(@PathVariable String photoName) {
		User user=userService.findUserByPhotoName(photoName);
		return user;
	}
	
}
