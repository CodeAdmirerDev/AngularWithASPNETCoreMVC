import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SecureComponent } from './components/secure/secure.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http'; // ✅ IMPORT THIS
import { JwtInterceptor } from './interceptors/jwt.interceptor'; // ✅ path to interceptor

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SecureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, // ✅ ADD THIS IN IMPORTS ARRAY
  ],
  providers: [
    provideHttpClient(withFetch()), // ✅ Add this line to enable `fetch`
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true } // ✅ ADD THIS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
