import { Component, ComponentRef, ViewChild, viewChild, ViewContainerRef } from '@angular/core';
import { ChildComponentComponent } from './child-component/child-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lifecycle-demoapp';
  

  @ViewChild('container',{read:ViewContainerRef}) container!: ViewContainerRef;
  childRef!: ComponentRef<ChildComponentComponent> |null;

  createChild(){

    if(!this.childRef){
      this.childRef= this.container.createComponent(ChildComponentComponent);
    }

  }

  destroyChild(){

    if(this.childRef){

      this.childRef.destroy();
      this.childRef =null;
    }
  }


}
