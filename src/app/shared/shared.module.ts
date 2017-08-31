import { NgModule } from '@angular/core';
import { EmailValidatorDirective } from './email-validator.component';

@NgModule({
  imports: [],
  declarations: [EmailValidatorDirective],
  exports: [EmailValidatorDirective]
})
export class SharedModule { }
