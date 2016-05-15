import {it, inject, describe, beforeEachProviders, expect} from '@angular/core/testing';

import { PlaceService } from './place.service';


describe('PlaceService', () => {
  beforeEachProviders(() => [PlaceService]);

  it ('should work', inject([PlaceService], (subject: PlaceService) => {
    let place = {
      "City": "Jamestown, Saint Helena",
      "Lat": -15.928634,
      "Lng": -5.715175
    };
    expect(subject.getPlace("0")).to.equal(place);
  }));
});
