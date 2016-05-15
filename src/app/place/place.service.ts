import { Injectable } from '@angular/core';

import { Place } from './place';
import { PLACES } from './place.list';

@Injectable()
export class PlaceService {
  getPlaces() {
    return PLACES;
  }

  getPlace(key: string) {
    return PLACES[key];
  }

  getWhereItsFiveOClockRightNow() {
    // let date = new Date();
    //
    // let timezoneOffset = date.getUTCHours();

    let key = (17 - (new Date().getUTCHours()));

    return PLACES[key];
  }
}
