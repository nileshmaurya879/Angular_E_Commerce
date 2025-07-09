import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink,CommonModule],
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
          this.menuType = "seller"
          console.log("in seller erea.."+this.menuType)
        }
        else {
          this.menuType = "Default"
          console.log("other erea.."+this.menuType)
        }
      }
    })
  }
}
