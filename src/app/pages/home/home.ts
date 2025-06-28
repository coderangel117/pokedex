import { Component, OnInit } from '@angular/core';
import { Header } from '../../layouts/header/header';
import { PokemonService } from '../../services/pokemon.service';
@Component({
  selector: 'app-home',
  imports: [
    Header
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {

  constructor(private PokemonService: PokemonService) { }

  ngOnInit(): void {
    this.PokemonService.getAllPokemons();
  }
}
