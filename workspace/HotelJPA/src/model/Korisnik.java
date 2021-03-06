package model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;


/**
 * The persistent class for the korisnik database table.
 * 
 */
@Entity
@NamedQuery(name="Korisnik.findAll", query="SELECT k FROM Korisnik k")
public class Korisnik implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int idKorisnik;

	private String adresa;

	private String ime;

	private String jmbg;

	private String password;

	private String prezime;

	private String username;

	//bi-directional many-to-one association to Uloga
	@ManyToOne
	@JoinColumn(name="Uloga_idUloga")
	@JsonIgnore
	private Uloga uloga;

	//bi-directional many-to-one association to Rezervacija
	@OneToMany(mappedBy="korisnik")
	@JsonIgnore
	private List<Rezervacija> rezervacijas;

	//bi-directional many-to-one association to Zalba
	@OneToMany(mappedBy="korisnik")
	@JsonIgnore
	private List<Zalba> zalbas;

	public Korisnik() {
	}

	public int getIdKorisnik() {
		return this.idKorisnik;
	}

	public void setIdKorisnik(int idKorisnik) {
		this.idKorisnik = idKorisnik;
	}

	public String getAdresa() {
		return this.adresa;
	}

	public void setAdresa(String adresa) {
		this.adresa = adresa;
	}

	public String getIme() {
		return this.ime;
	}

	public void setIme(String ime) {
		this.ime = ime;
	}

	public String getJmbg() {
		return this.jmbg;
	}

	public void setJmbg(String jmbg) {
		this.jmbg = jmbg;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPrezime() {
		return this.prezime;
	}

	public void setPrezime(String prezime) {
		this.prezime = prezime;
	}

	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public Uloga getUloga() {
		return this.uloga;
	}

	public void setUloga(Uloga uloga) {
		this.uloga = uloga;
	}

	public List<Rezervacija> getRezervacijas() {
		return this.rezervacijas;
	}

	public void setRezervacijas(List<Rezervacija> rezervacijas) {
		this.rezervacijas = rezervacijas;
	}

	public Rezervacija addRezervacija(Rezervacija rezervacija) {
		getRezervacijas().add(rezervacija);
		rezervacija.setKorisnik(this);

		return rezervacija;
	}

	public Rezervacija removeRezervacija(Rezervacija rezervacija) {
		getRezervacijas().remove(rezervacija);
		rezervacija.setKorisnik(null);

		return rezervacija;
	}

	public List<Zalba> getZalbas() {
		return this.zalbas;
	}

	public void setZalbas(List<Zalba> zalbas) {
		this.zalbas = zalbas;
	}

	public Zalba addZalba(Zalba zalba) {
		getZalbas().add(zalba);
		zalba.setKorisnik(this);

		return zalba;
	}

	public Zalba removeZalba(Zalba zalba) {
		getZalbas().remove(zalba);
		zalba.setKorisnik(null);

		return zalba;
	}

}