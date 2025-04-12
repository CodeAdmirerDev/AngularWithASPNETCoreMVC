import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router'; // ✅ Add this line
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { EmpListComponent } from './components/emp-list/emp-list.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, // ✅ Add this to recognize <router-outlet>
    UserListComponent,  // ✅ declare component
    EmpListComponent // ✅ declare component
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
