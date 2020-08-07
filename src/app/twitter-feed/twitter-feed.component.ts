import { Component, OnInit } from '@angular/core'
import PubNub from 'pubnub'

// let twitterData = []

// const pubnub = new PubNub({
//   subscribe_key: 'sub-c-78806dd4-42a6-11e4-aed8-02ee2ddab7fe'
// })
// pubnub.addListener({
//   message: (message) => {
//     // console.log(message.message)
//     if (twitterData.length >= 50) {
//       twitterData.concat(message.message).slice(1, 51)
//     }
//     else {
//       twitterData = twitterData.concat(message.message)
//     }
//     // console.log('Number of tweets -> ', twitterData.length)
//   }
// })
// pubnub.subscribe({
//   channels: ['pubnub-twitter']
// })

@Component({
  selector: 'app-twitter-feed',
  templateUrl: './twitter-feed.component.html',
  styleUrls: ['./twitter-feed.component.css']
})
export class TwitterFeedComponent implements OnInit {

  twitterFeed = []

  constructor() {
    const pubnub = new PubNub({
      subscribe_key: 'sub-c-78806dd4-42a6-11e4-aed8-02ee2ddab7fe'
    })
    pubnub.addListener({
      message: (message) => {
        // console.log(message.message)
        if (this.twitterFeed.length >= 25) {
          this.twitterFeed = this.twitterFeed.concat(message.message).slice(1)
        }
        else {
          this.twitterFeed = this.twitterFeed.concat(message.message)
        }
        console.log(this.twitterFeed[0])
      }
    })
    pubnub.subscribe({
      channels: ['pubnub-twitter']
    })
  }

  ngOnInit(): void {
  }

}
