import { Component } from '@angular/core';

@Component({
    template: `
    <div class="jumbotron text-center">
    <h1>404 Not Found </h1>
    <p> You may be lost. Follow the breadcums back <a routerLink="/home">Home</a></p>
    </div>
    `
})

export class NotFoundComponent {}
