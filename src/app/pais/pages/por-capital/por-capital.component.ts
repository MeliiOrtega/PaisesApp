import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  termino: string = 'Hola mundo';
  hayError: boolean = false;
  paises:Country[] = [];

  constructor(private paisSer: PaisService) {}

  ngOnInit(): void {}

  buscar(event:string) {
    this.termino = event;
    this.hayError = false;
    this.paisSer.buscarCapital(this.termino)
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
    
  }

}
