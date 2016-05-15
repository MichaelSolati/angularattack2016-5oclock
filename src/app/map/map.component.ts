import { Component } from '@angular/core';
import {ANGULAR2_GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';

@Component({
  selector: 'map',
  directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES],
  moduleId: module.id,
  template: require('./map.component.html')
})
export class Map {
  lat: Number = 41.974943;
  lng: Number = -87.656380;
  zoomLevel: Number =11;
}
