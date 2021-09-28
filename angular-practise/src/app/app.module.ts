import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { EditComponent } from './product/edit/edit.component';
// import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { fas } from '@fortawesome/free-solid-svg-icons'

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
