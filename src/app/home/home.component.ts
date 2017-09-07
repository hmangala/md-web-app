import { Component, OnInit } from '@angular/core';
import { FacebookService, LoginResponse, LoginOptions, UIResponse, UIParams } from 'ngx-facebook';


/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor( private fb: FacebookService) {
    console.log('Initializing Facebook');
    fb.init({
      appId: '462248220822934',
      version: 'v2.10'
    });
  }

  ngOnInit() {

  }

  login() {
    const loginOptions: LoginOptions = {
      enable_profile_selector: true,
      return_scopes: true,
      scope: 'public_profile,user_friends,email,pages_show_list'
    };

    this.fb.login(loginOptions)
      .then((res: LoginResponse) => {
        console.log('Logged in', res);
      })
      .catch(this.handleError);
  }

   /**
   * Get the users friends
   */
  getFriends() {
    this.fb.api('/me/taggable_friends')
      .then((res: any) => {
        console.log('Got the users friends', res);
      })
      .catch(this.handleError);
  }

   /**
   * Show the share dialog
   */
  share() {
    const options: UIParams = {
      method: 'share',
      href: 'https://github.com/orgs/PixieDigifin'
    };

    this.fb.ui(options).then((res: UIResponse) => {
        console.log('Got the users profile', res);
    }).catch(this.handleError);

  }

 /**
    * Handle HTTP error
    */
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }
}
