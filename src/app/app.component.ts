import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { enable, destroy } from 'splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  loading = false;
  constructor(private _router: Router) { }

  ngOnInit() {
    console.log('On init is called' + new Date());
    this._router.events.subscribe(v => this.navigationInterceptor(v));
  }

  stopSplash() {
    destroy();
  }

  navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
        this.loading = true;
        enable('tailing');
    }
    if (event instanceof NavigationEnd) {
        if (this.loading === true) {
          setTimeout(() => {
            this.stopSplash();
          }, 1000);
        }
        this.loading = false;
    }
    if (event instanceof NavigationCancel) {
        if (this.loading === true) {
          setTimeout(() => {
            this.stopSplash();
          }, 1000);
        }
        this.loading = false;
    }
    if (event instanceof NavigationError) {
        if (this.loading === true) {
          setTimeout(() => {
            this.stopSplash();
          }, 1000);
        }
        this.loading = false;
    }
  }

}
