import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HousingService } from "../housing.service";
import { HousingLocationInfo } from "../housing-location";

@Component({
  selector: "app-details",
  imports: [],
  templateUrl: "./details.html",
  styleUrl: "./details.css",
})
export class Details {
  protected title = "details page";

  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocation: HousingLocationInfo | undefined;

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params["id"]);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId)
  }
}
