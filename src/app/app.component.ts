import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { UsersService } from './data/services/users.service';

interface IUser {
  message: string;
  status: number;
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  usersService = inject(UsersService);
  data: IUser = { message: '', status: 0 };

  constructor() {
    this.usersService
      .getTestData()
      .subscribe(
        (res) => (console.log('res', res), (this.data = res as IUser))
      );
  }
}
