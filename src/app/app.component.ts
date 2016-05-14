import { Component } from '@angular/core';

import { Navbar } from '../navbar/navbar.component';
import { YouAreHere } from '../you-are-here/you-are-here.component';
import { Map } from '../map/map.component';

@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  directives: [Navbar, YouAreHere, Map]
})
export class AppComponent { }
