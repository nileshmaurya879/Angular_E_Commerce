import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router){

  }
  ngOnInit(): void {
      this.router.events.subscribe((val:any)=>{
        console.log(val.url)
      })
  }
}
