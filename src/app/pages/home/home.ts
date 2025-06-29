import { Component, OnInit } from '@angular/core';
import { Header } from '../../layouts/header/header';
import { PokemonService } from '../../services/pokemon.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    Header,
    NgOptimizedImage
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home implements OnInit {
  public pokemons: any;

  constructor(private PokemonService: PokemonService) { }

  ngOnInit(): void {
    this.PokemonService.getAllPokemons().subscribe((data) => {
      this.pokemons = data;
      console.log(this.pokemons[0]);
    });
  }
}
