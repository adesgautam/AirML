import {Component} from '@angular/core';
import {SBItem} from './sb-item';

@Component({
    exportAs: 'sbItemHead',
    selector: 'sb-item-head',
    template: `
        <div class="sb-item-head">
            <a role="button" (click)="toggleClick($event)"><ng-content></ng-content><span class="toggle-icon"></span></a>
        </div>
    `
})
export class SBItemHead {

    constructor(private sbItem: SBItem) {}
    
    toggleClick(event:Event) {
        event.preventDefault();
        this.sbItem.collapsed = !this.sbItem.collapsed;
        this.sbItem.toggle(this.sbItem.collapsed);
    }
}
