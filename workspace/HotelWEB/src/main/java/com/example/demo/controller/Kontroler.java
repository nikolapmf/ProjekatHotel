package com.example.demo.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.repository.KorisnikRepository;
import com.example.demo.repository.RezervacijaRepository;
import com.example.demo.repository.SobaRepository;
import com.example.demo.repository.UlogaRepository;
import com.example.demo.repository.ZalbaRepository;

import classes.Response;
import model.Korisnik;
import model.Rezervacija;
import model.Soba;
import model.Uloga;
import model.Zalba;

@RestController

@RequestMapping("/api/")
public class Kontroler {

	@Autowired
	SobaRepository sr;
	@Autowired
	KorisnikRepository kr;
	@Autowired
	UlogaRepository ur;
	@Autowired
	RezervacijaRepository rr;
	@Autowired
	ZalbaRepository zr;
	
	@GetMapping(value = "getSveSobe")
	public ResponseEntity<List<Soba>> getSveSobe() {
		return new ResponseEntity<List<Soba>>(sr.findAll(), HttpStatus.OK);
	}
	
	@GetMapping(value = "getSveRezervacije")
	public ResponseEntity<List<Rezervacija>> getSveRezervacije() {
		return new ResponseEntity<List<Rezervacija>>(rr.findAll(), HttpStatus.OK);
	}
	
	@PostMapping(value = "addSoba")
	public ResponseEntity<Soba> addSoba(@RequestParam(name = "brojKreveta") String brojKreveta, 
										@RequestParam(name = "tipSobe") String tipSobe, 
										@RequestParam(name = "kvadratura") String kvadratura,
										@RequestParam(name = "cena") String cena,
										@RequestParam(name = "imgUrl") String imgUrl) {
		Soba s = new Soba();
		int brKreveta = Integer.parseInt(brojKreveta);
		int kvadraturaInt = Integer.parseInt(kvadratura);
		int cenaInt = Integer.parseInt(cena);
		s.setBrojKreveta(brKreveta);
		s.setTipSobe(tipSobe);
		s.setKvadratura(kvadraturaInt);
		s.setCena(cenaInt);
		s.setImgUrl(imgUrl);
		sr.save(s);
		
		return new ResponseEntity<Soba>(s, HttpStatus.OK);
	}
	
	@PostMapping("deleteSoba")
	public ResponseEntity<Boolean> deleteSoba(@RequestParam(name = "idSoba") String idSoba) {
		int sobaInt = Integer.parseInt(idSoba);
		Soba s = sr.findById(sobaInt).get();
		sr.delete(s);
		return new ResponseEntity<Boolean>(true, HttpStatus.OK);
	}
	
	@PostMapping(value = "login")
	public ResponseEntity<Response> login(@RequestParam(name = "username") String username,
			@RequestParam(name = "password") String password) {
		Response r = new Response();

		if (kr.findByUsername(username) != null) {
			if (kr.findByUsername(username).getPassword().equals(password)) {
				r.setUsername(username);
				r.setIdUloga(kr.findByUsername(username).getUloga().getIdUloga());
				r.setIme(kr.findByUsername(username).getIme());
				r.setPrezime(kr.findByUsername(username).getPrezime());
			}
		}
		return new ResponseEntity<Response>(r, HttpStatus.OK);

	}
	
	@PostMapping(value = "register")
	public ResponseEntity<Boolean> register(@RequestBody Korisnik korisnik) {
		if (korisnik.getUsername() != null && kr.findByUsername(korisnik.getUsername()) != null) {
			return new ResponseEntity<Boolean>(false, HttpStatus.OK);
		}
		Korisnik k = new Korisnik();
		Uloga u = ur.findByNaziv("korisnik");
		
		k.setIme(korisnik.getIme());
		k.setPrezime(korisnik.getPrezime());
		k.setUsername(korisnik.getUsername());
		k.setPassword(korisnik.getPassword());
		k.setAdresa(korisnik.getAdresa());
		k.setJmbg(korisnik.getJmbg());
		k.setUloga(u);
		
		kr.save(k);

		return new ResponseEntity<Boolean>(true, HttpStatus.OK);
	}
	
	@PostMapping(value = "addRezervacija")
	public ResponseEntity<Rezervacija> addRezervacija(@RequestParam(name = "username") String username, 
													  @RequestParam(name = "idSoba") String idSoba, 
													  @RequestParam(name = "datum") String datum, 
													  @RequestParam(name = "brojNocenja") int brojNocenja) throws ParseException {
		Soba s = sr.findById(Integer.parseInt(idSoba)).get();
		Korisnik k = kr.findByUsername(username);
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		Date date = new Date();
		date = sdf.parse(datum);
		
		Rezervacija r = new Rezervacija();
		
		r.setDatum(date);
		r.setKorisnik(k);
		r.setBrojNocenja(brojNocenja);
		r.setSoba(s);
		
		rr.save(r);
		return new ResponseEntity<Rezervacija>(r, HttpStatus.OK);
	}
	
	@PostMapping(value = "addZalba")
	public ResponseEntity<Zalba> addZalba(@RequestParam(name = "username") String username, @RequestParam(name = "zalba") String zalba) {
		Korisnik k = kr.findByUsername(username);
		Zalba z = new Zalba();
		z.setOpis(zalba);
		z.setKorisnik(k);
		
		zr.save(z);
		return new ResponseEntity<Zalba>(z, HttpStatus.OK);
	}
}
