import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MultService } from '../mult.service';
import { Mult } from '../mult';
@Component({
  selector: 'app-mult-l',
  templateUrl: './mult-l.component.html',
  styleUrls: ['./mult-l.component.css']
})
export class MultLComponent implements OnInit {

  mults$: Observable<Mult[]>;
  selectedId: number;

  constructor(
    private service: MultService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.mults$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getMults();
      })
    );
  }
}