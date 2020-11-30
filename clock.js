const clockContainer = document.querySelector(".js-clock"),
 clockTitle = clockContainer.querySelector(".js-title");

function getTime(){
    const date = new Date();
    const houres = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${houres < 10 ? `0${houres}` : houres}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();