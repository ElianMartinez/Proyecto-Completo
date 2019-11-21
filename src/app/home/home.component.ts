import {Component, OnInit} from '@angular/core';
import * as myjQuery from 'jquery';
declare var $: any ;
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
	selector: 'home',
	templateUrl: './home.component.html'
})

export class homeComponent implements OnInit{
	public titulo = 'home';
	public parametro;
	 public route;

	 
	

	constructor(
		private _route: ActivatedRoute,
		private _router: Router
		){}


	ngOnInit(){
		this._route.params.forEach((params: Params)=>{
			this.parametro = params['page'];
		});

		$('.carousel').carousel({interval: 2000});
	}
		redirigirDos(){
		this._router.navigate(['/login'])
	
}
			

		

	}

	