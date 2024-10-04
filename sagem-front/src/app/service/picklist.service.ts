import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './conf';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PicklistService {


 
  constructor(private http:HttpClient) { }

  getAllPicklist(){
 
    return this.http.get(`${baseUrl}/picklist/getAll`);


}
filter(date){
  return this.http.get(`${baseUrl}/picklist/filter/`+date);
}
}