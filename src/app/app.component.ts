import { Component } from '@angular/core';

import { Header } from './header/header.component';
import { Location } from './location/location.component';
import { Footer } from './footer/footer.component';

@Component({
  selector: 'its-five-oclock',
  moduleId: module.id,
  directives: [Header, Location, Footer],
  template: require('./app.component.html')
})
export class AppComponent { }
