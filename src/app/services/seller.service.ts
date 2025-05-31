import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  constructor() { }

  GetSellerSignUp(){
    console.log("==========This is comming from service============")
  }
}
