import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter/counter.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { CounterButtonsComponent } from './counter/counter-buttons/counter-buttons.component';
import { CounterserviceComponent } from './counterwithservice/counterservice/counterservice.component';
import { CounterserviceButtonsComponent } from './counterwithservice/counterservice-buttons/counterservice-buttons.component';
import { CounterserviceOutputComponent } from './counterwithservice/counterservice-output/counterservice-output.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    CounterserviceComponent,
    CounterserviceButtonsComponent,
    CounterserviceOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
