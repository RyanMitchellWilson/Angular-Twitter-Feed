import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TwitterFeedEffects } from './twitter-feed.effects';

describe('TwitterFeedEffects', () => {
  let actions$: Observable<any>;
  let effects: TwitterFeedEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TwitterFeedEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(TwitterFeedEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
