import { TagInputComponent } from './../../components/tag-input/tag-input';
import { TagModel } from '../accessor';
export interface DraggedTag {
    index: number;
    tag: TagModel;
    zone: string;
}
export interface State {
    dragging: boolean;
    dropping: boolean;
    index: number | undefined;
}
export declare type StateProperty = keyof State;
export declare class DragProvider {
    sender: TagInputComponent;
    receiver: TagInputComponent;
    state: State;
    setDraggedItem(event: DragEvent, tag: DraggedTag): void;
    getDraggedItem(event: DragEvent): DraggedTag;
    setSender(sender: TagInputComponent): void;
    setReceiver(receiver: TagInputComponent): void;
    onTagDropped(tag: TagModel, indexDragged: number, indexDropped: number): void;
    setState(state: {
        [K in StateProperty]?: State[K];
    }): void;
    getState(key?: StateProperty): State | State[StateProperty];
    onDragEnd(): void;
}
