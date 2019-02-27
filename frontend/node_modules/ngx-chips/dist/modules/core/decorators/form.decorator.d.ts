import { TagInputForm } from '../../components';
export interface IForm {
    form: TagInputForm;
    hasFormErrors(): boolean;
    isInputFocused(): boolean;
}
export declare class Form implements IForm {
    form: TagInputForm;
    hasFormErrors(): boolean;
    isInputFocused(): boolean;
    readonly formValue: string;
}
