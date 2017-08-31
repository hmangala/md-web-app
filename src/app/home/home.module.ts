import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app-md.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [HomeRoutingModule,
    AppMaterialModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
