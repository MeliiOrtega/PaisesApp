import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {

  regiones:string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva:string = "";
  termino: string = 'Hola mundo';
  hayError: boolean = false;
  paises:Country[] = [];

  constructor(private paisSer: PaisService) {}

  ngOnInit(): void {}

  activarRegion(region:string){
    if (region === this.regionActiva) { return;
      
    }
    this.regionActiva = region;
    this.paises = [];
    this.paisSer.buscarRegion(this.regionActiva).subscribe(
      paises =>  this.paises = paises );
  }

  getClass(region:string){
   return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  

 

}
