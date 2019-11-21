import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultDComponent } from './mult-d/mult-d.component';
import { MultLComponent } from './mult-l/mult-l.component';

const multimediaRoutes: Routes = [
  { path: 'multimediaD',  component: MultLComponent, data: { animation: 'mults' } },
  { path: 'mult/:id', component:  MultDComponent, data: { animation: 'mult' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(multimediaRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class multimediaDRoutingModule { }