import { NgModule } from '@angular/core';
import {RouterModule,Routes} from "@angular/router";
import {ListComponent} from "./components/list/list.component";
import {BookComponent} from "./components/book/book.component";

const routes :Routes = [
  {path: 'books', component: BookComponent},
  {path:'detail',component:ListComponent}
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
