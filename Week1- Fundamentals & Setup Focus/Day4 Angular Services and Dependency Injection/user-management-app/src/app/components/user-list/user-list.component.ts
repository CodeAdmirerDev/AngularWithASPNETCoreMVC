import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  imports: [CommonModule]
})
export class UserListComponent implements OnInit {
  users: User[] = [
    { id: 1, name: 'Suri', email: 'suri@example.com' },
    { id: 2, name: 'Monica', email: 'monica@example.com' },
    { id: 3, name: 'Ravi', email: 'ravi@example.com' },
    { id: 4, name: 'Priya', email: 'priya@example.com' },
    { id: 5, name: 'Kiran', email: 'kiran@example.com' }
  ];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}
