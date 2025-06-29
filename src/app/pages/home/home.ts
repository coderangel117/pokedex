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
  styleUrl: './home.scss'
})
export class Home implements OnInit {

  constructor(private PokemonService: PokemonService) { }

  ngOnInit(): void {
    let data = this.PokemonService.getAllPokemons();
  }
}
