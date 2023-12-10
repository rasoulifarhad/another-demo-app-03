import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { MessageService } from 'src/app/message.service';
import { HeroService } from '../hero.service';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  selectedHero: Hero | undefined;

  heroes: Hero[] = [];

  heroes$: Observable<Hero[]> | undefined;
  selectedId: number | undefined;

  constructor(private heroService: HeroService, private messageService: MessageService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getHeroes();
    this.heroes$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id')!;
        return this.heroService.getHeroes();
      })
    );
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}
