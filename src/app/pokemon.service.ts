import { Pokemon } from './pokemon';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor( private http: HttpClient ) {

  }
  pokeId: number = Math.floor(Math.random() * (1010 + 1) + 1);

  getPoke(): Observable<Pokemon> {
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${this.pokeId}`);
  }

}