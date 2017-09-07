import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  private authUrl = 'https://reqres.in/api';
  private loggedIn = false;

  constructor(private http: Http) {
    // look at localstorage to check if the user is logged in
    this.loggedIn = !!localStorage.getItem('auth_token');

  }
  /**
   * check if user logged in
   */
  get isLoggedIn() {
    return this.loggedIn;
  }
  /**
   * Log the User In
   */
  login(username: string, password: string): Observable<string> {
    return this.http.post(this.authUrl + '/login', { username, password })
      .map(res => res.json())
      .do(res => {
        if (res.token) {
          localStorage.setItem('currentUser', res.token);
          this.loggedIn = true;
        }
      })
      .catch(this.handleError);
  }
  /** Log out the user */
  logout() {
    localStorage.removeItem('currentUser');
    this.loggedIn = false;
  }

  private handleError(err) {
    let errorMessage: string;
    if (err instanceof Response) {
      const body = err.json() || '';
      const error = JSON.stringify(body);
      errorMessage = `${err.status} - ${err.statusText || ''} ${error}`;
    } else {
      errorMessage = err.message ? err.message : err.toString();
    }
    return Observable.throw(errorMessage);
  }
}
