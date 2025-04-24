import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:false
})
export class AppComponent {
  items = ['Angular', 'React', 'Vue'];
  newItem = '';
  isAdmin = true;
  viewMode = 'list';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }

  toggleView() {
    this.viewMode = this.viewMode === 'list' ? 'grid' : 'list';
  }

  toggleRole() {
    this.isAdmin = !this.isAdmin;
  }
}
