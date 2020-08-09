import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TwitterFeedComponent } from './twitter-feed/twitter-feed.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { TwitterFeedEffects } from './effects/twitter-feed.effects';

@NgModule({
  declarations: [
    AppComponent,
    TwitterFeedComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, {
      metaReducers, 
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([TwitterFeedEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
