package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import model.Soba;

public interface SobaRepository extends JpaRepository<Soba, Integer> {
	
}
