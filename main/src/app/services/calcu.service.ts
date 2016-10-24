import { Injectable } from '@angular/core';

export class Calcu{
	constructor(
		private p1,
		private k1:number,
  		private k2:number,
  		private k3:number,
  		private k4:number,
  		private slider_selected:string,
  		private selected,
  		private selected_salud,
  		private peso:number,
  		private pienso:number,
  		private s_fisio,
  		private s_salud,

  		private enlace,
  		private ruta,
	){}
}

@Injectable()
export class CalcuService {
	private LOCALHOST = 'localhost:4200/';
	
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
		['Perro deportivo o de trabajo de resistencia (20-50Km/dia)',20]
  	];
	private fisio=[
		['Crecimiento',12,20,'Desde perros mini (1,2) a perros gigantes(2):'],
		['Gestación',11,15,'A valorar entre 1,1 y 1,5:'],
		['Lactancia',20,40,'A valorar entre 2 y 4:'],
		['Vejez (+7 años)',8,9,'A valorar entre 0,8 y 0,9:'],
		['Castración',8,undefined,'El valor es 0,8'],
		['Ninguno de ellos',10,undefined, '']
  	];
  	private salud=[
		['Inactividad o reposo forzado',7,9],
		['Bueno',10],
		['Obesidad',6],
		['Hipermetabolismo (recuperación de una cirugía, infecciones, cáncer, quemaduras...)',11,20]

  	];
	
	constructor() { }
	getTipo(){
		return this.tipo;
	}
	getRaza(){
		return this.raza;
	}
	getActividad(){
		return this.actividad;
	}
	getFisio(){
		return this.fisio;
	}
	getSalud(){
		return this.salud;
	}
	getLocalhost(){
		return this.LOCALHOST;
	}
	fulldata(p1,k1,k2,k3,k4,peso,pienso){
	    return (
	      p1!=undefined &&
	      k1!=undefined &&
	      k2!=undefined &&
	      k3!=undefined &&
	      k4!=undefined &&
	      (peso!=undefined && peso != 0 ) &&
	      (pienso!=undefined && pienso != 0 )
	      );
  	}
	calcular(p1,k1,k2,k3,k4,peso,pienso){
		let p =peso;
		if (isNaN(p)){
			p = p.replace(",",".");
			p = +p;
		}
		console.log(p)
		return p1*(Math.pow(p,0.75))*k1*k2*k3*k4/pienso/10;
	}
	
	isnan(n){
		return isNaN(n);
	}



}