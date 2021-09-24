import { Korisnik } from "./korisnik"
import { Soba } from "./soba"

export class Rezervacija {
    public id: number
    public datum: Date
    public brojNocenja: number
    public soba: Soba
    public korisnik: Korisnik
}
