package model;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the zalba database table.
 * 
 */
@Entity
@NamedQuery(name="Zalba.findAll", query="SELECT z FROM Zalba z")
public class Zalba implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int idZalba;

	private String opis;

	//bi-directional many-to-one association to Korisnik
	@ManyToOne
	private Korisnik korisnik;

	public Zalba() {
	}

	public int getIdZalba() {
		return this.idZalba;
	}

	public void setIdZalba(int idZalba) {
		this.idZalba = idZalba;
	}

	public String getOpis() {
		return this.opis;
	}

	public void setOpis(String opis) {
		this.opis = opis;
	}

	public Korisnik getKorisnik() {
		return this.korisnik;
	}

	public void setKorisnik(Korisnik korisnik) {
		this.korisnik = korisnik;
	}

}