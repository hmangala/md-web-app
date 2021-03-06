import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FacebookModule } from 'ngx-facebook';

import { AppMaterialModule } from '../app-md.module';
import { AuthService } from '../shared/services/auth.service';
import { NotFoundComponent } from '../shared/index';

@NgModule({
  imports: [HomeRoutingModule,
    AppMaterialModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    FacebookModule.forRoot(),
    ReactiveFormsModule
    ],
  declarations: [
    HomeComponent,
    NotFoundComponent
  ],
  exports: [HomeComponent],
  providers: [
    AuthService
  ]
})
export class HomeModule { }
