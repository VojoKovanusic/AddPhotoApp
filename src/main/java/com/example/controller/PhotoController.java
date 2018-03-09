package com.example.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.service.UserService;
import com.example.model.Photo;
import com.example.service.PhotoService;


@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class PhotoController {
	@Autowired
	PhotoService photoService;

	@Autowired
	UserService userService;

	@GetMapping("photo/allPhoto")
	public List<Photo> getAllPhoto() {

		return photoService.getPhotos();
	}

	@GetMapping("photo/photoByUser/{id}")
	public List<Photo> getPhotoByUser(@PathVariable  Long id) {

		return photoService.getPhotoListByUserId(id) ;

	}}
