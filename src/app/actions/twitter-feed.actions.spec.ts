import * as fromTwitterFeed from './twitter-feed.actions';

describe('loadTwitterFeeds', () => {
  it('should return an action', () => {
    expect(fromTwitterFeed.loadTwitterFeeds().type).toBe('[TwitterFeed] Load TwitterFeeds');
  });
});
