import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppMaterialModule } from './app-md.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { AppComponent } from './app.component';
import { SplashComponent } from './shared/util/splash.component';

@NgModule({
  declarations: [
    AppComponent, SplashComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppMaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HomeModule,
  ],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '/'
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
