import { bootstrap }    from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppComponent } from './app/app.component';
import { ANGULAR2_GOOGLE_MAPS_PROVIDERS } from 'angular2-google-maps/core';

if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [ANGULAR2_GOOGLE_MAPS_PROVIDERS]);
