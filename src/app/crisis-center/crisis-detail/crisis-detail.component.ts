import { Component, Input, OnInit } from '@angular/core';
import { Crisis } from '../crisis';
import { ActivatedRoute, Data, ParamMap, Router } from '@angular/router';
import { CrisisService } from '../crisis.service';
import { Observable, map, of, switchMap, tap } from 'rxjs';
import { DialogService } from 'src/app/dialog.service';


@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {

  @Input() crisis: Crisis | undefined;
  crisis$!: Observable<Crisis | undefined>;

  _crisis!: Crisis;
  editName!: string


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService,
    public dialogService: DialogService
  ) {}



  ngOnInit(): void {
    this.route.data
      .subscribe((data: Data) => {
        this.editName = data['crisis'].name;
        this._crisis = data['crisis'];
      });    // use the ActivatedRoute service to retrieve the parameters for
    // the route, pull the crisis id from the parameters, and retrieve
    // the crisis to display.

    // The switchMap operator does two things. It flattens the Observable<Crisis>
    // that CrisisService returns and cancels previous pending requests.
    this.crisis$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.service.getCrisis(params.get('id')!)
      })
    );

    // const id = + (this.route.snapshot.paramMap.get('id'))!;
    // this.crisis$ =this.service.getCrisis(id);
  }

  // getCrises(crisis: Crisis) {
  //   const crisisId = crisis ? crisis.id : null;
  //   // Pass along the crisis id if available
  //   // so that the CrisisList component can select that crisis.
  //   // Include a junk 'foo' property for fun.
  //   // Relative navigation back to the crises
  //   this.router.navigate(['../', {id: crisisId, foo: 'foo'}], { relativeTo: this.route});
  //   // this.router.navigate(['/supercrises', {id: crisisId, foo: 'Foo'}]);
  // }

  cancel() {
    this.gotoCrises();
  }

  save() {
    this._crisis.name = this.editName;
    this.gotoCrises();
  }

  canDeactivate() : Observable<boolean> | boolean{
        // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
        if (!this._crisis || this._crisis.name === this.editName) {
          return true;
        }
        // Otherwise ask the user with the dialog service and return its
        // observable which resolves to true or false when the user decides
        return this.dialogService.confirm('Discard changes?');
  }

  gotoCrises() {

    const crisisId = this._crisis ? this._crisis.id : null;

    this.router.navigate(['../', { id: crisisId, foo: 'foo'}], { relativeTo: this.route});
  }
}
