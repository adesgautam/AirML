import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SqueezeBox} from './components/squeezebox';
import {SBItem} from './components/sb-item';
import {SBItemHead} from './components/sb-item-head';
import {SBItemBody} from './components/sb-item-body';

export const SQUEEZEBOX_COMPONENTS = [SqueezeBox, SBItem, SBItemHead, SBItemBody];

@NgModule({
    imports: [CommonModule],
    declarations: [SQUEEZEBOX_COMPONENTS],
    exports: [SQUEEZEBOX_COMPONENTS]
})
export class SqueezeBoxModule {}

export * from './components/sb-item';
export * from './components/sb-item-head';
export * from './components/sb-item-body';
export * from './components/squeezebox';
