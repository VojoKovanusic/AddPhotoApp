package com.example.service;

import java.util.List;

import com.example.model.User;

public interface UserService {

	public User gtUserByID(Long userId);
	public List<User> getUsers();
	public User saveUser(User user);
	public User updateUser(User user);
	public void deleteUser(long userId);
	public User getUserByUsername(String userName);
}
