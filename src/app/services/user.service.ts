import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../component/models/IUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private httpClient : HttpClient) {

  }

  doSomeStuff() {
  console.log("суету навести охота");
  }

  getUser(): Observable<IUser[]>{
   return this.httpClient.get<IUser[]>('https://jsonplaceholder.typicode.com/users')

  }
}
