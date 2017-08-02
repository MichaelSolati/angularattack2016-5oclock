import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: IndexComponent }
    ])
  ],
  declarations: [
    IndexComponent
  ]
})
export class HomeModule { }
