import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  UpperCasePipe,
} from "@angular/common";
import { Component } from "@angular/core";
import { StarPipe } from "../star-pipe";

@Component({
  selector: "app-pipes",
  imports: [UpperCasePipe, DatePipe, DecimalPipe, CurrencyPipe, StarPipe],
  templateUrl: "./pipes.html",
  styleUrl: "./pipes.css",
})
export class Pipes {
  protected title = "Pipes";

  loadMessage = "Wir denken, dass du super machst!";
  birthday = new Date();
  number = 3.1415;
  cost = 4560.34;
  myName = "Rasoul Hesamirostami";
}
