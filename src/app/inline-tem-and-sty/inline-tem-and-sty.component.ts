import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-tem-and-sty',
  standalone: true,
  imports: [],
  template: `
  <div class="TS">
    <h1>this is the inline template and inline style</h1>
    <p>inline-tem-and-sty works!</p>
  </div>
    
  `,
  styles: `
    .TS{
      width:700px;
      height:auto;
      border:2px solid red;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      margin:auto;
      margin-top:20px;
      display:block;
      padding:20px
    }
  `
})
export class InlineTemAndStyComponent {

}
