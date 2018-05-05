import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Match} from './pendingMatch';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observer } from 'rxjs/Observer';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
@Injectable()
export class MatchService {

  res: Observable<Object>;

  matchurl = 'http://localhost:8000/matches';
  constructor(private http: HttpClient) { }

  postMatch(match: Object): Observable<Object> {
    this.res = this.http.post<Object>(this.matchurl, match, httpOptions);
    console.log(this.res);
    return this.res;
  }

  getPendingMatches(): Observable<Match[]> {
    return this.http.get<Match[]>(this.matchurl);
  }

  updateMatch(match: Object, id: string): Observable<Object> {
    let upurl= this.matchurl + '/' + id;
    return this.http.put<object>(upurl, match, httpOptions);
  }

}
