package com.example.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Weathercontroller {

	@GetMapping(value="time/{city}")
	public String getWeather(@PathVariable String city) {
		
	String localWeather=
			"http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=b7bae2afeda57461b504ce0d144be7ca";
	
	return localWeather;
	}}
