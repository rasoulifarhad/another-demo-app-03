import { Injectable } from "@angular/core";
import { MessageService } from "../message.service";
import { Observable, filter, from, map, of } from "rxjs";
import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  getHero(id: number | string) : Observable<Hero> {

    return from(HEROES).pipe(
      filter(hero => hero.id === +id )
    )
  }

  constructor(private messageService: MessageService) {}

  getHeroes() : Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero2(id: number | string) {
    return this.getHeroes().pipe(
      // (+) before `id` turns the string into a number
      map((heroes: Hero[]) => heroes.find(hero => hero.id === +id))
    );
  }
}
