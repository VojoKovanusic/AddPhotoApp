package com.example.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.model.Photo;
import com.example.model.Point;
@Transactional
@Service
public interface PointService {
public void savePoint(String userName,String photoName,Point point);
public List<Point> findPointByPhotoId(Long photoId);
public void addGpsCoordinate(Photo photo, Point point);
}
