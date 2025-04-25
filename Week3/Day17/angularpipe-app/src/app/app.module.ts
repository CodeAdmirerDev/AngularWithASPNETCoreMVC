import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuiltinPipesDemoComponent } from './components/builtin-pipes-demo/builtin-pipes-demo.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { SubstringImpurepipePipe } from './pipes/substring-impurepipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BuiltinPipesDemoComponent,
    ReversePipe,
    SubstringImpurepipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
