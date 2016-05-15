import { Injectable } from '@angular/core';

import { Place } from './place';
import { places } from './place.list';

@Injectable()
export class PlaceService {
  places: { [key: string]: Place } = {};

  constructor(places) {
    this.places = places;
  }

  getPlaces() {
    return this.places;
  }

  getPlace(key: string) {
    return this.places[key];
  }

  getWhereItsFiveOClockRightNow() {
    let date = new Date();

    let timezoneOffset = date.getUTCHours();

    let key = (17 - timezoneOffset);

    return this.places[key];
  }
}
