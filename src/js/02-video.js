import Player from "@vimeo/player";
import throttle from "lodash.throttle";


const iframeRef = document.querySelector("#vimeo/player");
const player = new Player(iframeRef);
const TIME_KEY = 'videoplayer-current-time';
   
const onPlay = function ({ seconds }) {
    
    localStorage.setItem(TIME_KEY, JSON.stringify(seconds));
};


player.on("timeupdate", throttle(onPlay));

const sevedSettings = localStorage.getItem(TIME_KEY);
if (sevedSettings) {
    const parsedSettings = JSON.parse(sevedSettings);
    player.setCurrentTime(parsedSettings);
}