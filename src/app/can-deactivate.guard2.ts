import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { CrisisDetailComponent } from "./crisis-center/crisis-detail/crisis-detail.component";


@Injectable({
  providedIn: 'root',
})
export class CanDeactivateGuard2 implements CanDeactivate<CrisisDetailComponent> {

  canDeactivate(
      component: CrisisDetailComponent,
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | boolean {

    console.log();route.paramMap.get('id');
    console.log(state.url);

    if(!component.crisis || component.crisis.name === component.editName) {
      return true;
    }
    return component.dialogService.confirm('Discard changes?');
  }


}

