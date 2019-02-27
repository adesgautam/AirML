import {Component, Input, ContentChildren, QueryList, forwardRef} from '@angular/core';
import {SBItem} from './sb-item';

@Component({
    exportAs: 'squeezebox',
    selector: 'squeezebox',
    template: `
        <div class="squeezebox">
            <ng-content></ng-content>
        </div>
    `
})
export class SqueezeBox {
    
    @Input() multiple: boolean = true
    
    @ContentChildren(forwardRef(() => SBItem)) items: QueryList<SBItem>;
    
    constructor() {}
    
    didItemToggled(item: SBItem) {
        // on not multiple, it will collpase the rest of items
        if (!this.multiple) {
            this.items.toArray().forEach(function(i) { 
                if (i !== item && !i.collapsed) {
                    i.applyToggle(true);
                }
            });
        }
    }

}
