package com.example.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.model.User;


 
@Repository
public interface UserDao extends JpaRepository<User, Long> {
    User findByuserName(String userName);
    User findByEmail(String email);
   

}
