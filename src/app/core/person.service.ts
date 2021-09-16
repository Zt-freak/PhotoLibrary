import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Person } from './person';
import { PeopleData } from './people-data';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  url: string = "https://randomuser.me/api/?results=50&seed=kenji"
  constructor(private http: HttpClient) {

  }

  getPeople(): Observable<Person[]> {
    return this.http.get<PeopleData>(
      this.url
    )
    .pipe(
      map(
        response => <Person[]>response.results
      )
    )
  }

  getPerson(index: number): Observable<Person> {
    return this.http.get<PeopleData>(
      this.url
    )
    .pipe(
      map(
        response => <Person>response.results[index]
      )
    )
  }
}
