import { Component } from '@angular/core';
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
export class SellerAuthComponent {

  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  

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
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['home'])
      console.log(res)
    })
  }
}
