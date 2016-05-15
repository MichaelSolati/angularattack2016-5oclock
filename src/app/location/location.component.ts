import { Component } from '@angular/core';
import {ANGULAR2_GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';
import { PlaceService } from '../place/place.service'
import { Place } from '../place/place';

@Component({
  selector: 'foc-location',
  directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES],
  moduleId: module.id,
  template: require('./location.component.html')
})
export class Location {
  lat: Number = 41.974943;
  lng: Number = -87.656380;
  zoomLevel: Number =11;
  place: Place;

  constructor(PlaceService) {
    this.place = PlacesService.getWhereItsFiveOClockRightNow();
  }
}
