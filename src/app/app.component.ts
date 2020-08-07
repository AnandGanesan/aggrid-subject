import { Component, OnInit } from '@angular/core';
import { IInputField } from './ngAbstractInputField';
import { NgInputTextFieldComponent } from './ngInputTextField';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'hellong';

  ngOnInit(): void {
    console.log('APP INIT');
    // const config: IInputField = {
    //   value: 'Ohm Sai Ram',
    //   width: 10

    // }
    // const txtInp = new NgInputTextFieldComponent(config);
    // txtInp.setValue('Ohm Sai Ram');
    // txtInp.setLabel('Ohm Sai Ram');
    // txtInp.setInputName('Ohm Sai Ram');

    // console.log(txtInp);
  }
}
