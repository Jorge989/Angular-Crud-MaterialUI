import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private cookies: CookieService) {}
  postProduct(data: any) {
    return this.http.post<any>(
      'http://localhost:3001/api/v1/products',
      data,
      {}
    );
  }
  GetCookie() {
    console.log('TOKEN', this.cookies.get('token'));
  }
  getProduct(token: string) {
    console.log('token', token);
    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    const httpOptions = {
      headers: headers_object,
    };
    return this.http.get<any>(
      'http://localhost:3001/api/v1/products',
      httpOptions
    );
  }
  getProductById(id: number) {
    return this.http.get<any>('http://localhost:3001/api/v1/products/' + id);
  }
  putProduct(data: any, id: number) {
    return this.http.patch<any>(
      'http://localhost:3001/api/v1/products/' + id,
      data
    );
  }
  deleteProduct(id: number) {
    return this.http.delete<any>('http://localhost:3001/api/v1/products/' + id);
  }
  //!USER REQUEST
  PostUser(data: any) {
    console.log('aqui dados ', data);
    return this.http.post<any>(
      'http://localhost:3001/api/v1/users/signup',
      data
    );
  }
  LoginUser(data: any) {
    console.log(data);
    return this.http.post<any>(
      'http://localhost:3001/api/v1/users/login',
      data
    );
  }
}
