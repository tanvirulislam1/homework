const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

const startbtn = document.getElementById('btn-start');
const stopbtn = document.getElementById('btn-stop');
const resetbtn = document.getElementById('btn-reset');

//Event Listiner
startbtn.addEventListener('click', start);
stopbtn.addEventListener('click', stop);
resetbtn.addEventListener('click', reset);

const seconds = 0;
const interval = null;

function timer (){
    second++;

    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds - (hrs * 3600)) / 60);
    const secs = seconds % 60;

    if (secs < 10) secs = '0' + secs;
    if (mins < 10) mins = '0' + mins;
    if (hrs < 10) hrs = '0' + hrs;

    hour.innerText = hrs;
    minute.innerText = mins;
    second.innerText = secs;
};

function start(){
    if (interval){
        return
    }
    interval = setInterval(timer, 1000);
}