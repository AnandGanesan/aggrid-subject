import { PostConstruct } from './context';
import { OnInit } from '@angular/core';

export type LabelAlignment = 'left' | 'right' | 'top';

export interface IAgLabel {
    label?: string;
    labelWidth?: number | 'flex';
    labelSeparator?: string;
    labelAlignment?: LabelAlignment;
}

export abstract class NgAbstractLabel implements OnInit  {
    ngOnInit(): void {
        console.log('INIT NgAbstractLabel');
    }

    
    protected abstract eLabel: HTMLElement;
    private label = '';
    protected labelSeparator = '';
    protected labelAlignment: LabelAlignment = 'left';

    @PostConstruct
    protected postConstruct() {
        console.log('INIT NgAbstractLabel');
    }


    public setLabel(label: string): this {

        if (this.label === label) {
            return this;
        }

        console.log(' setLabel :: ', label );

        this.label = label;

        this.refreshLabel();

        return this;
    }

    public setLabelSeparator(labelSeparator: string): this {
        if (this.labelSeparator === labelSeparator) {
            return this;
        }

        this.labelSeparator = labelSeparator;

        if (this.label != null) {
            this.refreshLabel();
        }

        return this;
    }

    private refreshLabel() {
        // this.eLabel.innerText = this.label + this.labelSeparator;
    }
    
  

}
