import { Component, OnInit } from '@angular/core'
import { User } from '../../models/User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[]

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 25,
        address: {
          street: '123 The Post Road Apt. K',
          city: 'Springfield',
          state: 'OH'
        }
      },
      {
        firstName: 'James',
        lastName: 'Cameron',
        age: 22,
        address: {
          street: '935 School St',
          city: 'Lynn',
          state: 'MA'
        }
      },
      {
        firstName: 'Carrie',
        lastName: 'Johnson',
        age: 19,
        address: {
          street: '1100 OH-347',
          city: 'East Liberty',
          state: 'OH'
        }
      }
    ]
    this.addUser({
      firstName: 'David',
      lastName: 'Jackson',
      age: 30,
      address: {
        street: '100 Lagonda Ave',
        city: 'Springfield',
        state: 'OH'
      }
    })
  }

  addUser(user: User): void {
    this.users.push(user)
  }
}
