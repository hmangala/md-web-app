import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app-md.module';
import { AuthService } from '../shared/services/auth.service';


@NgModule({
  imports: [RegisterRoutingModule,
    AppMaterialModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    ],
  declarations: [
    RegisterComponent
  ],
  exports: [RegisterComponent],
  providers: [
    AuthService
  ]
})
export class RegisterModule { }
