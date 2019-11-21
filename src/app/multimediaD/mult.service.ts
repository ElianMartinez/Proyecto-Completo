import { Injectable } from '@angular/core';


import {  HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { MessageService } from '../message.service';
import { Mult } from './mult';
import { MULT } from './mock-mult';
@Injectable({
  providedIn: 'root'
})
export class MultService {

  
  constructor(private messageService: MessageService) { }

  getMults(): Observable<Mult[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('MultService: fetched mult');
    return of(MULT);
  }

  getMult(id: number | string) {
    return this.getMults().pipe(
      // (+) before `id` turns the string into a number
      map((multimediaD: Mult[]) => multimediaD.find(Mult => Mult.id === +id))
    );
  }
}
