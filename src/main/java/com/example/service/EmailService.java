package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;


import com.example.model.User;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender emailSender;

    public void sendSimpleMessage(User user){
    	
        SimpleMailMessage message = new SimpleMailMessage();
        
        message.setSubject("Podatci za logovanje na sajtu Lepidoptera");
        message.setText(
        		"Vas username :"+user.getUserName()+
        		"\r\nVas password: "+user.getPassword()+
        		"\r\nLink : http://localhost:4200/login");
        message.setTo(user.getLastName());
        message.setFrom("wbs.vojo@gmail.com");
        emailSender.send(message);
     
    }  }