import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  
  
  private tipo=[
    ['Cachorro',140],
    ['Adulto',130],
    ['Gran danés adulto',200],
    ['Terrier adulto',180],
    ['Poco activo o castrado',95],
    ['Anciano o raza nórdica',105]
  ];
  private raza=[
    ['Labradores, golden y nórdicos',8],
    ['Cocker, Beagle... (tendencia a obesidad)',9],
    ['Gran danés, Greyhound...(tendencia a delgadez)',11],
    ['Otros',10]
  ];
  private actividad=[
    ['Muy tranquilo',8],
    ['Tranquilo',9],
    ['Normal',10],
    ['Activo',11],
    ['Hiperactivo o Terriers',12],
    ['Perro deportivo o de trabajo corto e intenso',12],
    ['Perro deportivo o de trabajo de resistencia (5-8Km/dia)',13],
    ['Perro deportivo o de trabajo de resistencia (10-20Km/dia)',17],
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
  private s_fisio;
  private s_salud;

  private enlace;

  private ruta;

  constructor(
    private param : ActivatedRoute,
    private router : Router
  ){}

  ngOnInit(){
    let ruta : string;
    this.param.params.forEach((p:Params)=>{
      ruta = p['id'];
      if(ruta != undefined){
        this.p1 = +ruta.slice(0,3);
        this.k1 = +ruta.slice(3,5);
        this.k2 = +ruta.slice(5,7);
        this.selected = this.fisio[+ruta.slice(7,8)];
        this.s_fisio = +ruta.slice(7,8);
        this.k3 = +ruta.slice(8,10);
        this.selected_salud = this.salud[+ruta.slice(10,11)];
        this.s_salud = +ruta.slice(10,11);

        this.k4 = +ruta.slice(11,13);
        this.pienso = +ruta.slice(13,17);
        this.peso = +ruta.slice(17,ruta.length)/10;
        
      }
      
    })
  }
  
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

  link(){
    let url:string = '';
    url += this.p1.toString();
    if(this.k1<10){
      url+="0";
    }
    url +=this.k1.toString();

    if(this.k2<10){
      url+="0";
    }
    url +=this.k2.toString();

    url += this.fisio.indexOf(this.selected).toString();

    if(this.k3<10){
      url+="0";
    }
    url +=this.k3.toString();

    url += this.salud.indexOf(this.selected_salud).toString();

    if(this.k4<10){
      url+="0";
    }
    url +=this.k4.toString();

    url += this.pienso.toString();

    let p:string = (this.peso * 10).toString().slice(0,3);

    url += p;

    
    this.enlace = 'localhost:4200/'+url;
  }

  ir(){
    console.log(this.enlace)
    this.router.navigate([this.enlace.split("/")[1]]);
  }
}
