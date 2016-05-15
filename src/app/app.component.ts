import { Component } from '@angular/core';

import { Header } from './header/header.component';
import { YouAreHere } from './you-are-here/you-are-here.component';
import { Footer } from './footer/footer.component';

@Component({
  selector: 'its-five-oclock',
  moduleId: module.id,
  directives: [Header, YouAreHere, Footer],
  template: require('./app.component.html')
})
export class AppComponent { }
