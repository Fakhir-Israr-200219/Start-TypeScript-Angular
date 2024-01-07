import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-templeate',
  standalone: true,
  imports: [],
  template: `
  <div class="inlineTemplate">
    <p>inline-templeate works!</p>
    <p>this is inline template in angular ok!</p>
    </div>
  `,
  styleUrl: './inline-templeate.component.scss'
})
export class InlineTempleateComponent {

}
