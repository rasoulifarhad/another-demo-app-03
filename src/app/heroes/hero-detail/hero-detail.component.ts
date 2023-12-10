import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HeroService } from '../hero.service';
import { Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero | undefined;
  hero$: Observable<Hero> | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService
  ) {}

  ngOnInit(): void {
    // use the ActivatedRoute service to retrieve the parameters for
    // the route, pull the hero id from the parameters, and retrieve
    // the hero to display.

    // The switchMap operator does two things. It flattens the Observable<Hero>
    // that HeroService returns and cancels previous pending requests.
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.service.getHero(params.get('id')!)
      })
    );

    // const id = + (this.route.snapshot.paramMap.get('id'))!;
    // this.hero$ =this.service.getHero(id);
  }

  getHeroes(hero: Hero) {
    const heroId = hero ? hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/heroes', {id: heroId, foo: 'Foo'}]);
    // this.router.navigate(['/superheroes', {id: heroId, foo: 'Foo'}]);
  }
}
