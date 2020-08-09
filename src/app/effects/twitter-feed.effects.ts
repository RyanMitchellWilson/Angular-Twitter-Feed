import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TwitterFeedActionTypes, LoadTwitterFeed } from '../actions/twitter-feed.actions'
import { map, mergeMap, catchError } from 'rxjs/operators'
import { State } from '../reducers'
import { Store } from '@ngrx/store'
import { of } from 'rxjs'
import PubNub from 'pubnub'

@Injectable()
export class WeatherEffects {

  @Effect()
  loadLocation$ = this.actions$
    .pipe(
      ofType<LoadTwitterFeed>(TwitterFeedActionTypes.LoadTwitterFeed),
      mergeMap((action) => {
        const pubnub = new PubNub({
          subscribe_key: 'sub-c-78806dd4-42a6-11e4-aed8-02ee2ddab7fe'
        })
        pubnub.addListener({
          message: (message) => {
            return [message.message]
          }
        })
        pubnub.subscribe({
          channels: ['pubnub-twitter']
        })

        return pubnub
      })
      // .pipe(
      //   map(twitterFeed => {
      //     return (new LoadTwitterFeed(twitterFeed));
      //   })
      // ))
  )

  constructor(private actions$: Actions, private store: Store<State>, private weatherService: WeatherService) { }

}
