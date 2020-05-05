import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscribable, Observable } from 'rxjs';
import { Title } from '../Models/Title';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(private http: HttpClient) { }

  public getTitles(): Observable<Array<Title>> {
    return this.http.get<Title[]>('/api/titles');
  }
}
