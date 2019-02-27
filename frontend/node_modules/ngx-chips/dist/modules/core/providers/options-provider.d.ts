import { TagInputOptions, TagInputDropdownOptions } from '../../defaults';
export declare type Options = {
    tagInput?: {
        [P in keyof TagInputOptions]?: TagInputOptions[P];
    };
    dropdown?: {
        [P in keyof TagInputDropdownOptions]?: TagInputDropdownOptions[P];
    };
};
export declare class OptionsProvider {
    static defaults: {
        tagInput: TagInputOptions;
        dropdown: TagInputDropdownOptions;
    };
    setOptions(options: Options): void;
}
export { TagInputDropdownOptions, TagInputOptions };
