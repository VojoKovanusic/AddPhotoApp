package com.add.photo.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.add.photo.model.Photo;
import com.add.photo.model.Point;
@Transactional
@Service
public interface PointService {
public void savePoint(String userName,String photoName,Point point);
public List<Point> findPointByPhotoId(Long photoId);
public void addGpsCoordinate(Photo photo, Point point);

}
