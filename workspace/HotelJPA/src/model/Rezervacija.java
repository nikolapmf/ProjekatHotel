package model;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.Date;


/**
 * The persistent class for the rezervacija database table.
 * 
 */
@Entity
@NamedQuery(name="Rezervacija.findAll", query="SELECT r FROM Rezervacija r")
public class Rezervacija implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int idRezervacija;

	private int brojNocenja;

	@Temporal(TemporalType.DATE)
	private Date datum;

	//bi-directional many-to-one association to Korisnik
	@ManyToOne
	@JsonIgnore
	private Korisnik korisnik;

	//bi-directional many-to-one association to Soba
	@ManyToOne
	@JsonIgnore
	private Soba soba;

	public Rezervacija() {
	}

	public int getIdRezervacija() {
		return this.idRezervacija;
	}

	public void setIdRezervacija(int idRezervacija) {
		this.idRezervacija = idRezervacija;
	}

	public int getBrojNocenja() {
		return this.brojNocenja;
	}

	public void setBrojNocenja(int brojNocenja) {
		this.brojNocenja = brojNocenja;
	}

	public Date getDatum() {
		return this.datum;
	}

	public void setDatum(Date datum) {
		this.datum = datum;
	}

	public Korisnik getKorisnik() {
		return this.korisnik;
	}

	public void setKorisnik(Korisnik korisnik) {
		this.korisnik = korisnik;
	}

	public Soba getSoba() {
		return this.soba;
	}

	public void setSoba(Soba soba) {
		this.soba = soba;
	}

}