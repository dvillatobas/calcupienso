import { Component } from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/forms';

import {MdButton} from '@angular2-material/button/button';
import { MdCard } from '@angular2-material/card/card';
import { MD_INPUT_DIRECTIVES, MdInput} from '@angular2-material/input/input';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    MdButton,
    MdCard,
    MdInput,
    MD_INPUT_DIRECTIVES,
    FORM_DIRECTIVES
  ],
})
export class AppComponent {
  private step : number;
  private peso : string = 'Peso perro';
  





  inicio(){
    this.step = 0;
  }
}
