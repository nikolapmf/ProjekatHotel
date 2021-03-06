package model;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;


/**
 * The persistent class for the soba database table.
 * 
 */
@Entity
@NamedQuery(name="Soba.findAll", query="SELECT s FROM Soba s")
public class Soba implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int idSoba;

	private int brojKreveta;

	private int cena;

	private String imgUrl;

	private int kvadratura;

	private String tipSobe;

	//bi-directional many-to-one association to Rezervacija
	@OneToMany(mappedBy="soba")
	@JsonIgnore
	private List<Rezervacija> rezervacijas;

	public Soba() {
	}

	public int getIdSoba() {
		return this.idSoba;
	}

	public void setIdSoba(int idSoba) {
		this.idSoba = idSoba;
	}

	public int getBrojKreveta() {
		return this.brojKreveta;
	}

	public void setBrojKreveta(int brojKreveta) {
		this.brojKreveta = brojKreveta;
	}

	public int getCena() {
		return this.cena;
	}

	public void setCena(int cena) {
		this.cena = cena;
	}

	public String getImgUrl() {
		return this.imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	public int getKvadratura() {
		return this.kvadratura;
	}

	public void setKvadratura(int kvadratura) {
		this.kvadratura = kvadratura;
	}

	public String getTipSobe() {
		return this.tipSobe;
	}

	public void setTipSobe(String tipSobe) {
		this.tipSobe = tipSobe;
	}

	public List<Rezervacija> getRezervacijas() {
		return this.rezervacijas;
	}

	public void setRezervacijas(List<Rezervacija> rezervacijas) {
		this.rezervacijas = rezervacijas;
	}

	public Rezervacija addRezervacija(Rezervacija rezervacija) {
		getRezervacijas().add(rezervacija);
		rezervacija.setSoba(this);

		return rezervacija;
	}

	public Rezervacija removeRezervacija(Rezervacija rezervacija) {
		getRezervacijas().remove(rezervacija);
		rezervacija.setSoba(null);

		return rezervacija;
	}

}