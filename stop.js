let secTag=document.getElementById("sec");
let minTag=document.getElementById("min");
let mSecTag=document.getElementById("msec");
let startBtn= document.getElementById('start');
let stopBtn=document.getElementById("stop");
let resetBtn= document.getElementById("reset");

let sec=0;
let mSec=0;
let min=0;
let interval=null;
flag=false;

function timer()
{
    mSec=mSec+1;
    if(mSec==100)
        {
            sec=sec+1;
            mSec=0;
        }
    if(sec==60)
    {
        min=min+1;
        sec=0;
    }
    mSecTag.innerText=concatZero(mSec);
    secTag.innerText=concatZero(sec);
    minTag.innerText=concatZero(min);
}


 function concatZero(time)
 {
    if(time<=9) return "0"+time;
    else return time;
 }


startBtn.addEventListener('click', function()
{

    if(!flag)
    {
        interval= setInterval(timer,10);
        flag=true;
    }
});

stopBtn.addEventListener('click',function()
{
    if(flag)
    {
        clearInterval(interval);
        flag=false;
    }
});

resetBtn.addEventListener('click',function()
{
    clearInterval(interval);
    flag=false;
    sec=0;
    min=0;
    mSec=0
    mSecTag.innerText="00";
    secTag.innerText="00";
    minTag.innerText="00";
    
});