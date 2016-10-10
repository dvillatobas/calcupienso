import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  private tipo=[
    ['Cachorro',140],
    ['Adulto',130],
    ['Gran danés adulto',200],
    ['Terrier adulto',180],
    ['Poco activo o castrado',95],
    ['Anciano o raza nórdica',105]
  ];
  private raza=[
    ['Labradores, golden y nórdicos',0.8],
    ['Cocker, Beagle... (tendencia a obesidad)',0.9],
    ['Gran danés, Greyhound...(tendencia a delgadez)',1.1],
    ['Otros',1]
  ];
  private actividad=[
    ['Muy tranquilo',0.8],
    ['Tranquilo',0.9],
    ['Normal',1],
    ['Activo',1.1],
    ['Hiperactivo o Terriers',1.2],
    ['Perro deportivo o de trabajo corto e intenso',1.2],
    ['Perro deportivo o de trabajo de resistencia (5-8Km/dia)',1.3],
    ['Perro deportivo o de trabajo de resistencia (10-20Km/dia)',1.7],
    ['Perro deportivo o de trabajo de resistencia (20-50Km/dia)',2]
  ];
  private fisio=[
    ['Crecimiento',1.2,2,9],
    ['Gestación',1.1,1.5,5],
    ['Lactancia',2,4,12],
    ['Vejez (+7 años)',0.8,0.9,2],
    ['Castración',0.8,0.8,1]
  ];
  private p1:number;
  private k1:number;
  private k2:number;
  private k3:number = 1;
  private k4:number;
  private slider_selected:string;

  
  slider(s:string){
    this.slider_selected = s;
  }
}
