import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class TempSettingService {
  public url = 'http://localhost:1000';
  constructor(private http: HttpClient) {}

  findAll(): Observable<any> {
    return this.http
      .post(`${this.url}/api/tempSetting/search`, {})
      .pipe(map((res: any) => res));
  }

  create(dataInfo: any): Observable<any> {
    return this.http
      .post(`${this.url}/api/tempSetting/create`, { dataInfo })
      .pipe(map((res: any) => res));
  }

  delete(id: String): Observable<any> {
    return this.http
      .post(`${this.url}/api/tempSetting/delete`, { id })
      .pipe(map((res: any) => res));
  }
}
