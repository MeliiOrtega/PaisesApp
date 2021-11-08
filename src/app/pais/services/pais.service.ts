import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  //termino!:string;
  private apiURL:string = 'https://restcountries.com/v3.1';
  get htppParams(){
    return new HttpParams().set('fields','capital,population,flags,name,cca2');
  }
  


  constructor( private http:HttpClient) { }

  buscarPais(termino:string):Observable<Country[]>{
            
    //BUSCAR PAIS ES UN METODO Y RETORNA UN OBSERVABLE
    const url = `${this.apiURL}/name/${termino}`;
    //VA A RETORNAR UN ARREGLO CON LOS PAISES
    return this.http.get<Country[]>(url, {params: this.htppParams})/* .pipe(
      catchError(err => of([])))*/
      ;
  }

  buscarCapital(termino:string):Observable<Country[]>{
    const url = `${this.apiURL}/capital/${termino}`;
    return this.http.get<Country[]>(url, {params: this.htppParams});
  }

  verPais(codigo:string):Observable<Country>{
    const url = `${this.apiURL}/alpha/${codigo}`;
    return this.http.get<Country>(url);
  }

  buscarRegion(region:string):Observable<Country[]>{
    const url = `${this.apiURL}/region/${region}`;
    return this.http.get<Country[]>(url,{params: this.htppParams});
  }
}
