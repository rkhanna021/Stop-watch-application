let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let timeElapsed = 0;

const timeDisplay = document.querySelector('.time');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

function startTimer() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        running = true;
    }
}

function pauseTimer() {
    if (running) {
        clearInterval(tInterval);
        running = false;
    }
}

function resetTimer() {
    clearInterval(tInterval);
    timeElapsed = 0;
    running = false;
    timeDisplay.innerHTML = "00:00:00";
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime + timeElapsed;
    
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);
    
    const formattedHours = hours < 10 ? '0' + hours : hours;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    
    timeDisplay.innerHTML = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
