import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Taskrequest } from '../model/taskrequest';


@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {
    events:String[]=[];
    username:String='';
    constructor(private httpClient: HttpClient) {}
    addTasks(tasks: Taskrequest): Observable<Object> 
    {
      return this.httpClient.post('http://localhost:8091/tasks/get', tasks);
    }
  
    
  
   
}