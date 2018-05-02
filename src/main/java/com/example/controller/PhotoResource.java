package com.example.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.model.Photo;
import com.example.service.PhotoService;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;



@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@RequestMapping("/photo/")

public class PhotoResource {
	
	@Autowired
	PhotoService photoService;
	private final String UPLOAD_DIR = "C:/Users/Korisnik/git/AddPhotos/src/main/resources/front-add-photo/src/assets/img/";
	
	@GetMapping("all/photos")
	public List<Photo> getAllPhoto() {
		return photoService.getPhotos();
	}
	
	@GetMapping("getByPhotoId/{id}")
	
	public List<Photo> getPhotoByPhotoId(@PathVariable  Long id) {
		return photoService.getPhotoListByUserId(id) ;

	}
	@DeleteMapping("delete/{id}")
	
	public List<Photo> deletePhoto(@PathVariable  Long id) {
		return photoService.getPhotoListByUserId(id) ;

	}
	
	@PutMapping("edit/")
	public void editPhoto(@RequestBody  Photo photo) {
		 photoService.save(photo) ;

	}
	
	@PostMapping(value = "add/{userName}" )
	public void savePhoto(@PathVariable String userName, @RequestBody Photo photo) {
		photoService.savePhotoToUsersPhotoList(userName,photo);
		 
	}


	@RequestMapping(value = "upload", method = RequestMethod.POST)
	public void saveUplodedFile(@RequestParam("file") MultipartFile file) throws IOException {
		saveFile(file);
		System.out.println("ime fajla"+file.toString());

		
	}

	
	@GetMapping(value="byUsername/{userName}")
	public   List<Photo> getPhotosByUsername(@PathVariable String userName) {
		return  photoService.getPhotosByUsername(userName);}
	
	private void saveFile(MultipartFile file) throws IOException {
		
		byte[] bytes = file.getBytes();
		java.nio.file.Path path = Paths.get(UPLOAD_DIR + file.getOriginalFilename());
		Files.write(path, bytes);
	}
}
