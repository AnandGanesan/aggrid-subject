import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { fromEvent, Observable, Subject } from 'rxjs';

export interface IComp { 
  name: string;
  obs?: Subject<any>;
  hit: boolean;
  label: string;
}
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit, AfterViewInit {

  
  compRow = [];
  comp1: IComp = {
    name: 'Angular',
    obs: new Subject(),
    hit: false,
    label: 'Ohm Sai Ram'
  };


  comp2: IComp = {
    name: 'React',
    obs: new Subject(),
    hit: false,
    label: ''
  };

  comp3: IComp = {
    name: 'Vue',
    obs: new Subject(),
    hit: false,
    label: ''
  };

  ngOnInit() {
    this.compRow.push(this.comp1);
    this.compRow.push(this.comp2);
    this.compRow.push(this.comp3);
  }
  // compRow = [{ name: 'Angular' }, { name: 'React' }, { name: 'Vue' }];

  constructor() { }

  ngAfterViewInit(): void {



    this.compRow.forEach((element: IComp) => {

      element.obs.subscribe((obj: string) => {
        console.log('obj :: ', obj, element);
        element.hit = element.name === obj ? true : false;
      });

      // const el = document.getElementById(element.name);
      // const btnComp = fromEvent(el, 'click');

      // btnComp.subscribe((evt: MouseEvent) => {
      //   console.log('evt :: ', evt, ' element :: ', element);
      //   const btn = evt.currentTarget as HTMLElement;
      //   // element.hit = true;
      //   element.obs.next(btn.id);
      // });

      const el = document.getElementById(element.name);
      const btnComp = fromEvent(el, 'input');

      btnComp.subscribe((evt: InputEvent) => {
        console.log('evt :: ', evt, ' element :: ', element);
        const inp = evt.currentTarget as HTMLInputElement;
        element.label = inp.value;
        element.obs.next(inp.value);
      });

    });


  }

  buttonListener(event: MouseEvent) {
    const btn = event.currentTarget as HTMLElement;
    // console.log(btn.innerHTML);
  }

  onSearchChange(event: InputEvent): void {
    const inp = event.currentTarget as HTMLInputElement;
    // console.log(inp.value);
  }



}
