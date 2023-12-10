import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private token = '';

  // public isLoggedIn() { return this.token !== '';}

  // constructor(private http: HttpClient) { }

  // login(): Observable<string> {
  //   return this.http.post<string>('https://fakestoreapi.com/auth/login', {
  //     username: 'david_r',
  //     password: '3478*#54'
  //   }).pipe(tap(token => this.token = token));
  // }

  // logout() {
  //   this.token = '';
  // }

  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl = '';

  login() : Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = true)
    );
  }

  logout() : void {
    this.isLoggedIn = false;
  }

}
