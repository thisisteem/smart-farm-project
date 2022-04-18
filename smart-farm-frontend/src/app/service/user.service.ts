import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })

export class UserService {
    public url = "http://localhost:1000"
    // public url = 'backend-service.default.svc.cluster.local';
    constructor(private http: HttpClient) { }

    findAllUser(): Observable<any> {       
    return this.http.post(`${this.url}/api/user/search`, {})        
    .pipe(map((res: any) => res))   }
}
