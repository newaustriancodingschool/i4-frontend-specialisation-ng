import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private url = 'https://my-json-server.typicode.com/newaustriancodingschool/i4-frontend-specialisation-ng/heroes';
  constructor(private httpClient: HttpClient) {}

  getHeroes(): Observable<Array<Hero>> {
    return this.httpClient.get<Array<Hero>>(this.url);
  }
}
