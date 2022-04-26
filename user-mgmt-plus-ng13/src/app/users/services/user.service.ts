import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

// Decorator
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient ) { // dep inj for http client 

  }

  // create user 
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

  // list users 
  getUsers(): Observable<User[]> { // 1. get the req from the service.
    console.log('Inside Service');
    // 2. send the req to the rest api 
      // 2.1. What's the REST API URL?  https://jsonplaceholder.typicode.com/users
      // 2.2. What's Http Method? GET 
      // 2.3. What's the REST API Client Tool? HttpClient
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe( map( (res: User[]) => { // 3. get the res from the rest api 
        console.log(res);
        // ideal place for sorting, removing, filtering, adding, converting .... 
        return res;// 4. send the res to the comp 
      }));
  }

  // user details 
  getUserById(userId: string): Observable<User> { // 1. get the req with an id from the comp  
    console.log(userId); 
    // 2. send the req to the REST API.
    // 2.1. What's the REST API URL? https://jsonplaceholder.typicode.com/users/<userId>
    // 2.2. What's the HTTP Method? GET
    // 2.3. What's the REST API client? HttpClient
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .pipe( map( (res: User) => { // 3. get the res from the rest api 
        console.log(res);
        return res;// 4. send the res to the comp 
      }));
  }

  // update the user 
  updateUser(formData: User): Promise<User> | Promise<any>{
    console.log(formData);

    // Submitting the form data to the REST API using promises and async await
    return this.http.put<User>(`https://jsonplaceholder.typicode.com/users/${formData.id}`, formData)
      .toPromise()  // deprecated in rxjs v7. will be removed in rxjs v8
      .then( (res: User | undefined ) => {
        console.log(typeof res);
        console.log(res);
        return res;
      })
      .catch( (err)=> {
        console.log(err);
        return err;
      })
      .finally( () => {
        console.log('It is over!')
      });

  }

  //TODO: delete the user 
  // https://jsonplaceholder.typicode.com/users/1
}
