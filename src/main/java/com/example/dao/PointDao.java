package com.example.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Photo;
import com.example.model.Point;
import com.example.model.User;
@Repository
public interface PointDao extends JpaRepository<Point, Long> {
	List<Point> findByPhotoPhotoId(Long photoId);
}
