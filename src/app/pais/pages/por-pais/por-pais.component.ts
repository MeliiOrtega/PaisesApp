import { Component, OnInit } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { Country, Name } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`a{ cursor:pointer;}`],
})
export class PorPaisComponent implements OnInit {
  termino!: string;
  hayError: boolean = false;
  paises:Country[] = [];
  sugerencias:Country[] = [];
  ocultarsugerencia: boolean = false;

  constructor(private paisSer: PaisService) {}

  ngOnInit(): void {}

  buscar(event:string) {
    this.termino = event;
    this.hayError = false;
    this.ocultarsugerencia = false;
    this.paisSer.buscarPais(this.termino)
    .subscribe( (paises) => {
        console.log(paises);
        this.paises = paises;

      },(err) => {
        console.log('no hay', err);
        this.hayError = true;
        this.paises = [];
      }
    );
  }

  sugerencia(event:string){
    this.hayError = false;
    this.termino = event;
    this.ocultarsugerencia = true;
    this.paisSer.buscarPais(event).subscribe(paises => {
      this.sugerencias = paises.splice(0,5);
    }, error => this.sugerencias = []);
    
  }
  
  buscar2(termino:string){
    this.buscar(termino);
    
  }
}
