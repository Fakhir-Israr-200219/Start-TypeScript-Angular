import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { LoginComponent } from './login/login.component';
import { InlinwStyleComponent } from './inlinw-style/inlinw-style.component';
import { InlineTempleateComponent } from './inline-templeate/inline-templeate.component';
import { InlineTemAndStyComponent } from './inline-tem-and-sty/inline-tem-and-sty.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,UserListComponent,LoginComponent,InlinwStyleComponent,InlineTempleateComponent,InlineTemAndStyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-first-application';
  info = 'my name is Fakhir Israr'
  data = "Code setep by step"
  getFromFunction()
  {
    return "WE start to learning angulae"
  }
}
