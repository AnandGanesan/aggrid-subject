
import { NgAbstractInputField, IInputField } from './ngAbstractInputField';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-ng-input',
    template: `<h1>INPUT COMP</h1>
    <app-ng-abstract-input #myComp></app-ng-abstract-input>
                <button type='button' (click)='buttonListener()'>Ohm Sai Ram</button>`
  })
export class NgInputTextFieldComponent extends NgAbstractInputField implements OnInit, AfterViewInit {
   
    protected className = 'ag-text-field';
    protected displayTag = 'input';
    protected inputType = 'text';

    @ViewChild('myComp') myComp: NgAbstractInputField;

    protected config: IInputField;

    ngOnInit(){
        console.log('INIT :: ', this);
        // this.postConstruct();
        //this.eInput.
    }

    ngAfterViewInit(): void {
       //this.setValue('Ohm Sai Ram');
        
        console.log('AFTER INIT :: ',this.eLabel);
    }

    buttonListener(){
        console.log(event);
        // this.postConstruct();
        this.myComp.setInputName('hello');
    }

    // constructor(config?: IInputField) {
    //     super();

    //     if (config) {
    //         this.config = config;
    //     }
    // }

    // public setValue(value: string, silent?: boolean): this {


    //     const ret = super.setValue(value, silent);

    //     // if (this.eInput.value !== value) {
    //     //     this.eInput.value = (value) ? value : '';
    //     // }

    //     return ret;
    // }
}
