import { EventEmitter, QueryList, AfterContentInit } from '@angular/core';
import { WizardStepComponent } from './wizard-step.component';
export declare class WizardComponent implements AfterContentInit {
    wizardSteps: QueryList<WizardStepComponent>;
    private _steps;
    private _isCompleted;
    onStepChanged: EventEmitter<WizardStepComponent>;
    constructor();
    ngAfterContentInit(): void;
    readonly steps: Array<WizardStepComponent>;
    readonly isCompleted: boolean;
    activeStep: WizardStepComponent;
    readonly activeStepIndex: number;
    readonly hasNextStep: boolean;
    readonly hasPrevStep: boolean;
    goToStep(step: WizardStepComponent): void;
    next(): void;
    previous(): void;
    complete(): void;
}
