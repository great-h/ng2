import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {environment} from './app/environment';
import {Ng2App} from './app/ng2.component';

if (environment.production) {
  enableProdMode();
}

bootstrap(Ng2App);
