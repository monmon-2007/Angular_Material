import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TableFilteringExampleComponent } from './table-filtering-example/table-filtering-example.component';
@NgModule({
  declarations: [
    AppComponent,
    TableFilteringExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
