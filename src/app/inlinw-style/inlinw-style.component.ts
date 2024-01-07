import { Component } from '@angular/core';

@Component({
  selector: 'app-inlinw-style',
  standalone: true,
  imports: [],
  templateUrl: './inlinw-style.component.html',
  styles: `
    .container{
      p{
        font-size:30px;
        color:brown;
      }
    }
  `
})
export class InlinwStyleComponent {

}
