package com.example.service;

import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;

import com.example.model.Photo;
import com.example.model.User;

public interface UserService {

	public User gtUserByID(Long userId);
	public List<User> getUsers();
	public User saveUser(User user);
	public void updatePhotoUser(String userName, Photo photo);
	public void deleteUser(long userId);
	public User getUserByUsername(String userName);
	public boolean isUserNemeExists(String userName);
	public boolean isMailExists(String mail);
	public String loginUser(Map<String, String> json) throws ServletException;
	public void deletePhotoUser(String userName, Photo photoId);
	public User findUserByPhotoName(String photoName);
}
