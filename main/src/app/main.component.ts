import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'main-app',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css']
})
export class MainAppComponent {
 
  private step : number;
  private ncr : number;
  private peso : number;
  private k1 : number;
  private k2 : number;
  private error : string = undefined;

  constructor(){
    this.step = 1;
    this.ncr = 0;
  }
  atras(){
    this.step--;
  }
  
  p1(n : number){
    
    
    if(this.peso > 0){
      this.error = undefined;
      this.ncr =  this.peso**0.75 * n;
      this.step ++;
    }else{
      this.error = 'Introduce un peso válido'
    }
    
  }
  p2(n : number){
    this.k1 = n;
  }
  p3(n : number){
    this.k2 = n;
  }

}
