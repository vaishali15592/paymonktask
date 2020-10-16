import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  // public isAuthenticate: any = () => {
    public isAuthenticated(): any {
   const isAuth = localStorage.getItem('token');
   return isAuth;
  }

  public get = (path: string): Observable<any> => {
    return this.http.get(this.baseUrl + path);
  }

  public post = (path: string, data: object): Observable<any> => {
    return this.http.post(this.baseUrl + path, data);
  }

  public put = (path: string, data: object): Observable<any> => {
    return this.http.put(this.baseUrl + path, data);
  }
}
