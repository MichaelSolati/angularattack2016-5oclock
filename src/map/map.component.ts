import { Component } from '@angular/core';

@Component({
  selector: 'map',
  moduleId: module.id,
  templateUrl: 'map.component.html'
})
export class Map implements OnInit {
  location: Object;
  mapOptions: Object;
  map: Object;

  constructor () {

  }

  ngOnInit() {
    this.location = new google.maps.LatLng(41.974943, -87.656380);

    this.mapOptions = {
      zoom: 18,
      center: this.location
    };

    this.map = new google.maps.Map(
      document.getElementById('map'),
      this.mapOptions
    );

    let youAreHere = new google.maps.Marker({
      position: this.location,
      title:"Drinking Time!",
    });
    youAreHere.setMap(this.map);
  }
}
