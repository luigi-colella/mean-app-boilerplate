import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { DialogComponent } from "./components/dialog/dialog.component";
import { InputWrapperComponent } from "./components/input-wrapper/input-wrapper.component";

@NgModule({
  declarations: [
    DialogComponent,
    InputWrapperComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  exports: [
    DialogComponent,
    InputWrapperComponent,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
