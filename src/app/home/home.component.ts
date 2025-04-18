import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  text = '';
  param1 = 'value1';
  param2 = 'value2';
  url = `http://localhost:4200/api/test?param1=${this.param1}&param2=${this.param2}`;

  onClickFn = () => {
    this.text = 'Button clicked!';
    fetch(this.url).then((response) =>
      response.json().then((t) => (this.text = t.message))
    );
    console.log('Home button clicked!');
  };
}
