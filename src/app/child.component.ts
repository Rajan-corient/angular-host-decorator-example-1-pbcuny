import { Component, SkipSelf, Self, Optional, Host } from "@angular/core";
import { RandomService } from "./random-service";

@Component({
  selector: "my-child",
  providers: [],
  viewProviders: [],
  template: `
    <div class="box">
      <p>ChildComponent => {{ randomNo }}</p>

      <my-grandChild></my-grandChild>
    </div>
  `
})
export class ChildComponent {
  randomNo;
  constructor(private randomService: RandomService) {
    this.randomNo = randomService.RandomNo;
  }
}

//@Host
