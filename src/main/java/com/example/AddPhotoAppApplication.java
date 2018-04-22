package com.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

import com.example.config.JwtFilter;
import com.example.model.Mail;

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

//		    @Override
//		    public void run(ApplicationArguments applicationArguments) throws Exception {
//		    	System.out.println("----------------------------------------------------");
//		        log.info("Spring Mail - Sending Simple Email with JavaMailSender Example");
//System.out.println("----------------------------------------------------");
//		        Mail mail = new Mail();
//		        mail.setFrom("wbs.vojo@gmail.comom");
//		        mail.setTo("mladisumar@gmail.com");
//		        mail.setSubject("Sending Simple Email with JavaMailSender Example");
//		        mail.setContent("This tutorial demonstrates how to send a simple email using Spring Framework.");
//		        System.out.println("----------------------------------------------------");
//		        emailService.sendSimpleMessage(mail);
//		    }
		}