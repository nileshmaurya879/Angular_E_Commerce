import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { sellerSignUpService_Request } from '../Model/sellerSignUp';
import { BehaviorSubject } from 'rxjs';

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
  PostSellerSignUp(data:sellerSignUpService_Request){
    return this.http.post(this.baseUrl+"/seller",data);
  }
  // getSellerAuth(data:boolean){
  //   this.isSellerLoggedIn.next(data)
  // }
}
