import { Injectable } from "@angular/core";
import { MessageService } from "../message.service";
import { BehaviorSubject, Observable, filter, from, map, of } from "rxjs";
import { Crisis } from "./crisis";
import { CRISES } from "./mock-crises";

@Injectable({
  providedIn: 'root',
})
export class CrisisService {

  static nextCrisisId = 100;

  private crises$: BehaviorSubject<Crisis[]> = new BehaviorSubject<Crisis[]>(CRISES);

  getCrisis(id: number | string) {

    return this.getCrises().pipe(
      map(crises => crises.find(crisis => crisis.id === +id))
    );
  }

  constructor(private messageService: MessageService) {}

  getCrises() : Observable<Crisis[]> {
    this.messageService.add('CrisisService: fetched crises');
    return this.crises$;
  }

  getCrisis2(id: number | string) {
    return this.getCrises().pipe(
      // (+) before `id` turns the string into a number
      map((crises: Crisis[]) => crises.find(crisis => crisis.id === +id))
    );
  }
}
