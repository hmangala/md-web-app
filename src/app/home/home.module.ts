import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AppMaterialModule } from '../app-md.module';


@NgModule({
  imports: [HomeRoutingModule, AppMaterialModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
