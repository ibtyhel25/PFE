import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './conf';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MvttestService {


 
  constructor(private http:HttpClient) { }

  getAllMvt(){
 
    return this.http.get(`${baseUrl}/mvttest/getAll`);


}
filter(dateD,dateF){
  return this.http.get(`${baseUrl}/mvttest/filterBytwoDate/`+dateD+`/`+dateF);
}
}