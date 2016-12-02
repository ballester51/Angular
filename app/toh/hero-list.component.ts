import { Component, OnInit } from '@angular/core';
import { Hero }              from '../hero';
//import { Build_definition}   from '../build_definition';
import { HeroService }       from '../hero.service';

@Component({
  selector: 'hero-list',
  templateUrl: 'app/toh/hero-list.component.html',
  providers: [ HeroService ]
})
export class HeroListComponent implements OnInit {
  errorMessage: string;
  heroes: Hero[];
  build_definitions: Object;
  mode = 'Observable';

  constructor (private heroService: HeroService) {}

  ngOnInit() { this.getHeroes();  
this.getHeroes_old();
}


  getHeroes() {

    console.log(this.heroService.getHeroes());
    this.heroService.getHeroes()
                     .subscribe(
                       build_definitions => this.build_definitions = build_definitions,
                       error =>  this.errorMessage = <any>error);

                       console.log ("get heroes");
                       console.log (this.build_definitions);
                       console.log ("get heroes_end");
  }

  getHeroes_old() {
    this.heroService.getHeroes_old()
                     .subscribe(
                       heroes => this.heroes = heroes,
                       error =>  this.errorMessage = <any>error);
                       console.log ("get heroes old");
                       console.log (this.build_definitions);
                       console.log ("get heroes old _end");
  }

  addHero (name: string) {
    if (!name) { return; }
    this.heroService.addHero(name)
                     .subscribe(
                       hero  => this.heroes.push(hero),
                       error =>  this.errorMessage = <any>error);
  }
}