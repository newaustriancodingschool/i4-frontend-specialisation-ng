import { Component, OnInit, OnDestroy } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroesService } from '../heroes.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit, OnDestroy {
  heroes: Array<Hero>;
  selectedHero: Hero;
  hero: Hero = { id: 1, name: 'Windstorm' };
  heroes$: Subscription;

  constructor(private heroService: HeroesService) {}

  ngOnInit() {
    this.heroes$ = this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }

  ngOnDestroy() {
    console.log('unsubscribing');
    this.heroes$.unsubscribe();
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }
}
