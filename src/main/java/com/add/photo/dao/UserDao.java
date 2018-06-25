package com.add.photo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.add.photo.model.User;


 
@Repository
public interface UserDao extends JpaRepository<User, Long> {
    User findByuserName(String userName);
    User findByEmail(String email);
   

}
