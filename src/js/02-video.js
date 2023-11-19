
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

player.on('timeupdate', throttle(handleTimeUpdate, 1000));

function handleTimeUpdate(evt) {
    localStorage.setItem(TIME_KEY, evt.seconds);
};

const savedTime = JSON.parse(localStorage.getItem(TIME_KEY));

if (savedTime) {
    player.setCurrentTime(savedTime);
}