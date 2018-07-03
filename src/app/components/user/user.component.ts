import { Component } from '@angular/core'
import { User } from '../../models/User'

@Component({
  selector: 'app-user',
  styleUrls: ['./user.component.css'],
  templateUrl: './user.component.html'
})

export class UserComponent {
  user: User

  constructor() {
    this.user = {
      firstName: 'Stephen',
      lastName: 'Kise',
      age: 25,
      address: {
        street: '133 The Post Road Apt. Q',
        city: 'Springfield',
        state: 'OH'
      }
    }
  }
}
