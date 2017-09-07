import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login, AuthService } from '../shared/index';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  successMessage = '';
  errorMessage = '';
  loginModel: Login = {username: '', password: ''};
  loginForm: FormGroup;
  loginFormCompleted: boolean;

  loginFormErrors = {
    username: '',
    passw: ''
  };

  validationMessages = {
    username: {
      required: 'Username is required.'
    },
    passw: {
      required: 'Password is required.'
    }
  };

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) { }
  ngOnInit() {
    this.loginFormCompleted = false;
    this.buildForms();
  }

  /**
  * build the initial form
  */
  buildForms() {
    // build our form
    this.loginForm = this.fb.group({
      username: '',
      passw: ''
    });
    this.loginForm.valueChanges.subscribe(data => this.validateForm(this.loginForm, this.loginFormErrors));
  }

  /**
   * validate the entire form
   */
  validateForm(form: FormGroup, formErrors) {

    for (const field in formErrors) {
      if (field) {
        formErrors[field] = '';
        const input = form.get(field);
        if (input.invalid && input.dirty) {
          for (const error in input.errors) {
            if (error) {
              this.loginFormErrors[field] = this.validationMessages[field][error];
            }
          }
        }
      }

    }
  }

  login() {
    console.log('processing', this.loginForm.value);
    console.log(this.loginModel.username);
    this.authService.login(this.loginModel.username, this.loginModel.password)
      .subscribe(data => {
        console.log(JSON.stringify(data));
       // this.router.navigate(['/home']);
      },
      err => {
        this.errorMessage = err;
      });
  }
  isAccountFormCompleted() {
    return this.loginFormCompleted;
  }
}
