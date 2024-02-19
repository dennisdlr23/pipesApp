import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'dennis';
  public nameUpper: string = 'DENNIS';
  public fullName: string = 'dEnNiS dE lA rOsa';

  public customDate: Date = new Date();
}
