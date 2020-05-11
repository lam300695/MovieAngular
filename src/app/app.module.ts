import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { StructComponent } from './components/struct/struct.component';
import { WordsComponent } from './components/words/words.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PersonComponent } from './components/person/person.component';
import { ListComponent } from './components/list/list.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { IpComponent } from './components/ip/ip.component';
import {IpService} from "./ip.service";
import { NameCardComponent } from './components/name-card/name-card.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { TodoComponent } from './components/todo/todo.component';
import { FormComponent } from './components/form/form.component';
import {MovieService} from "./service/movie.service";
import { MovieComponent } from './components/movie/movie.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import {RouterModule, Routes} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    StructComponent,
    WordsComponent,
    PersonComponent,
    ListComponent,
    ParentComponent,
    ChildComponent,
    IpComponent,
    IpComponent,
    IpComponent,
    NameCardComponent,
    ProgressBarComponent,
    TodoComponent,
    FormComponent,
    MovieComponent,
    MovieDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,

  ],
  providers: [IpService, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
