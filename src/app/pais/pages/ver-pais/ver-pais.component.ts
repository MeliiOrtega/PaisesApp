import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  /* index!:string;
  this.index = this.routerAc.snapshot.params['id'];
    console.log(this.index); */

  pais!:Country;
  idiomas:string[] = [];

  constructor(private routerAc: ActivatedRoute, private paisSer: PaisService) {}

  ngOnInit(): void {
    /* 
      this.routerAc.params.subscribe(({ id }) => {
      console.log(id);
      this.paisSer.verPais(id).subscribe((pais) => {
        console.log(pais); });
      }); 
    */

    //! CON RXJS SWITCHMAPS -> recibe un subscribe y retorna otro
    this.routerAc.params
      .pipe(switchMap(({ id }) => this.paisSer.verPais(id)), tap(console.log))
      .subscribe((pais) => {
        this.pais = pais[0];
        console.log(pais);
        const a = this.pais.languages;
        this.idiomas = Object.values(a);
        //this.idiomas = Object.values(this.pais.languages) ;
        
      });
      
  }

  
}
