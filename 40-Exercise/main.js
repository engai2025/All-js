// Video player variables
const video = document.getElementById('video');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.querySelector('.progress-bar');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const volumeSlider = document.getElementById('volume-slider');
const speedSelect = document.getElementById('speed-select');
const fullscreenBtn = document.getElementById('fullscreen-btn');
const volumeIcon = document.getElementById('volume-icon');
const videoTitle = document.getElementById('video-title');
const videoDescription = document.getElementById('video-description');

// Video playlist
const videos = [
    {
        title: 'Big Buck Bunny',
        description: 'Sample Video 1',
        src: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
        title: 'Sample Video 2',
        description: 'Another sample video',
        src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
    },
    {
        title: 'Sample Video 3',
        description: 'Third sample video',
        src: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4'
    }
];

let currentVideoIndex = 0;
let isPlaying = false;

// Load video
function loadVideo(index) {
    if (videos[index]) {
        video.src = videos[index].src;
        videoTitle.textContent = videos[index].title;
        videoDescription.textContent = videos[index].description;
    }
}

// Play video
function playVideo() {
    video.play();
    isPlaying = true;
    playBtn.querySelector('i').classList.remove('fa-play');
    playBtn.querySelector('i').classList.add('fa-pause');
}

// Pause video
function pauseVideo() {
    video.pause();
    isPlaying = false;
    playBtn.querySelector('i').classList.remove('fa-pause');
    playBtn.querySelector('i').classList.add('fa-play');
}

// Toggle play/pause
function togglePlay() {
    if (isPlaying) {
        pauseVideo();
    } else {
        playVideo();
    }
}

// Previous video
function previousVideo() {
    currentVideoIndex = currentVideoIndex > 0 ? currentVideoIndex - 1 : videos.length - 1;
    loadVideo(currentVideoIndex);
    if (isPlaying) {
        playVideo();
    }
}

// Next video
function nextVideo() {
    currentVideoIndex = currentVideoIndex < videos.length - 1 ? currentVideoIndex + 1 : 0;
    loadVideo(currentVideoIndex);
    if (isPlaying) {
        playVideo();
    }
}

// Update progress
function updateProgress() {
    const { duration, currentTime } = video;
    
    if (duration) {
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;
        
        // Update time display
        currentTimeEl.textContent = formatTime(currentTime);
        durationEl.textContent = formatTime(duration);
    }
}

// Set progress
function setProgress(e) {
    const width = progressBar.clientWidth;
    const clickX = e.offsetX;
    const duration = video.duration;
    
    if (duration) {
        video.currentTime = (clickX / width) * duration;
    }
}

// Format time helper
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Update volume icon
function updateVolumeIcon() {
    const volume = video.volume;
    const icon = volumeIcon;
    
    icon.classList.remove('fa-volume-up', 'fa-volume-down', 'fa-volume-mute');
    
    if (volume === 0) {
        icon.classList.add('fa-volume-mute');
    } else if (volume < 0.5) {
        icon.classList.add('fa-volume-down');
    } else {
        icon.classList.add('fa-volume-up');
    }
}

// Toggle fullscreen
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        video.requestFullscreen().catch(err => {
            console.log(`Error attempting to enable fullscreen: ${err.message}`);
        });
        fullscreenBtn.querySelector('i').classList.remove('fa-expand');
        fullscreenBtn.querySelector('i').classList.add('fa-compress');
    } else {
        document.exitFullscreen();
        fullscreenBtn.querySelector('i').classList.remove('fa-compress');
        fullscreenBtn.querySelector('i').classList.add('fa-expand');
    }
}

// Event listeners
playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', previousVideo);
nextBtn.addEventListener('click', nextVideo);
video.addEventListener('timeupdate', updateProgress);
video.addEventListener('loadedmetadata', updateProgress);
progressBar.addEventListener('click', setProgress);
fullscreenBtn.addEventListener('click', toggleFullscreen);

// Volume control
volumeSlider.addEventListener('input', (e) => {
    video.volume = e.target.value;
    updateVolumeIcon();
});

// Speed control
speedSelect.addEventListener('change', (e) => {
    video.playbackRate = parseFloat(e.target.value);
});

// Video ended event
video.addEventListener('ended', () => {
    pauseVideo();
    nextVideo();
});

// Keyboard controls
document.addEventListener('keydown', (e) => {
    switch(e.code) {
        case 'Space':
            e.preventDefault();
            togglePlay();
            break;
        case 'ArrowLeft':
            video.currentTime -= 10;
            break;
        case 'ArrowRight':
            video.currentTime += 10;
            break;
        case 'ArrowUp':
            e.preventDefault();
            video.volume = Math.min(video.volume + 0.1, 1);
            volumeSlider.value = video.volume;
            updateVolumeIcon();
            break;
        case 'ArrowDown':
            e.preventDefault();
            video.volume = Math.max(video.volume - 0.1, 0);
            volumeSlider.value = video.volume;
            updateVolumeIcon();
            break;
        case 'KeyF':
            toggleFullscreen();
            break;
    }
});

// Fullscreen change event
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        fullscreenBtn.querySelector('i').classList.remove('fa-compress');
        fullscreenBtn.querySelector('i').classList.add('fa-expand');
    }
});

// Initialize
loadVideo(currentVideoIndex);
updateVolumeIcon();

// Click to play/pause video
video.addEventListener('click', togglePlay);

console.log('Video player initialized successfully!');
