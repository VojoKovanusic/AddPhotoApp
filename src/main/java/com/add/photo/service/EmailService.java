package com.add.photo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.add.photo.model.User;

@Service
public class EmailService {

	@Autowired
	private JavaMailSender emailSender;

	public void sendSimpleMessage(User user) {

		SimpleMailMessage message = new SimpleMailMessage();

		message.setSubject("Podatci za logovanje na sajtu Lepidoptera");
		message.setText("Vas username :" + user.getUserName() + "\r\nVas password: " + user.getPassword()
				+ "\r\nLink : http://localhost:4200/login");
		message.setTo(user.getEmail());
		message.setFrom("leptiri.test@gmail.com");
		emailSender.send(message);

	}
}