package com.example;
 
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

import com.example.config.JwtFilter;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
 
	/*@Bean
	public FilterRegistrationBean jwtFilter() {
		final FilterRegistrationBean registrationBean = new FilterRegistrationBean();
		registrationBean.setFilter(new JwtFilter());
		registrationBean.addUrlPatterns("/user/*");
		return registrationBean;
	}*/
 
		
		
		@SpringBootApplication
		public class AddPhotoAppApplication  {

		    private static Logger log = LoggerFactory.getLogger(AddPhotoAppApplication.class);

		    

		    public static void main(String[] args) throws Exception {
		        SpringApplication.run(AddPhotoAppApplication.class, args);
		    }

//		 
		}