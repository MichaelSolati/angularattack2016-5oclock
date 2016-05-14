import { Component } from '@angular/core';
import {ANGULAR2_GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';

@Component({
  selector: 'map',
  directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES],
  moduleId: module.id,
  templateUrl: 'map.component.html'
})
export class Map {
  lat: number = 41.974943;
  lng: number = -87.656380;
}
