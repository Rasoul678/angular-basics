import { Component, input } from '@angular/core';
import { HousingLocationInfo } from '../housing-location';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [RouterModule],
  templateUrl: './housing-location.html',
  styleUrl: './housing-location.css'
})
export class HousingLocation {
  protected title = "Housing Location"
  housingLocation = input.required<HousingLocationInfo>()
}
