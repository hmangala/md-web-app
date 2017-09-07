import { NgModule } from '@angular/core';
import { EmailValidatorDirective } from './validation/email-validator';


@NgModule({
  imports: [],
  declarations: [EmailValidatorDirective],
  exports: [EmailValidatorDirective]
})
export class SharedModule { }
