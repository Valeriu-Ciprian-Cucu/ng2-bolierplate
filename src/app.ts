import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
  <h1>Hello {{name}}</h1>
  <greet></greet>
  `
})
export class App  { 
    name = 'Angular';
}