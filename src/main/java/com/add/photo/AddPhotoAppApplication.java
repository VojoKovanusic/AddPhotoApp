package com.add.photo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.web.bind.annotation.CrossOrigin;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@SpringBootApplication
public class AddPhotoAppApplication {

	public static void main(String[] args) throws Exception {
		SpringApplication.run(AddPhotoAppApplication.class, args);
	}

	//
}