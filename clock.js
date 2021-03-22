const clockContainer= document.querySelector(".js-clock"),
    clockTitle= clockContainer.querySelector("h1");

function getTime(){
    const date=new Date();
    const minutes=date.getMinutes();
    const hours=date.getHours();
    const seconds=date.getSeconds();
    clockTitle.innerText=`${hours<10 ? `0${hours}` : hours}:${minutes<10 ? `0${minutes}` : minutes}:${seconds<10 ? `0${seconds}` : seconds}`; // mini if_ else:
}

function init(){
    getTime();
    setInterval(getTime,1000); //First argument: takes function to execute. Second argument: how often it should execute

}

init();