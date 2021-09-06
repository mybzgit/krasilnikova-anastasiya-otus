import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecentlyAddedComponent } from './recently-added/recently-added.component';

import { HttpClientModule } from '@angular/common/http';
import { ExerciseComponent } from './exercise/exercise.component';
import { SettingsComponent } from './settings/settings.component';
import { FormatTimePipe } from './format-time.pipe';

import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; 

@NgModule({
  declarations: [
    AppComponent,
    RecentlyAddedComponent,
    ExerciseComponent,
    SettingsComponent,
    FormatTimePipe,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
