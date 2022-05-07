import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ChildComponent } from "./child.component";
import { GrandChildComponent } from "./grand-child.component";
import { testDirective } from "./test-directive";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    ChildComponent,
    GrandChildComponent,
    testDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
