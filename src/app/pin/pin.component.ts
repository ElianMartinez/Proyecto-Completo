import {Component, OnInit} from '@angular/core';
import  { DataApiService } from '../services/data-api.service';


@Component({
	selector: 'pin',
	templateUrl: './pin.component.html',
	styleUrls: ['./pin.css']
})

export class pinComponent implements OnInit{
	public titulo = 'pin';

	constructor(private dataApi: DataApiService) {
  }


ngOnInit(){
this.getListUsers();
}

getListUsers(){
	this.dataApi.getAllUsers().subscribe(db => console.log(db));
}

}

