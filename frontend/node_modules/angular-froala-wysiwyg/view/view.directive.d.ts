import { ElementRef, Renderer } from '@angular/core';
export declare class FroalaViewDirective {
    private renderer;
    private _element;
    private _content;
    constructor(renderer: Renderer, element: ElementRef);
    froalaView: string;
    ngAfterViewInit(): void;
}
