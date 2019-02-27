import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SlimScroll} from 'angular-io-slimscroll';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SlimScroll],
  exports: [SlimScroll]
})
export class ScrollModule { }
