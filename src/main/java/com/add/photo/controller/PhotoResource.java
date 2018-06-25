package com.add.photo.controller;

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

import com.add.photo.model.Comment;
import com.add.photo.model.Photo;
import com.add.photo.model.Point;
import com.add.photo.model.SavePhotoAndPoint;
import com.add.photo.service.CommentService;
import com.add.photo.service.PhotoService;
import com.add.photo.service.PointService;

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
	@Autowired
	PointService pointService;
	
	@Autowired
	CommentService comentService;
	
	private final String UPLOAD_DIR = "C:/Users/Korisnik/git/AddPhotos/src/main/resources/front-add-photo/src/assets/img/";
	
	@GetMapping("all/photos")
	public List<Photo> getAllPhoto() {
		return photoService.getPhotos();
	}
	
	@GetMapping("all/photos/forDeterminate")
	public List<Photo> getAllPhotoForDeterminate() {
		return photoService.getPhotosforDeterminate();
	}
	
	@GetMapping("getByPhotoId/{id}")
	public  Photo getPhotoByPhotoId(@PathVariable  Long id) {
		return photoService.findByPhotoId(id) ;

	}
	
	
	@DeleteMapping("delete/{photoId}")
	public void deletePhoto(@PathVariable Long photoId) {
		  photoService.deletePhoto(photoId);

	}
	
	@PutMapping("edit/")
	public void editPhoto(@RequestBody  Photo photo) {
		 photoService.savePhoto(photo) ;

	}
	
	@PostMapping(value = "add/{userName}" )
	public void savePhoto(@PathVariable String userName, @RequestBody SavePhotoAndPoint photoAndPoint) {
		Photo photo=photoAndPoint.getPhoto();
		Point point=photoAndPoint.getPoint();
		
		photoService.savePhotoToUsersPhotoList(userName,photo,point);
		 
	}

	@RequestMapping(value = "upload", method = RequestMethod.POST)
	public void saveUplodedFile(@RequestParam("file") MultipartFile file) throws IOException {
		saveFile(file);
		

		
	}

	
	@GetMapping(value="byUsername/{userName}")
	public   List<Photo> getPhotosByUsername(@PathVariable String userName) {
		return  photoService.getPhotosByUsername(userName);}
	
	private void saveFile(MultipartFile file) throws IOException {
		
		byte[] bytes = file.getBytes();
		java.nio.file.Path path = Paths.get(UPLOAD_DIR + file.getOriginalFilename());
		Files.write(path, bytes);
	}
	
	@GetMapping("getPoints/{photoId}")
	public  List<Point> getPointByPhotoId(@PathVariable  Long photoId) {
		return pointService.findPointByPhotoId(photoId) ;
	}
	
	
	@PostMapping("/add/point/{userName}/{photoName}")
	public void addPoint( @PathVariable String userName, @PathVariable  String photoName, @RequestBody Point point) {
		pointService.savePoint(userName, photoName, point);
		
	}
	@PostMapping("/add/new/point")
	public void addGpsCoordinate(@RequestBody SavePhotoAndPoint photoAndPoint) {
		Photo photo=photoAndPoint.getPhoto();
		Point point=photoAndPoint.getPoint();
	
		pointService.addGpsCoordinate(photo, point);
		
	}
	@GetMapping("isExists/{name:.+}")
	public  boolean isGeniusAndSpeciusExist(@PathVariable  String name) {
		return photoService.isGeniusAndSpeciusExists(name) ;
	}
	
	@PostMapping("/add/comment/{userName:.+}/{content:.+}")
	public void postComment(@PathVariable String userName, @PathVariable  String content,@RequestBody Photo photo) {

		comentService.saveComment(userName,photo,content);
		
	}
	
	@GetMapping("/get/comment/{photoId}")
	public ArrayList<Comment> getComment(@PathVariable Long photoId) {

		return comentService.getComment(photoId);
		
	}
}
