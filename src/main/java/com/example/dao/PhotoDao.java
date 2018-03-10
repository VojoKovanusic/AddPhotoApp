package com.example.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Photo;

@Repository

public interface PhotoDao  extends JpaRepository<Photo, Long> {

  

}
