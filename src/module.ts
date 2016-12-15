import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { Greet } from './greet';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ App, Greet ],
  bootstrap:    [ App ]
})
export class Module { }