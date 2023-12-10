import { Component, OnInit } from '@angular/core';
import { Crisis } from '../crisis';
import { MessageService } from 'src/app/message.service';
import { CrisisService } from '../crisis.service';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {

  selectedCrisis: Crisis | undefined;

  crises: Crisis[] = [];

  crises$: Observable<Crisis[]> | undefined;
  selectedId: number | undefined;

  constructor(private crisisService: CrisisService, private messageService: MessageService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.getCrises();
    this.crises$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id')!;
        return this.crisisService.getCrises();
      })
    );
  }

  onSelect(crisis: Crisis): void {
    this.selectedCrisis = crisis;
    this.messageService.add(`CrisisComponent: Selected crisis id=${crisis.id}`);
  }

  // getCrises(): void {
  //   this.crisisService.getCrises()
  //       .subscribe(crises => this.crises = crises);
  // }

}
