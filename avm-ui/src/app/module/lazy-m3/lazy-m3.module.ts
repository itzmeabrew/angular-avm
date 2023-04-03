import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyM3RoutingModule } from './lazy-m3-routing.module';
import { HomeComponent } from './component/home/home.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LazyM3RoutingModule
  ]
})
export class LazyM3Module { }
