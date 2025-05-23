import { Component } from '@angular/core';
import { HeaderComponent } from "./Component/header/header.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent]
})

export class AppComponent {
  title = 'E-Commerce';
}
