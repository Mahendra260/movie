import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { registerLocaleData } from '@angular/common';
import { User } from './user.model';

const httpOption = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUrl: string = 'http://localhost:5001/api/users/';

  public loogedIn: boolean = false;

  user = new Subject<any>();
  tokenExpirationtimer: any;
  
  

  constructor(private http: HttpClient) { }

  register(userdata): Observable<any> {
    return this.http.post<any>('http://localhost:5001/api/users/register', JSON.stringify(userdata), httpOption)
  }

  login(userdata): Observable<any> {
    return this.http.post<any>('http://localhost:5001/api/users/login', JSON.stringify(userdata), httpOption)
      .pipe(catchError(errorRes => {
        return throwError(errorRes);
      }), tap(resData => {
        this.handleAuthentication(resData.email, resData.userId, resData.token, +resData.expiresIn)
      }))
      ;
  }


  logout(userdata): Observable<any> {
    return this.http.post<any>('http://localhost:5001/api/users/logout', JSON.stringify(userdata), httpOption)
      .pipe(catchError(errorRes => {
        return throwError(errorRes);
      }), tap(resData => {
        this.handleLogout(resData.success)
      }))
      ;
  }


  autoLogin(){
    let userdata:{
      email:string;
      id:string;
      _token:string;
      _tokenExpirationDate:string
    }
   -JSON.parse(localStorage.getItem('userdata'));
   if(!userdata){
     return;
   }
   let loadedUser= new User(userdata.email,userdata.id,userdata._token,new Date(userdata._tokenExpirationDate));
   if(loadedUser.token){
     this.user.next(loadedUser);
     let expirationDuration =new Date(userdata._tokenExpirationDate).getTime() -new Date().getTime();
     this.autoLogin()
   }

  }

  autoLogout(expirationTime){
    setTimeout(()=>{
      this.handleLogout(true);
    },expirationTime)
  }

    private handleAuthentication(email: string,userId: string,token: string,expiresIn:number ){
      let expirationDate =new Date(new Date().getTime()+ +expiresIn*1000)
      let user =new User(email,userId,token,expirationDate);

      this.user.next(user);
      this.autoLogout(expiresIn*1000);
      localStorage.setItem('userdata',JSON.stringify(user))
    }

    private handleLogout(success:boolean){
      console.log(success);
      if(success === true){
      this.user.next(null);
      localStorage.removeItem('userdata');
      if(this.tokenExpirationtimer){
        clearTimeout(this.tokenExpirationtimer);
      }
    }
    this.tokenExpirationtimer=null;
  }
} 



