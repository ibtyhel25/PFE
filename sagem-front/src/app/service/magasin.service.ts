import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './conf';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MagasinService {


 
  constructor(private http:HttpClient) { }

  
}