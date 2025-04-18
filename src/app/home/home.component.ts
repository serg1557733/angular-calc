import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  text = '';
  onClickFn = () => {
    this.text = 'Button clicked!';
    console.log('Home button clicked!');
  };
}
