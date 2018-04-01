import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { UIModule } from "./ui/ui.module";
import { CarouselModule } from "./carousel/carousel.module";

import './shared/rxjs-extensions';


@NgModule({
  imports: [ BrowserModule,
                   FormsModule,
                   HttpModule,
                   AppRoutingModule,
                   UIModule,
                   CarouselModule
                   ],
  declarations: [ AppComponent,
                          HomeComponent
                          ],
  providers: [ ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }