import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskDashboardComponent } from './components/task-dashboard/task-dashboard.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { StatisticsPanelComponent } from './components/statistics-panel/statistics-panel.component';
import { ViewChildExampleComponent } from './components/view-child-example/view-child-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    TaskDashboardComponent,
    TaskItemComponent,
    StatisticsPanelComponent,
    ViewChildExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
