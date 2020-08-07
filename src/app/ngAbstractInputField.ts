import { NgAbstractField, FieldElement } from './ngAbstractField';
import { IAgLabel } from './ngAbstractLabel';
import { Component, ViewChild, AfterViewInit } from '@angular/core';

export interface IInputField extends IAgLabel {
    value?: any;
    width?: number;
}
@Component({
    selector: 'app-ng-abstract-input',
    template: `<div role="presentation">
    <label #eLabel></label>
    <div #eWrapper role="presentation">
        <input #eInput text='Ohm Sai Ram'>
    </div>
</div>`
})
// tslint:disable-next-line: component-class-suffix
export class NgAbstractInputField implements AfterViewInit {
    
    protected inputType: string;

    protected config: IInputField = {};
    @ViewChild('eLabel') protected eLabel: HTMLLabelElement;
    @ViewChild('eWrapper') eWrapper: HTMLElement;
    @ViewChild('eInput') protected eInput: HTMLElement;

    ngAfterViewInit(): void {
        console.log("ngAfterViewInit", this.eLabel);
        console.log("ngAfterViewInit", this.eWrapper);
        console.log("ngAfterViewInit", this.eInput);

    }

    protected postConstruct() {
        

        this.eLabel.innerText = 'hello';
    }

   
    

    public setInputName(name: string): this {
        // this.getInputElement().setAttribute('name', name);
        console.log(' setInputName:: ', name);

        this.eLabel.innerHTML = name;
        return this;
    }




}
