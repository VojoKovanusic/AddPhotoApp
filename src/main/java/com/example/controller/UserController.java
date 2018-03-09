package com.example.controller;

import java.util.Date;
import java.util.List;
import java.util.Map;

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

import com.example.service.UsersSrvice;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import com.example.model.User;


 
	@RestController
   @CrossOrigin(origins="http://localhost:4200",allowedHeaders="*")
	public class UserController {
		
		@Autowired
		UsersSrvice userService;
		
		@PostMapping(value="/login")
		String login(@RequestBody Map<String,String> json) throws ServletException{
			String username=json.get("username");
			if(json.get("username")==""&&json.get("password")=="")
			 	throw new ServletException("Popunite polja za korisnika i sifru");
		
			String password=json.get("password");
			
			User user=userService.getUserByUsername(username);
			
		 	if(user==null)
		 	throw new ServletException("Ne postoji korisnik "+username);
			
			if(!password.equals(user.getPassword()))
				throw new ServletException("Niste unjeli validnu sifru,"+password+":"+user.getPassword()+" pokusajte sa drugom!");

			return  Jwts.builder().setSubject(username).claim("roles", "user").setIssuedAt(new Date())
					.signWith(SignatureAlgorithm.HS256, "secretkey").compact();
					
		}
	
		
		@GetMapping(value="/user/{userId}")
		public User getUser(@PathVariable Long userId) {
			
			return userService.gtUserByID(userId);
		}
		@GetMapping(value="/user/username/{userName}")
		public User getByUsername(@PathVariable String userName) {
			
			return userService.getUserByUsername(userName);
		}
		@GetMapping(value="/users")
		public List<User> getUsers() {
			
			return userService.getUsers();
		}
		@DeleteMapping(value="/user/{userId}")
		public void deleteUser(@PathVariable long userId) {
			
			 userService.deleteUser(userId);
		}
		
		
		@PostMapping(value="/user")
		public User addUser(@RequestBody User user) {
        
			return userService.saveUser(user);
		}
		
		@PutMapping(value="/user")
		public User updateUser(@RequestBody User user) {
			
			return userService.updateUser(user);
		}
		
		 
		
	}

