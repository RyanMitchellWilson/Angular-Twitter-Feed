import { Action } from '@ngrx/store'

export enum TwitterFeedActionTypes {
  LoadTwitterFeed = 'LoadTwitterFeed'
}

export class TwitterFeedAction implements Action {
  type: string
  twitterFeed: []
}

export class LoadTwitterFeed implements Action {
  readonly type = TwitterFeedActionTypes.LoadTwitterFeed

  constructor(readonly twitterFeed: []) {

  }
}

export type TwitterFeedActions = LoadTwitterFeed
