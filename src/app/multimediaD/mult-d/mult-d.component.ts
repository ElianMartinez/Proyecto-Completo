
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { MultService } from '../mult.service';
import { Mult } from '../mult';



@Component({
  selector: 'app-mult-d',
  templateUrl: './mult-d.component.html',
  styleUrls: ['./mult-d.component.css']
})
export class MultDComponent implements OnInit {
	Mult$: Observable<Mult>;

  constructor(
private route: ActivatedRoute,
  private router: Router,
  private service: MultService,


  	) { }


gotoMults(mult: Mult) {
  let multId = mult ? mult.id : null;
  // Pass along the hero id if available
  // so that the HeroList component can select that hero.
  // Include a junk 'foo' property for fun.
  this.router.navigate(['/multimediaD', { id: multId, foo: 'foo' }]);
}


  ngOnInit() {
  this.Mult$ = this.route.paramMap.pipe(
    switchMap((params: ParamMap) =>
      this.service.getMult(params.get('id')))
  );




}
}
