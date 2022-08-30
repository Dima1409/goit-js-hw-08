import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const throttle = require('lodash.throttle');

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
//todo onPlay ............................................................................
const onPlay = throttle(function (e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
}, 1000);

player.on('timeupdate', onPlay);
//todo setCurrentTime ...............................................................
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
