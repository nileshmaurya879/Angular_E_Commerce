import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  menuType:String = 'default'
  constructor(private router: Router) {

  }
  ngOnInit(): void {
  
    this.router.events.subscribe((val: any) => {
      if (val.url) {
        console.log(val.url.includes("seller"))
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          console.log("seller erea..")
          this.menuType = "seller"
        }
        else {
          console.log("other erea..")
          this.menuType = "Default"
        }
      }
    })
  }
}
