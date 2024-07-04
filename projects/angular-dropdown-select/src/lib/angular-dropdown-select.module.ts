import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularDropdownSelectComponent } from './angular-dropdown-select.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AngularDropdownSelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    AngularDropdownSelectComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AngularDropdownSelectModule { }
