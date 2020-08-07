import { NgAbstractLabel } from './ngAbstractLabel';
import { PostConstruct } from './context';

export type FieldElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
export abstract class NgAbstractField<T> extends NgAbstractLabel {
    public static EVENT_CHANGED = 'valueChange';

    
    // protected abstract className: string;

    protected value: T;

    @PostConstruct
    protected postConstruct() {
        console.log('INIT NgAbstractField');
    }

    public getValue(): T {
        return this.value;
    }

    public setValue(value: T, silent?: boolean): this {
        console.log('setValue :: ', value);
        if (this.value === value) {
            return this;
        }

        this.value = value;


        return this;
    }


}
