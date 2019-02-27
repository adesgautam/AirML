import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Validator, AbstractControl } from '@angular/forms';
export declare class PhoneValidator implements Validator, OnInit, OnChanges {
    phone: string;
    private validator;
    private onChange;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    validate(c: AbstractControl): {
        [key: string]: any;
    };
    registerOnValidatorChange(fn: () => void): void;
}
