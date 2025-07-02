import { Component, OnInit } from '@angular/core';
import { SellerService } from '../../services/seller.service';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { sellerSignUpService_Request } from '../../Model/sellerSignUp';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  imports: [ReactiveFormsModule],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent{
  sellerFormGroup: FormGroup = new FormGroup({
    name:new FormControl(),
    email:new FormControl(),
    password:new FormControl()
  })

  constructor(private sellerSignUpService: SellerService, private router:Router){

  }

  
  SellerSignUp(){
    console.log(this.sellerFormGroup)
    const sellerRequestData:sellerSignUpService_Request = this.sellerFormGroup.value as sellerSignUpService_Request;
    this.sellerSignUpService.PostSellerSignUp(sellerRequestData).subscribe((res:any)=>{
      this.sellerSignUpService.isSellerLoggedIn.next(true);
      console.log(this.sellerSignUpService.isSellerLoggedIn.value);
      localStorage.setItem("sellerHome",JSON.stringify(res))
      console.log(localStorage.getItem("sellerHome"))
      this.router.navigate(['home'])
      
    })
  }
  
}
