import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { SharedModule } from "../shared/shared.module";
import { UserComponent } from "./user/user.component";

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    UserComponent
  ],
  providers: [],
  bootstrap: []
})
export class PagesModule { }
