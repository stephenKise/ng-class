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
      firstName: 'John',
      lastName: 'Doe',
      age: 25,
      address: {
        street: '123 The Post Rd Apt. K',
        city: 'Springfield',
        state: 'OH'
      }
    }
  }
}
