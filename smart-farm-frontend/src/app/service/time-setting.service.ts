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
export class TimeSettingService {
  public url = 'http://localhost:3000';
  // public url = 'backend-service.default.svc.cluster.local';
  constructor(private http: HttpClient) {}

  findAll(): Observable<any> {
    return this.http
      .post(`${this.url}/api/timeSetting/search`, {})
      .pipe(map((res: any) => res));
  }

  delete(id: String): Observable<any> {
    return this.http
      .post(`${this.url}/api/timeSetting/delete`, { id })
      .pipe(map((res: any) => res));
  }

  create(dataInfo: any): Observable<any> {
    return this.http
      .post(`${this.url}/api/timeSetting/create`, { dataInfo })
      .pipe(map((res: any) => res));
  }
}
