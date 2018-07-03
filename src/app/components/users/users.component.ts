import { Component, OnInit } from '@angular/core'
import { User } from '../../models/User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[]
  showExtended: boolean = true
  loaded: boolean = false
  enableAdd: boolean = true

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
        },
        image: 'https://imgplaceholder.com/600x600'
      },
      {
        firstName: 'James',
        lastName: 'Cameron',
        age: 22,
        address: {
          street: '935 School St',
          city: 'Lynn',
          state: 'MA'
        },
        image: 'https://imgplaceholder.com/600x600'
      },
      {
        firstName: 'Carrie',
        lastName: 'Johnson',
        age: 19,
        address: {
          street: '1100 OH-347',
          city: 'East Liberty',
          state: 'OH'
        },
        image: 'https://imgplaceholder.com/600x600'
      }
    ]
    setTimeout(() => {
      this.addUser({
        firstName: 'David',
        lastName: 'Jackson'
      })
      this.loaded = true
    }, 2000)
  }

  addUser(user: User): void {
    this.users.push(user)
  }
}
