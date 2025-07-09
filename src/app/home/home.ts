import { Component, inject } from "@angular/core";
import { HousingLocation } from "../housing-location/housing-location";
import { CommonModule } from "@angular/common";
import { HousingLocationInfo } from "../housing-location";
import { HousingService } from "../housing.service";

@Component({
  selector: "app-home",
  imports: [CommonModule, HousingLocation],
  templateUrl: "./home.html",
  styleUrls: ["./home.css"],
})
export class Home {
  protected title = "home";

  housingService: HousingService = inject(HousingService);
  housingLocationList: HousingLocationInfo[] = [];
  filteredLocationList: HousingLocationInfo[] = [];

  constructor() {
    this.housingService
      .getAllHousingLocations()
      .then((housingLocationList: HousingLocationInfo[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
      });
  }

  filterResults = (text: string) => {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  };
}
