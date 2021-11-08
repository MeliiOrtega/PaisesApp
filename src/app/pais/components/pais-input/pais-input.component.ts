import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit{


  termino!:string;

  @Output() onEnter = new EventEmitter<string>();
  @Output() onDebounce = new EventEmitter<string>();
  @Input() placeholder!:string;

  debounce: Subject<string> = new Subject();


  ngOnInit() {
    this.debounce.pipe(
      debounceTime(300))
    .subscribe(valor => {
      this.onDebounce.emit(valor);
      console.log('debounce',valor);
    });

  }
  buscar(){
    this.onEnter.emit(this.termino);

  }

  teclaPresionada(){
    this.debounce.next(this.termino);
  }

/*   teclaPresionada(event:any){
    const valor = event.target.value;
    console.log(valor);
    console.log(this.termino);

  } */

}
