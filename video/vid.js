// Replace 'YOUR_API_KEY' with your actual YouTube API key.
const apiKey = 'AIzaSyCRrR6AmsUmlZb6GUgCT80kRW9dmLH-z28';
const videoId = 'YOUR_UNLISTED_VIDEO_ID';

// Load the YouTube Iframe API asynchronously.
const script = document.createElement('script');
script.src = 'https://www.youtube.com/iframe_api';
document.head.appendChild(script);

let player;

// This function will be called when the API is ready.
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

// The API will call this function when the video player is ready.
function onPlayerReady(event) {
    // You can do something when the player is ready, if needed.
}

// The API calls this function when the player's state changes.
function onPlayerStateChange(event) {
    // You can handle player state changes (e.g., video ended).
}
