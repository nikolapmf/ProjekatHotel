package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import model.Rezervacija;

public interface RezervacijaRepository extends JpaRepository<Rezervacija, Integer> {

}
