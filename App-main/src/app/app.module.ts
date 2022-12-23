import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PredictionComponent } from './prediction/prediction.component';
import { AboutComponent } from './about/about.component';
import { ResourcesComponent } from './resources/resources.component';
import { NoteTakingComponent } from "./note-taking/note-taking.component";
import { CollabComponent } from "./collab/collab.component";
import {TutorialComponent} from "./tutorial/tutorial.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'predict', component: PredictionComponent},
  {path: 'resources', component: ResourcesComponent},
  {path: 'resources/note-taking', component: NoteTakingComponent},
  {path: 'resources/collab', component: CollabComponent},
  {path: 'resources/tutorial', component: TutorialComponent},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PredictionComponent,
    AboutComponent,
    ResourcesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
