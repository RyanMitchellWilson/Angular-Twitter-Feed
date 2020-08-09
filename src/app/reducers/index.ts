import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment'
import { TwitterFeedActionTypes, TwitterFeedAction } from '../actions/twitter-feed.actions'

export interface State {
  twitterFeedData: {
    twitterFeed: any[]
  }
}

export interface TwitterFeedState {
  twitterFeed: any[]
}

const initialTwitterFeedState: TwitterFeedState = {
  twitterFeed: []
}

export function twitterFeedReducer(state = initialTwitterFeedState, action: TwitterFeedAction): TwitterFeedState {
  switch (action.type) {
    case TwitterFeedActionTypes.LoadTwitterFeed:
      return {
        twitterFeed: action.twitterFeed,
      }

    default:
      return state
  }
}

export const reducers: ActionReducerMap<State> = {
  twitterFeedData: twitterFeedReducer
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
