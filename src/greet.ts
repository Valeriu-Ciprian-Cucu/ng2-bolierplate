import { Component } from '@angular/core';

@Component({
  selector: 'greet',
  template: `<p>{{ text }}<p>`
})
export class Greet  { 
    public text:string = "I am a greeter";
}