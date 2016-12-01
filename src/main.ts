//import 'core-js/es6';
require('core-js/es7/reflect');
require('zone.js/dist/zone.js');

import { NgModule, Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  template: require('./app.html'),
})
export class AppComponent  { name = 'Angular'; }

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);