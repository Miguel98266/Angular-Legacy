import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-result-serch',
  templateUrl: './result-serch.component.html',

})
export class ResultSerchComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string = '';
  constructor(
    private activatedRoute: ActivatedRoute
    , private _heroesService: HeroesService
  ) {}


  ngOnInit()  {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);
    });
  }


}
