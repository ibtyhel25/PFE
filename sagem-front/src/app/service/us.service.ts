import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './conf';
import { Subject } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'/*les dépendances soient accessibles dans toute l’application*/
})
export class UsService {


 
  constructor(private http:HttpClient) { }

  getAllus(){
 
      return this.http.get(`${baseUrl}/informationUS/getAll`);
 
  
  }
  filter(code){
    return this.http.get(`${baseUrl}/informationUS/filterByCode/`+code);
  }

  filterStock(codeUs,codeM){
    return this.http.get(`${baseUrl}/informationUS/filterByMagasin/`+codeUs+`/`+codeM);
  }
  filterEtat(codeUs,codeP){
    return this.http.get(`${baseUrl}/informationUS/filterByProduit/`+codeUs+`/`+codeP);
  }
}