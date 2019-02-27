import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToggleFullscreenDirective} from './fullscreen/toggle-fullscreen.directive';
import {AccordionAnchorDirective} from './accordion/accordionanchor.directive';
import {AccordionLinkDirective} from './accordion/accordionlink.directive';
import {AccordionDirective} from './accordion/accordion.directive';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ScrollModule} from './scroll/scroll.module';

import {MenuItems} from './menu-items/menu-items';
import {SpinnerComponent} from './spinner/spinner.component';
import {CardComponent} from './card/card.component';
import {CardRefreshDirective} from './card/card-refresh.directive';
import {CardToggleDirective} from './card/card-toggle.directive';
import {DataFilterPipe} from './element/data-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    ScrollModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    ToggleFullscreenDirective,
    CardRefreshDirective,
    CardToggleDirective,
    SpinnerComponent,
    CardComponent,
    DataFilterPipe
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    ToggleFullscreenDirective,
    CardRefreshDirective,
    CardToggleDirective,
    ScrollModule,
    NgbModule,
    SpinnerComponent,
    CardComponent,
    DataFilterPipe
  ],
  providers: [
    MenuItems
  ]
})
export class SharedModule { }
