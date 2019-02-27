import { AfterViewInit, DoCheck, ElementRef, KeyValueDiffer, KeyValueDiffers, OnInit } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";
import { CurrencyMaskConfig } from "./currency-mask.config";
import { InputHandler } from "./input.handler";
export declare const CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR: any;
export declare class CurrencyMaskDirective implements AfterViewInit, ControlValueAccessor, DoCheck, OnInit {
    private currencyMaskConfig;
    private elementRef;
    private keyValueDiffers;
    options: any;
    inputHandler: InputHandler;
    keyValueDiffer: KeyValueDiffer<any, any>;
    optionsTemplate: {
        align: string;
        allowNegative: boolean;
        allowZero: boolean;
        decimal: string;
        precision: number;
        prefix: string;
        suffix: string;
        thousands: string;
    };
    constructor(currencyMaskConfig: CurrencyMaskConfig, elementRef: ElementRef, keyValueDiffers: KeyValueDiffers);
    ngAfterViewInit(): void;
    ngDoCheck(): void;
    ngOnInit(): void;
    handleBlur(event: any): void;
    handleCut(event: any): void;
    handleInput(event: any): void;
    handleKeydown(event: any): void;
    handleKeypress(event: any): void;
    handlePaste(event: any): void;
    isChromeAndroid(): boolean;
    registerOnChange(callbackFunction: Function): void;
    registerOnTouched(callbackFunction: Function): void;
    setDisabledState(value: boolean): void;
    writeValue(value: number): void;
}
