import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CalcuService } from '../services/calcu.service';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit{
  

  private nrc:number;
  private k1:number;
  private k2:number;
  private k3:number;
  private k4:number;
  private slider_selected:string;
  private peso:number;
  private pienso:number;
  private s_fisio;
  private s_salud;

  private enlace;
  private ruta;

  

  constructor(
    private param : ActivatedRoute,
    private router : Router,
    private cserve : CalcuService
  ){}

  ngOnInit(){
    let ruta : string;
    this.param.params.forEach((p:Params)=>{
      ruta = p['id'];
      if(ruta != undefined){
        this.enlace = this.cserve.getLocalhost() + ruta;
        this.nrc = +ruta.slice(0,3);
        this.k1 = +ruta.slice(3,5);
        this.k2 = +ruta.slice(5,7);
        this.s_fisio = this.cserve.getFisio()[+ruta.slice(7,8)];
        this.k3 = +ruta.slice(8,10);
        this.s_salud = this.cserve.getSalud()[+ruta.slice(10,11)];
        this.k4 = +ruta.slice(11,13);
        this.pienso = +ruta.slice(13,17);
        this.peso = +ruta.slice(17,ruta.length)/10;
        
      }
      
    })
  }
  link(){
    let url:string = '';
    // 0-2
    url += this.nrc.toString();
    if(this.k1<10){
      url+="0";
    }
    //3-4
    url +=this.k1.toString();

    if(this.k2<10){
      url+="0";
    }
    //5-6
    url +=this.k2.toString();
    //7
    url += this.cserve.getFisio().indexOf(this.s_fisio).toString();

    if(this.k3<10){
      url+="0";
    }
    //8-9
    url +=this.k3.toString();
    //10
    url += this.cserve.getSalud().indexOf(this.s_salud).toString();

    if(this.k4<10){
      url+="0";
    }
    //11
    url +=this.k4.toString();
    //12-15
    url += this.pienso.toString();

    let p:string = (this.peso * 10).toString().slice(0,3);
    //16-18
    url += p;

    
    this.enlace = this.cserve.getLocalhost()+url;
   
  }

  inicializarK3(f){
      this.k3 = f[1]
  }
  
  inicializarK4(s){
    this.k4 = s[1];
  }
  show(){
    console.log(this.k3)
  }
  exp(b,e){
    return Math.pow(b,e);
  }

  

  ir(){
    console.log(this.enlace)
    this.router.navigate([this.enlace.split("/")[1]]);
  }

  
}
