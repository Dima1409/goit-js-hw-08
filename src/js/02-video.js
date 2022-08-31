import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const throttle = require('lodash.throttle');
const localStorageKey = 'videoplayer-current-time';

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
//todo onPlay ............................................................................
const onPlay = throttle(function (e) {
  localStorage.setItem(localStorageKey, e.seconds);
}, 1000);

player.on('timeupdate', onPlay);
//todo setCurrentTime ...............................................................
player
  .setCurrentTime(localStorage.getItem(localStorageKey))
  .then(function (e) {
    console.log('start time:', e);
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
