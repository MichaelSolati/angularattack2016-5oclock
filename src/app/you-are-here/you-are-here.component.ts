import { Component } from '@angular/core';
import {ANGULAR2_GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';

@Component({
  selector: 'you-are-here',
  directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES],
  moduleId: module.id,
  template: require('./you-are-here.component.html')
})
export class YouAreHere {
  lat: Number = 41.974943;
  lng: Number = -87.656380;
  zoomLevel: Number =11;
}
