import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {
  private url = 'http://localhost:8080/person';
  constructor(public http:HttpClient) {}
  getAllPerson(){
    return this.http.get(this.url);
  }
  postPerson(person){
    return this.http.post(this.url,person);
  }
  deletePerson(id){
    return this.http.delete(this.url + '/'+id);
  }
  updatePerson(person){
    return this.http.put(this.url,person);
  }
  getPersonById(id) {
    return this.http.get(this.url + '/' + id);
  }
}
