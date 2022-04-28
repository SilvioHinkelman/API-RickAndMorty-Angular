import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople():Observable<any> {
    let peopleArray = [
      {
        firstName: 'Silvio',
        lastName: 'Hinkelman',
        age: 37,
      },
      {
        firstName: 'Maria',
        lastName: 'Silva',
        age: 28,
      },
      {
        firstName: 'João',
        lastName: 'Pereira',
        age: 32,
      },
      {
        firstName: 'Marcio',
        lastName: 'Santos',
        age: 40,
      },
    ];
    return of(peopleArray)
  }
}
