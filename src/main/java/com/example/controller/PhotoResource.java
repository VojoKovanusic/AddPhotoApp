package com.example.controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.IOException;

import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;





import java.nio.file.Files;
import java.nio.file.Paths;



@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@RequestMapping("/rest")
public class PhotoResource {

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
