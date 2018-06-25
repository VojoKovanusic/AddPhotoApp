package com.add.photo.dao;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.add.photo.model.Point;

@Repository
public interface PointDao extends JpaRepository<Point, Long> {
	List<Point> findByPhotoPhotoId(Long photoId);
}
