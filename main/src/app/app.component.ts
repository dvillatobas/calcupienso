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
    ['Crecimiento',12,20,'Desde perros mini (1,2) a perros gigantes(2):'],
    ['Gestación',11,15,'A valorar entre 1,1 y 1,5:'],
    ['Lactancia',20,40,'A valorar entre 2 y 4:'],
    ['Vejez (+7 años)',8,9,'A valorar entre 0,8 y 0,9:'],
    ['Castración',8,undefined,'El valor es 0,8']
  ];
  private salud=[
    ['Inactividad o reposo forzado',7,9],
    ['Bueno',10],
    ['Obesidad',6],
    ['Hipermetabolismo (recuperación de una cirugía, infecciones, cáncer, quemaduras...)',11,20]

  ];
  private p1:number;
  private k1:number;
  private k2:number;
  private k3:number;
  private k4:number;
  private slider_selected:string;
  private selected;
  private selected_salud;
  private peso:number;
  private pienso:number;
  
  slider1(s){
    this.selected = s;
    this.k3 = s[1];
  }
  slider2(s){
    this.selected_salud = s;
    this.k4 = s[1];
  }
  show(){
    console.log(this.k3)
  }
  exp(b,e){
    return Math.pow(b,e);
  }

  fulldata(){
    return (
      this.p1!=undefined &&
      this.k1!=undefined &&
      this.k2!=undefined &&
      this.k3!=undefined &&
      this.k4!=undefined &&
      this.peso!=undefined &&
      this.pienso!=undefined
      );
  }
}
