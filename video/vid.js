const apiKey = 'AIzaSyCRrR6AmsUmlZb6GUgCT80kRW9dmLH-z28';
const videoId = 'YOUR_UNLISTED_VIDEO_ID';

const script = document.createElement('script');
script.src = 'https://www.youtube.com/iframe_api';
document.head.appendChild(script);

let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: videoId,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    // You can do something when the player is ready, if needed.
}

function onPlayerStateChange(event) {
    // You can handle player state changes (e.g., video ended).
}
