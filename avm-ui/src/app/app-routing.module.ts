import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';

const routes: Routes =
[
  {path: '', component: HomeComponent},
  {path:"lazy", loadChildren:() => import('./module/lazy-m2/lazy-m2.module').then(m => m.LazyM2Module)},
  {path:"lazy2", loadChildren:() => import('./module/lazy-m3/lazy-m3.module').then(m => m.LazyM3Module)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
