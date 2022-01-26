import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AwesomeListComponent } from './components/awesomes/awesome-list/awesome-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AwesomeCreateComponent } from './components/awesomes/awesome-create/awesome-create.component';
import { AwesomeUpdateComponent } from './components/awesomes/awesome-update/awesome-update.component';


@NgModule({
  declarations: [
    AppComponent,
    AwesomeListComponent,
    AwesomeCreateComponent,
    AwesomeUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
