import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "./Component/header/header.component";
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { SellerService } from './services/seller.service';
@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, RouterOutlet]
})

export class AppComponent implements OnInit {

  title = 'E-Commerce';
  constructor(private sellerSignUpService: SellerService, private router: Router) {

  }

  ngOnInit(): void {
    console.log('oninit++++++++++')
    if (localStorage.getItem("seller")) {
      this.sellerSignUpService.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home'])
    }
  }

  
}
