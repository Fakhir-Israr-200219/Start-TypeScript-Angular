import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  myarr: any[] = [1, 2, 3, 4, 5];
  getArr(){
    return this.myarr.map(item => item * 2)
  }
}
