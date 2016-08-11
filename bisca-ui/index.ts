import { bootstrap } from 'angular2/platform/browser';
import { provide } from 'angular2/core';
import { FORM_PROVIDERS } from 'angular2/common';
import { ROUTER_PROVIDERS } from 'angular2/router';
import { Http, HTTP_PROVIDERS } from 'angular2/http';
import { AuthConfig, AuthHttp } from 'angular2-jwt';

import { App } from './app/login/app';
import { AppComponent } from './app/home/app.component';
import { PlayerStatusComponent } from './app/game/app.game';
import { Configuration } from './app/services/app.constants';

bootstrap(
  App,
  [
    FORM_PROVIDERS,
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(AuthHttp, {
      useFactory: (http) => {
        return new AuthHttp(new AuthConfig({
          tokenName: 'jwt'
        }), http);
      },
      deps: [Http]
    }
    )
  ]
);

bootstrap (AppComponent);
