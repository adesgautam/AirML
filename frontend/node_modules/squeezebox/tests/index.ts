import {platformBrowserDynamic}    from '@angular/platform-browser-dynamic';
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {SqueezeBoxModule} from '../index';
import {AppComponent} from './index.component';

@NgModule({
  imports:      [BrowserModule, SqueezeBoxModule],
  declarations: [AppComponent],
  bootstrap:    [AppComponent]
})
export class AppModule { }

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
