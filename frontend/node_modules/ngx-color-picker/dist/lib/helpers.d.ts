import { EventEmitter, ElementRef } from '@angular/core';
export declare class TextDirective {
    newValue: EventEmitter<any>;
    text: any;
    rg: number;
    changeInput(value: string): void;
}
export declare class SliderDirective {
    private el;
    newValue: EventEmitter<any>;
    dragStart: EventEmitter<{}>;
    dragEnd: EventEmitter<{}>;
    slider: string;
    rgX: number;
    rgY: number;
    private listenerMove;
    private listenerStop;
    constructor(el: ElementRef);
    setCursor(event: any): void;
    move(event: any): void;
    start(event: any): void;
    stop(): void;
    getX(event: any): number;
    getY(event: any): number;
}
export declare class SliderPosition {
    h: number;
    s: number;
    v: number;
    a: number;
    constructor(h: number, s: number, v: number, a: number);
}
export declare class SliderDimension {
    h: number;
    s: number;
    v: number;
    a: number;
    constructor(h: number, s: number, v: number, a: number);
}
export declare function detectIE(): number | false;
