import { Component } from '@angular/core';

import { Map } from './map/map.component';
import { Navbar } from './navbar/navbar.component';
import { YouAreHere } from './you-are-here/you-are-here.component';

@Component({
  selector: 'its-five-oclock',
  moduleId: module.id,
  directives: [Navbar, YouAreHere, Map],
  template: require('./app.component.html')
})
export class AppComponent { }
