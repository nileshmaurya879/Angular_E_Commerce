import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { sellerLogin_RequestData, sellerSignUpService_Request, sellerSignUpService_Response } from '../Model/sellerSignUp';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  private readonly baseUrl = environment.apiBaseUrl
  constructor(private http:HttpClient) { }

  GetSellerSignUp(id:string){
    console.log(this.baseUrl + "/seller?id="+id)
     return this.http.get(this.baseUrl + "/seller?id="+id);
  }

  PostSellerSignUp(data:sellerSignUpService_Request):Observable<sellerSignUpService_Response>{
    return this.http.post<sellerSignUpService_Response>(this.baseUrl+"/seller",data);
  }

  GetSellerLogin(data:sellerLogin_RequestData){
    return this.http.get<sellerSignUpService_Response>(this.baseUrl+"/seller?email="+data.email+"&password="+data.password);
  }
}
