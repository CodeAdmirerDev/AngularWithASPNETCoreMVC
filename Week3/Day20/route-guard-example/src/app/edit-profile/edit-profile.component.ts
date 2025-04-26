import { Component } from '@angular/core';
import { CanComponentDeactivate } from '../guards/can-deactivate.guard';

@Component({
  selector: 'app-edit-profile',
  standalone: false,
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent implements CanComponentDeactivate {


  formDirty = false;  

  canDeactivate(): boolean {  
    if (this.formDirty) {  
      return confirm('You have unsaved changes! Do you really want to leave?');  
    }  
    return true;  
  }  
}
