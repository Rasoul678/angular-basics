import { Component, inject } from "@angular/core";
import { CarService } from "../car.service";

@Component({
  selector: "app-cars",
  imports: [],
  templateUrl: "./cars.html",
  styleUrl: "./cars.css",
})
export class Cars {
  protected title = "cars";
  carService = inject(CarService);

  display = this.carService.getCars().join(" ⭐️ ");
}
