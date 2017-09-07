import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { enable, destroy } from 'splash-screen';

@Component({
  selector: 'app-splash',
  template: `<div style="position:absolute; top:0; bottom:0; left:0; right:0; z-index:-1;"></div>`
})
export class SplashComponent implements OnInit {
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
