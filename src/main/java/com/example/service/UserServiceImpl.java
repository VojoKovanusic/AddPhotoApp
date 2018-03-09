package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.example.model.User;
import com.example.repository.UserDao;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserDao dao;

	

	@Override
	public List<User> getUsers() {
		return dao.findAll();
	}

	@Override
	public User saveUser(User user) {
		
		return dao.save(user);
	}

	@Override
	public User updateUser(User user) {


		return null;
	}

	@Override
	public void deleteUser(long userId) {
		 
		  dao.delete(userId);
	}

	

	@Override
	public User gtUserByID(Long userId) {
		return dao.findOne(userId);
	}

	@Override
	public User getUserByUsername(String username) {
		return dao.findByuserName(username);
	}

}