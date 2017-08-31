import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';


/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {
  accountForm: FormGroup;
  accountFormCompleted: boolean;
  addressForm: FormGroup;
  contactForm: FormGroup;
  formErrors = {
    username: '',
    email: '',
    passw: '',
    confirmpassw: ''
  };
  validationMessages = {
    username: {
      required: 'Username is required.',
      minlength: 'Username must be 3 characters.'
    },
    email: {
      required: 'Email is required.',
      email: 'Email is invalid.'
    },
    passw: {
      required: 'Password is required.',
      minlength: 'Password must be 3 characters.',
      maxlength: 'Password can\'t be longer than 6 characters.'
    },
    confirmpassw: {
      required: 'Password is required.',
      minlength: 'Password must be 3 characters.',
      maxlength: 'Password can\'t be longer than 6 characters.'
    }
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
     // build the data model for our form
     this.accountFormCompleted = false;
     this.buildForm();
  }

   /**
   * build the initial form
   */
  buildForm() {
    // build our form
    this.accountForm = this.fb.group({
      username: ['', Validators.minLength(3)],
      email: ['', Validators.email],
      passw: ['', [Validators.minLength(3), Validators.maxLength(6)]],
      confirmpassw: ['', [Validators.minLength(3), Validators.maxLength(6)]]
    });
    this.addressForm = this.fb.group({});
    this.contactForm = this.fb.group({});
    // watch for changes and validate
    this.accountForm.valueChanges.subscribe(data => this.validateForm(this.accountForm));
  }

  /**
   * validate the entire form
   */
  validateForm(form: FormGroup) {
    let formValid = true;
    for (const field in this.formErrors) {
      if (field) {
        // clear that input field errors
        this.formErrors[field] = '';
        // grab an input field by name
        const input = form.get(field);
        if (input.invalid && input.dirty) {
          // figure out the type of error
          // loop over the formErrors field names
          for (const error in input.errors) {
            if (error) {
              // assign that type of error message to a variable
              if (formValid === true) {
                formValid = false;
              }
              this.formErrors[field] = this.validationMessages[field][error];
            }
          }
        }
      }
    }
    console.log('Valid Form', form);
  }

  processAccount() {
    console.log('processing', this.accountForm.value);
  }

  processAddress() {
    console.log('processing', this.addressForm.value);
  }

  processContact() {
    console.log('processing', this.contactForm.value);
  }

  isNextEnabled() {
    return this.accountFormCompleted;
  }

}
