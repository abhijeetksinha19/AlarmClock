const display = document.getElementById('clock');
const list = document.querySelector('#list');
const music = new Audio('./oversimplified-alarm-clock-113180.mp3');
music.loop = true;
let alarm = null;
let alarmTimeover = null;

const alarmArray = [];
                //FOR TIME DISPLAY
function updateTime(){
    const date = new Date();

    const hour = formatTime(date.getHours());
    const minutes = formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());

    display.innerText= `${hour}:${minutes}:${seconds}`;

    const ringTime = `${hour}:${minutes}:${seconds}`;

    if(alarmArray.includes(ringTime)){
        music.play();
        alert(`It's ${now} Time`)
    }
}

function formatTime(time){
    if (time<10){
        return '0' + time;
    }
    return time;
}
                        //ALARM
function AlarmTime(value){
    alarm = value;
}
                    //FOR ACTIVATING ALARM
function Alarm(){
    if(alarm){
        const present = new Date();
        const alarm_time = new Date(alarm);
        if(alarm_time>present){
            const timeOver = alarm_time.getTime()-present.getTime;
            alarmTimeout = setTimeout(()=>music.play(),timeOver);
            alert('Your Alarm Has Been Set');
        }
    }
}
                     //FOR DEACTIVATING ALARM
function Cancel(){
    music.pause();
    if(alarmtimeOver){
        clearTimeout(alarmtimeOver);
        alert('Your Alarm Has Been Disabled')
    }
}
                        //FOR TIME UPDATE
setInterval(updateTime, 1000);