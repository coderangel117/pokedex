import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {
  }

  public getAllPokemons() {
   return this.http.get('https://tyradex.app/api/v1/pokemon');
  }

  public getPokemon(id: number) {
    this.http.get(`https://tyradex.app/api/v1/pokemon/${id}`).subscribe(
      data => {
        console.log(data);
      }
    );
  }
}
