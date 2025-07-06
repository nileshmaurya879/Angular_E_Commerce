import { Component, OnInit } from '@angular/core';
import { SellerService } from '../../services/seller.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { sellerLogin_RequestData, sellerSignUpService_Request, sellerSignUpService_Response } from '../../Model/sellerSignUp';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seller-auth',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent {
  sellerFormGroup: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  })

  sellerSignInFormGroup: FormGroup = new FormGroup
    (
      {
        email: new FormControl(),
        password: new FormControl()
      }
    )

  constructor(private sellerSignUpService: SellerService, private router: Router) { }

  showLogin: boolean = false;
  SellerSignUp() {
    const sellerRequestData: sellerSignUpService_Request = this.sellerFormGroup.value as sellerSignUpService_Request;
    this.sellerSignUpService.PostSellerSignUp(sellerRequestData).subscribe((res) => {
      this.sellerSignUpService.isSellerLoggedIn.next(true);
      console.log(JSON.stringify(res))
      localStorage.setItem("sellerHome", JSON.stringify(res))
      this.router.navigate(['seller-home'])
    })
  }
  openLoginPage(isLoginPage: boolean) {
    if (isLoginPage) {
      this.showLogin = true
    } else {
      this.showLogin = false
    }
  }

  /*=============START: Sign In Page===============*/
  SellerSignIn() {
    const sellerLoginInDetail = this.sellerSignInFormGroup.value as sellerLogin_RequestData
    this.sellerSignUpService.GetSellerLogin(sellerLoginInDetail).subscribe((res) => {
      console.log(res);
      this.sellerSignUpService.isSellerLoggedIn.next(true);
      console.log(JSON.stringify(res))
      localStorage.setItem("sellerHome", JSON.stringify(res))
      this.router.navigate(['seller-home'])
    })
  }
  /*=============END: Sign In Page===============*/

}
