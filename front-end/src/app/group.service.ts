import { Injectable } from '@angular/core';
import {Group} from './group';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class GroupService {


  groupsurl = 'http://localhost:8000/groups';
  constructor(private http: HttpClient) { }

  getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(this.groupsurl);
  }

}
