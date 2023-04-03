import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyM2RoutingModule } from './lazy-m2-routing.module';
import { HomeComponent } from './component/home/home.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LazyM2RoutingModule
  ]
})
export class LazyM2Module { }
