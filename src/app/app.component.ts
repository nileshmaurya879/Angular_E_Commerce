import { Component } from '@angular/core';
import { HeaderComponent } from "./Component/header/header.component";
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent,RouterOutlet]
})

export class AppComponent {
  title = 'E-Commerce';
}
