package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@EntityScan("model")
@ComponentScan(basePackages = {"controller"})
@ComponentScan(basePackages = {"corsConfig"})
public class HotelWebApplication {

	public static void main(String[] args) {
		SpringApplication.run(HotelWebApplication.class, args);
	}

}
