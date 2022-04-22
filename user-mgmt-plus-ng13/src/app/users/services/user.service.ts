import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Decorator
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient ) { // dep inj for http client 

  }

  createUser( formData: any): any { // 1. get the form data from the comp ts 
    console.log(formData);
    
    // 2. send the data to the rest api
      // 2.1. What's the REST API URL? https://jsonplaceholder.typicode.com/users 
      // 2.2. What's the data? formData 
      // 2.3. What's the Http Method? POST 
      // 2.4. What's the REST API Client tool? HttpClient 
    return this.http.post('https://jsonplaceholder.typicode.com/users', formData)
      .pipe( map( (res: any) => { // 3. get the res from the rest api 
        console.log(res);
        // 4. send the res to the comp ts 
        return res;
      }));  
  }

}
