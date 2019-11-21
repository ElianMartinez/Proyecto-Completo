import {Component, OnInit} from '@angular/core';
import * as myjQuery from 'jquery';
declare var $: any ;
@Component({
	selector: 'multimedia',
	templateUrl: './multimedia.component.html',
	styleUrls: ['./mult.css']
})

export class multimediaComponent implements OnInit {
	public titulo = 'multimedia';

	







constructor(){}
  ngOnInit() {






$(function() {
var selectedClass = "";
$(".filter").click(function(){
selectedClass = $(this).attr("data-rel");
$("#gallery").fadeTo(100, 0.1);
$("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
setTimeout(function() {
$("."+selectedClass).fadeIn().addClass('animation');
$("#gallery").fadeTo(300, 1);
}, 300);
});
});





}

}




  


	


