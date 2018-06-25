package com.add.photo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.add.photo.config.JwtFilter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@SpringBootApplication
public class AddPhotoAppApplication {
//	@Bean
//	public FilterRegistrationBean jwtFilter() {
//		final FilterRegistrationBean registrationBean = new FilterRegistrationBean();
//		registrationBean.setFilter(new JwtFilter());
//		registrationBean.addUrlPatterns("/login/*");
//		return registrationBean;
//	}

	private static Logger log = LoggerFactory.getLogger(AddPhotoAppApplication.class);

	public static void main(String[] args) throws Exception {
		SpringApplication.run(AddPhotoAppApplication.class, args);
	}

	//
}