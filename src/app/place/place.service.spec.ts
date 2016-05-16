import {it, inject, describe, beforeEachProviders, expect} from '@angular/core/testing';

import { Place } from './place';

import { PlaceService } from './place.service';


describe('PlaceService', () => {
  beforeEachProviders(() => [PlaceService]);

  describe('#getPlace', () => {
    it ('should return "Jamestown" when timezoneOffset of "0" is requested',
    inject([PlaceService], (subject: PlaceService) => {
      let place: Place = {
        city: "Jamestown, Saint Helena",
        lat: -15.928634,
        lng: -5.715175
      };

      expect(subject.getPlace("0")).toEqual(place);
    }));
  });
});
