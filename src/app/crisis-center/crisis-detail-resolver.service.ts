import { Injectable } from '@angular/core';
import { CrisisService } from './crisis.service';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Crisis } from './crisis';
import { EMPTY, Observable, mergeMap, of, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrisisDetailResolverService implements Resolve<Crisis> {

  constructor(private cs: CrisisService, private router: Router) { }

  resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Crisis | Observable<Crisis> | Promise<Crisis> {
    const id = route.paramMap.get('id');
    if(id) {
      return this.cs.getCrisis(id).pipe(
        take(1),
        mergeMap(crisis => {
          if(crisis) {
            return of(crisis);
          } else {
            this.router.navigate(['/crisis-center']);
            return EMPTY;
          }
        })
      );
    }
    return EMPTY;

  }
}
