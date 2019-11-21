import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { MultDComponent } from './mult-d/mult-d.component';
import { MultLComponent } from './mult-l/mult-l.component';



import { multimediaDRoutingModule } from './multimedia-d-routing.module';


@NgModule({
  declarations: [
  MultDComponent,
MultLComponent

  ],
  imports: [
    CommonModule,
    multimediaDRoutingModule
  ]
})
export class MultimediaDModule { }
