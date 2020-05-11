import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from "@angular/router";
import {MovieComponent} from "./components/movie/movie.component";
import {ListComponent} from "./components/list/list.component";

const routes :Routes = [
  {path: 'movies', component: MovieComponent},
  {path:'detail/:id',component:ListComponent}
];

@NgModule({
  // declarations: [],
  imports: [
    // CommonModule
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
