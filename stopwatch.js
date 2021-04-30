let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let int;

document.getElementById('x').addEventListener('click',()=>{
    int = setInterval(diplayTimer,10);
})
// const startTimer = () => {
//     int = setInterval(diplayTimer,10);
// };

document.getElementById('y').addEventListener('click', ()=>{
    clearInterval(int);
})
// const stopTimer =  () => {
//     clearInterval(int);
// };
document.getElementById('z').addEventListener('click',()=>{
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    document.querySelector('.timerDisplay').innerHTML = "00 : 00 : 00 : 000"
})
// const resetTimer = () => {
//     clearInterval(int);
//     [milliseconds,seconds,minutes,hours] = [0,0,0,0];
//     document.querySelector('.timerDisplay').innerHTML = "00 : 00 : 00 : 000"
// }

function diplayTimer(){
    milliseconds+=10
    if(milliseconds==1000){
        milliseconds=0;
        seconds++;
        if(seconds==60){
            seconds=0;
            minutes++;
            if(minutes==60){
                minutes=0;
                hours++;
            }
        }
    }

    let h = hours<10?"0"+hours:hours;
    let m = minutes<10 ? "0"+minutes : minutes;
    let s = seconds<10 ? "0"+seconds : seconds;
    let ms = milliseconds<10 ? "00"+milliseconds : milliseconds<100 ? "0" +milliseconds : milliseconds;

    document.querySelector('.timerDisplay').innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}
