import { Component } from '@angular/core';
import { UserListComponent } from '../user-list/user-list.component';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [UserListComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
