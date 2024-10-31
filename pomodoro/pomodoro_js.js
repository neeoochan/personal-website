let timer;
let isRunning = false;
let timeLeft;
const defaultPomodoro = 25 * 60;
let pomodoroTime = defaultPomodoro;
let shortBreakTime = 5 * 60;
let longBreakTime = 15 * 60;

const timeDisplay = document.getElementById('time');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function startTimer(duration) {
    timeLeft = duration;
    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            isRunning = false;
            alert("Time's up!");
            return;
        }
        timeLeft--;
        timeDisplay.textContent = formatTime(timeLeft);
    }, 1000);
}

startBtn.addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        startTimer(timeLeft || pomodoroTime);
    }
});

pauseBtn.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
});

resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    timeLeft = pomodoroTime;
    timeDisplay.textContent = formatTime(timeLeft);
});
