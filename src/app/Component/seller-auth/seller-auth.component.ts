import { Component } from '@angular/core';
import { SellerService } from '../../services/seller.service';

@Component({
  selector: 'app-seller-auth',
  imports: [],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent {
  constructor(private sellerSignUpService: SellerService){

  }
  SellerSignUp(){
    console.log("test")
    this.sellerSignUpService.GetSellerSignUp();
  }
}
