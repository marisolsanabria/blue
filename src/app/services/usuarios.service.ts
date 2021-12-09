import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';

import { User } from 'src/app/models/user.model';

import { environment } from 'src/environments/environment';

const url = environment.apiUrl + '/users';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private token: string = '';
  private userId: string = '';
  private isAuthenticated: boolean = false;
  private authStatusListener = new Subject<boolean>();

  constructor(private router: Router, private http: HttpClient) {}

  createUser(user: User) {
    return this.http.post<{ message: string; userId: string }>(
      `${url}/signup`,
      user
    );
  }

  login(email: string, password: string) {
    this.http
      .post<{ token: string; expiresIn: number; userId: string }>(
        `${url}/login`,
        {
          email,
          password,
        }
      )
      .subscribe((response) => {
        this.afterLogin(response);
      });
  }

  getUser(userId: string) {
    return this.http.get<{ username: string }>(`${url}/${userId}`);
  }

  loginGoogle(token: string, userId: string) {
    this.http
      .post<{ token: string; expiresIn: number }>(`${url}/getToken`, {
        token,
        userId,
      })
      .subscribe((result) => {
        this.afterLogin({
          token: result.token,
          expiresIn: result.expiresIn,
          userId,
        });
      });
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getIsAuthenticated() {
    return this.isAuthenticated;
  }

  getToken() {
    return this.token;
  }

  getUserId() {
    return this.userId;
  }

  logout() {
    this.token = '';
    this.userId = '';
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.clearAuthData();
    this.router.navigate(['/']);
  }

  autoAuth() {
    const authInfo = this.getAuthData();
    if (!authInfo) {
      return;
    }

    const now = new Date();
    const expiresIn = authInfo.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = localStorage.getItem('token')!;
      this.userId = localStorage.getItem('userId')!;
      this.isAuthenticated = true;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  afterLogin(response: { token: string; expiresIn: number; userId: string }) {
    this.token = response.token;
    this.userId = response.userId;

    if (this.token !== '') {
      const expirationInSeconds = response.expiresIn;
      this.setAuthTimer(expirationInSeconds);
      this.isAuthenticated = true;
      this.authStatusListener.next(true);
      const now = new Date();
      const expirationDate = new Date(
        now.getTime() + expirationInSeconds * 1000
      );
      this.saveAuthData(this.token, expirationDate, this.userId);
    }

    this.router.navigate(['/']);
  }

  private setAuthTimer(durationInSeconds: number) {
    setTimeout(() => {
      this.logout();
    }, durationInSeconds * 1000);
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('expiration');
  }

  private saveAuthData(token: string, expirationDate: Date, userId: string) {
    localStorage.setItem('token', this.token);
    localStorage.setItem('userId', this.userId);
    localStorage.setItem('expiration', expirationDate.toISOString());
  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const expirationDate = new Date(localStorage.getItem('expiration')!);

    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      userId: userId,
      expirationDate: expirationDate,
    };
  }
}

