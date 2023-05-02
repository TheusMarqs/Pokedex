import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  faMagnifyingGlass = faMagnifyingGlass;

  poke: Pokemon = {} as Pokemon;

  constructor(private service: PokemonService) { }


  ngOnInit(): void {
    this.loadPoke();
  }

  loadPoke(): void {
    this.service.getPoke().subscribe(
      {
        next: data => this.poke = data
      }
    );
  }


  getId(): number {
    return this.service.pokeId;
  }

  nextPoke() {
    this.service.pokeId++;
    this.loadPoke();
    this.idSelecionado = 0;
  }

  prevPoke() {
    this.service.pokeId--;
    this.loadPoke();
    this.idSelecionado = 0;
  }

  getName() : string {
    return this.poke.name;
  }

  getAltura() : number {
    return this.poke.height;
  }

  getPeso() : number {
    return this.poke.weight;
  }


  getHabilidade() : string {
    return this.poke.abilities[0].ability.name;
  }

  getHabilidade2(): string {
    if (this.poke.abilities[1].ability.name === '') {
      return "Sem habilidade secundária";
    }

    else {
      return this.poke.abilities[1].ability.name;
    }

  }

  idSelecionado : number = 0;

  buscarId(){
    if (this.idSelecionado == 0 || this.idSelecionado > 1010){
      this.idSelecionado = 0;
    }

    else{
      this.service.pokeId = this.idSelecionado;
      this.loadPoke();
    }
  }
}
