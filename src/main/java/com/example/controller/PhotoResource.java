package com.example.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
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



@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@RequestMapping("/rest")

public class PhotoResource {
	@Autowired
	PhotoService photoService;
	
	@PostMapping(value = "/photo/add" )
	public void savePhoto(@RequestBody Photo photo) {
		photoService.save(photo);
		
	}

	private final String UPLOAD_DIR = "C:/Users/Korisnik/git/AddPhotoApp/src/main/resources/front-add-photo/src/assets/img/";

	@RequestMapping(value = "/upload", method = RequestMethod.POST)
	public void saveUplodedFile(@RequestParam("file") MultipartFile file) throws IOException {
		saveFile(file);
		System.out.println("ime fajla"+file.toString());

		
	}

	private void saveFile(MultipartFile file) throws IOException {

		byte[] bytes = file.getBytes();

		java.nio.file.Path path = Paths.get(UPLOAD_DIR + file.getOriginalFilename());

		Files.write(path, bytes);
	}
}
