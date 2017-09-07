import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { PasswordValidation } from '../shared/validation/passw-validator';


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
  addressForm: FormGroup;
  contactForm: FormGroup;
  accountFormCompleted: boolean;
  addressFormCompleted: boolean;
  contactFormCompleted: boolean;
  selectedTab: number;

  accountFormErrors = {
    username: '',
    email: '',
    passw: '',
    confirmpassw: ''
  };

  addressFormErrors = {
    firstname: '',
    lastname: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    pin: '',
    country: ''
  };

  contactFormErrors = {
    mobile: '',
    phone: '',
    secondaryemail: ''
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
      minlength: 'Password must be 8 characters.',
      maxlength: 'Password can\'t be longer than 15 characters.'
    },
    confirmpassw: {
      required: 'Password is required.',
      minlength: 'Password must be 8 characters.',
      maxlength: 'Password can\'t be longer than 15 characters.',
      matchpassword: 'Password did not match'
    },
    firstname: {
      required: 'First Name is required.',
      minlength: 'First Name must be 3 characters.'
    },
    lastname: {
      required: 'First Name is required.'
    },
    address1: {
      required: 'Address Line 1 is required.'
    },
    address2: {
      required: 'Address Line 2 is required.'
    },
    city: {
      required: 'City is required.',
      minlength: 'City must be 3 characters.'
    },
    state: {
      required: 'State is required.',
      minlength: 'State must be 3 characters.'
    },
    pin: {
      required: 'Pin is required.',
      pattern: 'Pin must be numeric only',
      minlength: 'Pin must be 6 characters.',
      maxlength: 'Pin can\'t be longer than 6 characters.'
    },
    country: {
      required: 'Country is required.',
      minlength: 'Country must be 3 characters.'
    },
    mobile: {
      required: 'Mobile is required',
      pattern: 'Mobile must be numeric only',
      minlength: 'Mobile must be 10 characters.',
      maxlength: 'Mobile can\'t be longer than 10 characters.'
    },
    phone: {
      pattern: 'Phone must be numeric only',
      minlength: 'Phone must be 10 characters.',
      maxlength: 'Phone can\'t be longer than 10 characters.'
    },
    secondaryemail: {
      email: 'Email is invalid'
    }
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
     // build the data model for our form
     this.accountFormCompleted = false;
     this.addressFormCompleted = false;
     this.contactFormCompleted = false;
     this.selectedTab = 0;
     this.buildForms();
  }

   /**
   * build the initial form
   */
  buildForms() {
    // build our form
    this.accountForm = this.fb.group({
      username: ['', Validators.minLength(3)],
      email: ['', Validators.email],
      passw: ['', [Validators.minLength(8), Validators.maxLength(15)]],
      confirmpassw: ['', [Validators.minLength(8), Validators.maxLength(15)]]
    }, {
      validator: PasswordValidation.MatchPassword // your validation method
    });
    this.addressForm = this.fb.group({
      firstname: ['', Validators.minLength(3)],
      lastname: ['', Validators.minLength(3)],
      address1: [''],
      address2: [''],
      city: ['', Validators.minLength(3)],
      state: ['', Validators.minLength(3)],
      pin: ['', [Validators.pattern('^(0|[1-9][0-9]*)$'), Validators.minLength(6), Validators.maxLength(6)]],
      country: ['', Validators.minLength(3)]
    });
    this.contactForm = this.fb.group({
      mobile: ['', [Validators.pattern('^(0|[1-9][0-9]*)$'), Validators.minLength(10), Validators.maxLength(10)]],
      phone: [[Validators.pattern('^(0|[1-9][0-9]*)$'), Validators.minLength(10), Validators.maxLength(10)]],
      secondaryemail: [Validators.email]
    });
    // watch for changes and validate
    this.accountForm.valueChanges.subscribe(data => this.validateForm(this.accountForm, this.accountFormErrors));
    this.addressForm.valueChanges.subscribe(data => this.validateForm(this.addressForm, this.addressFormErrors));
    this.contactForm.valueChanges.subscribe(data => this.validateForm(this.contactForm, this.contactFormErrors));
  }

  /**
   * validate the entire form
   */
  validateForm(form: FormGroup, formErrors) {
    let formValid = true;
    let formCompleted = true;
    for (const field in formErrors) {
      if (field) {
        // clear that input field errors
        formErrors[field] = '';
        // grab an input field by name
        const input = form.get(field);
        if (input.invalid && input.dirty) {
          // figure out the type of error
          // loop over the formErrors field names
          for (const error in input.errors) {
            if (error) {
              if (this.accountForm === form) {
                if (this.accountFormCompleted === true) {
                  console.log('account form error');
                  this.accountFormCompleted = false;
                }
              }
              if (this.addressForm === form) {
                if (this.addressFormCompleted === true) {
                  console.log('address form error');
                  this.addressFormCompleted = false;
                }
              }
              if (this.contactForm === form) {
                if (this.contactFormCompleted === true) {
                  console.log('contact form error');
                  this.contactFormCompleted = false;
                }
              }
              // assign that type of error message to a variable
              if (formValid === true) {
                formValid = false;
              }
              console.log('error-', error);
              formErrors[field] = this.validationMessages[field][error];
            }
          }
        } else {
          if (!input.dirty) {
            formCompleted = false;
          }
        }
      }
    }
    if (formValid === true && formCompleted === true) {
      if (this.accountForm === form) {
        console.log('account form completed');
        this.accountFormCompleted = true;
      }
      if (this.addressForm === form) {
        console.log('address form completed');
        this.addressFormCompleted = true;
      }
      if (this.contactForm === form) {
        console.log('contact form completed');
        this.contactFormCompleted = true;
      }
    }
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
    return this.accountFormCompleted && this.selectedTab < 3;
  }

  isPreviousEnabled() {
    return this.accountFormCompleted && this.selectedTab > 0;
  }

  isAccountFormCompleted() {
    return this.accountFormCompleted;
  }

  isAddressFormCompleted() {
    return this.addressFormCompleted;
  }

  prevTab() {
    this.selectedTab -= 1;
  }

  nextTab() {
    this.selectedTab += 1;
  }

  onTabChange = ($event: any): void => {
    this.selectedTab = $event.index;
  }

}
